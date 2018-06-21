---
title: 在cmd里设置环境变量[Windows]
categories:
  - 技术
  - windows
copyright: true
comments: true
date: 2018-06-21 12:29:38
tags:
author: Di
---
不得不吐槽一下：在Windows的系统里找了环境变量的设置，但是就是不能生效，不知道为啥。最后cmd那里就搞定了2333
主要命令:set, setx
<!--more-->
### 添加环境变量至系统
就以我想添加miniconda的路径为例：path后面直接添加路径就可以了（只对当前的cmd有效）
``` cmd
set path=%path%;C:\Users\modi\Miniconda3\Scripts
```
如果像永久生效的话，命令改成下面这样的，用命令setx

``` cmd
setx PATH "%PATH%;C:\Users\modi\Miniconda3\Scripts"
```

### 查看当前所有可用的环境变量

``` cmd
set
```
### 设置临时的环境变量

``` cmd
set temp = "D:\temp"
```

### 查看某个环境变量

``` cmd
set %PATH%
set temp = "D:\temp"
set %temp
echo %PATH%
echo %TEMP%
```