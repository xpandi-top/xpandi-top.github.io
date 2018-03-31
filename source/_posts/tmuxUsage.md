---
title: tmux使用
copyright: true
comments: true
categories: 技术
tags:
  - tmux
  - 终端
abbrlink: cb2d43c3
date: 2017-12-29 08:15:15
---
自己在集群上需要用到tmux，把自己最近的使用心得总结一下。
<!--more-->
### 简介

tmux的作用主要有亮点：一是终端复用，二是保存工作状态。

### 安装

linux下
``` shell
sudo apt-get install tmux
```

mac os
``` bash
brew install tmux
```

### 基本信息

tmux的界面包括会话session，窗口window，面板panel。每次开启tmux，即自动创建了session 1 的 window 1。

bind-key：为防止快捷键与系统快捷键混淆，tmux提供了快捷键前缀。每次先按下快捷键前缀，再按下相应快捷键，默认快捷键为control-b（⌃b for mac）。

### 使用

##### 启动tmux

在终端中输入：

``` bash
tm [id]
```

将进入名为 id 的session，若session id不存在，则创建。

在集群中多人使用，每人开不同的session。需要多窗口开多个window或panel即可。

##### 常用操作

### 详细快捷键

##### 窗口
Option|cmd/shortkey
-------|
new | bind-key c
rename|  bind-key ,
index  | bind-key [1,2,…]
next    | bind-key n
previous |   bind-key p
kill   | bind-key x


##### 面板
Option | cmd/shortkey
------|
split(horizontal) | bind-key %
split(vertical)    | bind-key “
switch  | bind-key ↑ ↓ ← →
full screen | bind-key z
mini screen | bind-key z
scroll mode | bind-key [
quit scroll mode |   q
kill   | bind-key x

### 自定义设置

