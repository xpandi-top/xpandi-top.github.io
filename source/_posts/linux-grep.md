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
### cut
`cut`的作用是从文件中按列取内容。
参数：
```
-f  按field取列。
-d  分隔符，用于指示文件以什么分列，默认为tab。与-f配合使用。
-c  按字符数取列。
```
示例：（就用手边的一个bed文件做例子）
```
# 原始文件内容
head text.bed
chr1	2090	2475
chr1	2584	3083
chr1	4692	4832
chr1	4692	5658
chr1	4901	5658
chr1	5805	6469
chr1	5810	6469
chr1	6628	6716
chr1	6628	6720
chr1	6628	6738

#某些字符的列
cut -c 1-2,6-9 text.bed | head
ch090
ch584
ch692
ch692
ch901
ch805
ch810
ch628
ch628
ch628

# 第2列内容
cut -f2 text.bed | head
2090
2584
4692
4692
4901
5805
5810
6628
6628
6628
```
### `paste`
paste顾名思义就是把内容“粘贴”起来。


### `join`


### `grep`
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
