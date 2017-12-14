---
title: two branches are working
date: 2017-12-09 18:01:12
categories: 技术
tags:
---
现在的github repo 结构：
branch hexo  存放hexo的source code
branch master 存放hexo的渲染之后的文件。

添加文章的流程：
在repo的目录（U:/xpandi-top.github.io/）下右键->git bash
hexo new "name"
编辑“name.md"文件
然后执行
```
git add .
git commit -m "add file"
git push origin hexo
hexo generate
hexo generate -d
```

在新电脑上配置的流程：
在本机目录进行git clone
在git bash 中执行：
```
npm install hexo
npm install
npm install hexo-deployer-git
```
