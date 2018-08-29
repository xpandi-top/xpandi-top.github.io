---
title: Deep leaning处理EEG数据-braindecode工具箱
copyright: true
comments: true
categories: 
    - 技术
    - 工具箱
tags:
    - braindecode
    - eeg
author: Di
abbrlink: c786e694
date: 2017-12-31 01:48:03
---
最近在看braindecode的github文档，简单地做一下笔记记录，如果有需要可以随时查看

pytorch官网没有windows的安装方式，所以为了之后省事，所以改用ubuntu
<!--more-->

[文档链接](https://robintibor.github.io/braindecode/index.html)

### 必要的环境安装

- anaconda

从官网下载安装即可，由于涉及到EEG处理等心理学的工具箱，目前这些工具箱还没支持python3

所以需要有python2的环境，选择安装python2版本的或者是装2和3两个版本

- numpy

conda装numpy，如果没有就装一下好了

- mne

脑电处理的python工具包

- pytorch

pytorch官网http://pytorch.org/选择需要的安装包，下载，在conda下安装(在windows下装好像还很麻烦。。。)

- braindecode

### 未完待续
