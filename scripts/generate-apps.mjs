#!/usr/bin/env node
import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = join(__dirname, '..', 'apps.json');
const ORG = 'xpandi-top';
const API = 'https://api.github.com';

const KNOWN_CATEGORIES = ['board-game', 'self-care', 'language', 'productivity', 'experiment'];
const FEATURED_KEYWORDS = ['botc', 'value', 'companion', 'journal'];

const headers = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': `${ORG}-app-shelf-generator`,
};
if (process.env.GITHUB_TOKEN) {
  headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
}

async function ghFetch(path) {
  const url = `${API}${path}`;
  const res = await fetch(url, { headers });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`GitHub API ${res.status} for ${url}: ${body}`);
  }
  return res.json();
}

async function getRepos() {
  const all = [];
  let page = 1;
  while (true) {
    const batch = await ghFetch(`/users/${ORG}/repos?per_page=100&type=public&page=${page}`);
    all.push(...batch);
    if (batch.length < 100) break;
    page++;
  }
  return all;
}

async function getTopics(repoName) {
  try {
    const data = await ghFetch(`/repos/${ORG}/${repoName}/topics`);
    return data.names ?? [];
  } catch {
    return [];
  }
}

function titleCase(str) {
  return str
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

function pickCategory(topics) {
  for (const cat of KNOWN_CATEGORIES) {
    if (topics.includes(cat)) return cat;
  }
  return null;
}

function isFeatured(repoName) {
  const lower = repoName.toLowerCase();
  return FEATURED_KEYWORDS.some(kw => lower.includes(kw));
}

async function main() {
  console.log(`Fetching repos for ${ORG}…`);
  const repos = await getRepos();
  console.log(`Found ${repos.length} public repos. Checking topics…`);

  const apps = [];
  for (const repo of repos) {
    const topics = await getTopics(repo.name);
    if (!topics.includes('xpandi-app')) continue;

    const category = pickCategory(topics);
    apps.push({
      name: titleCase(repo.name),
      description: repo.description ?? '',
      category: category ?? 'experiment',
      status: repo.archived ? 'archived' : 'active',
      featured: isFeatured(repo.name),
      url: repo.homepage ?? null,
      repo: repo.html_url,
      updated_at: repo.pushed_at,
    });
    console.log(`  + ${repo.name} [${category ?? 'experiment'}]`);
  }

  if (apps.length === 0) {
    console.warn('No repos tagged xpandi-app found. Writing placeholder apps.json.');
  }

  const output = {
    generated_at: new Date().toISOString(),
    apps,
  };

  await writeFile(OUT_PATH, JSON.stringify(output, null, 2) + '\n', 'utf8');
  console.log(`Written ${apps.length} app(s) to ${OUT_PATH}`);
}

main().catch(err => { console.error(err); process.exit(1); });
