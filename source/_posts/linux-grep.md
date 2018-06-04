---
title: Linux命令grep
copyright: true
comments: true
categories: linux
tags:
  - 技术
  - linux
abbrlink: 8cd3a42b
date: 2018-04-02 20:40:40
---
趁着有空，把最近常用的／新学到的关于linux的命令整理出来。第一波：grep。
<!-- more -->
grep 是一个非常常用的，查询／匹配用的命令。
基本用法：
``` bash
grep apple test.txt
```

参数含义：
``` bash
$ man grep 
     grep [-abcdDEFGHhIiJLlmnOopqRSsUVvwxZ] [-A num] [-B num] [-C[num]]
          [-e pattern] [-f file] [--binary-files=value] [--color[=when]]
          [--colour[=when]] [--context[=num]] [--label] [--line-buffered]
          [--null] [pattern] [file ...]
```

小技巧：
``` bash
# match tab in grep 匹配制表符
grep apple$'\t' test.txt

# logic and in grep 逻辑与

# logic or in grep 逻辑或 
```
未完待续...
