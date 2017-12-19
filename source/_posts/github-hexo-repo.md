---
title: Github Pages 博客搭建
date: 2017-12-09 18:01:12
author: Pan
categories: 技术
tags: [博客, hexo, git]
copyright: true
---
把自己折腾博客的过程贴上来吧。
<!-- more -->
## 搭建github 博客的步骤：

#### 在本地：
安装nodejs和git -> 安装hexo ->  hexo init -> 配置configuration

#### 在github上：
创建账户 -> 本机添加ssh -> 创建“账户名.github.io”的仓库 -> 填入hexo的配置文件

每次hexo deploy 都会把渲染好的文件上传到github仓库。

-----------------------------------

如果想在多台电脑上编辑，可以把hexo的源代码也上传到github，方便管理。只要将hexo源码和渲染后的网页放在不同的branch即可。

### 配置方法：
在repo中新建一个名为hexo的branch（可以先提交过去一个空文件，再删掉）。

进入配置页面把hexo分支设为主分支。

得到的的github repo 结构：

branch hexo  存放hexo的source code

branch master 存放hexo的渲染之后的文件。

每次都把编辑好的源代码push到hexo分支下，同时让hexo把generate之后的网页放在master分支。

### 添加文章的流程：
在repo的文件夹下进入终端（windows可以进入git bash）

``` shell
# 添加新文章
hexo new "name"
```
编辑“name.md"文件
``` shell
# 部署文章
git add .
git commit -m "add file"
git push origin hexo
hexo generate
hexo generate -d
```

### 在新电脑上配置的流程：
在任意文件夹执行：
``` shell
git clone *  # 替换为项目repo的链接
npm install
# 不需要再hexo init，直接编辑文件，然后
```
