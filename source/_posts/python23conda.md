---
title: python2和3版本管理[Win]
copyright: true
comments: true
categories:
    - 技术
    - python
tags:
    - anaconda
    - python多版本
author: Di
abbrlink: b5a05a6e
date: 2017-12-30 00:09:13
---
找python中使用的心理学工具包时，比如MNE，只能在python2中使用，

所以就想找一下怎么把2，3都装在一起。

在网上找了一下教程，然后呢，自己记录个人觉得比较简单的方式

目前只有windows 系统的，之后可能会考虑怎么倒腾linux。
<!-- more -->

### 安装anaconda

从链接中下载需要的anaconda的版本，如果只需要2的话直接下python2的版本，需要3的话下3的

这个安装就不多说了

https://www.anaconda.com/download/

### 在 anaconda prompt中创建python2的环境

打开anaconda prompt

输入以下代码（name之后环境名字，取什么影响不大，不过方便起见起python2或者能记得住的名字）

创建环境名，下载相应python版本

``` 
conda create --name python2 python=2.7
```

### 激活与取消激活

激活python2环境：早prompt中输入

``` 
activate python2
```

如果需要取消激活环境，则输入

``` 
deactivate python2
```

### 安装其他工具包

在新的环境中正常安装就可以了


