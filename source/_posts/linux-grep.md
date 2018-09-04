---
title: Linux字符处理
copyright: true
comments: true
categories:
    - 技术
    - linux
tags:
    - linux
abbrlink: 8cd3a42b
date: 2018-04-02 20:40:40
author: Pan
---
把最近学到的工具整理一下：grep, cut, paste, join。
更厉害的sed, awk, regex还是单开文章来写吧。
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
