const APPS_URL = `apps.json?v=${Date.now()}`;

const CATEGORY_LABELS = {
  'board-game': 'Board game',
  'self-care': 'Self-care',
  'language': 'Language',
  'productivity': 'Productivity',
  'experiment': 'Experiment',
};

let allApps = [];
let activeFilter = 'all';

async function init() {
  try {
    const res = await fetch(APPS_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    allApps = data.apps ?? [];
    setLastSynced(data.generated_at);
    renderApps();
  } catch (err) {
    console.error('Failed to load apps.json:', err);
    document.getElementById('app-grid').innerHTML = '';
    document.getElementById('error-state').classList.remove('hidden');
  }
}

function setLastSynced(iso) {
  const el = document.getElementById('last-synced');
  if (!iso) { el.textContent = 'unknown'; return; }
  try {
    el.textContent = new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  } catch {
    el.textContent = iso;
  }
}

function filterApps(apps, filter) {
  if (filter === 'featured') return apps.filter(a => a.featured);
  if (filter === 'experiment') return apps.filter(a => a.category === 'experiment');
  return apps;
}

function formatDate(iso) {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return null;
  }
}

function catClass(category) {
  const known = ['board-game', 'self-care', 'language', 'productivity', 'experiment'];
  return known.includes(category) ? `badge-cat-${category}` : 'badge-cat-default';
}

function statusClass(status) {
  const known = ['active', 'beta', 'archived'];
  return known.includes(status) ? `badge-status-${status}` : 'badge-status-archived';
}

function renderCard(app) {
  const catLabel = CATEGORY_LABELS[app.category] ?? app.category ?? 'Tool';
  const updatedLabel = formatDate(app.updated_at);
  const hasUrl = app.url && app.url !== 'null' && app.url !== '';
  const hasRepo = app.repo && app.repo !== '';

  return `<article class="app-card">
    <div class="card-top">
      <div class="card-badges">
        <span class="badge ${catClass(app.category)}">${escHtml(catLabel)}</span>
        <span class="badge ${statusClass(app.status)}">${escHtml(app.status ?? 'active')}</span>
        ${app.featured ? '<span class="badge badge-featured">★ Featured</span>' : ''}
      </div>
      <h2 class="card-name">${escHtml(app.name)}</h2>
      <p class="card-desc">${escHtml(app.description ?? '')}</p>
      ${updatedLabel ? `<p class="card-updated">Updated ${escHtml(updatedLabel)}</p>` : ''}
    </div>
    <div class="card-actions">
      ${hasUrl
        ? `<a class="btn-open" href="${escAttr(app.url)}" target="_blank" rel="noopener">Open App ↗</a>`
        : '<span class="btn-open" style="opacity:.45;cursor:default;">Coming soon</span>'}
      ${hasRepo
        ? `<a class="btn-repo" href="${escAttr(app.repo)}" target="_blank" rel="noopener">Repo</a>`
        : ''}
    </div>
  </article>`;
}

function renderApps() {
  const grid = document.getElementById('app-grid');
  const visible = filterApps(allApps, activeFilter);
  if (visible.length === 0) {
    grid.innerHTML = '<div class="empty-state"><p>No apps in this category yet.</p></div>';
    return;
  }
  grid.innerHTML = visible.map(renderCard).join('');
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    activeFilter = btn.dataset.filter;
    renderApps();
  });
});

init();
