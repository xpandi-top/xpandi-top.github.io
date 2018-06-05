---
title: python小技巧合辑
copyright: true
comments: true
categories:
    - 技术
    - python
tags:
    - python
abbrlink: 1c0e2abb
date: 2017-12-19 10:10:52
---
总结一下自己平时用到，或者发现到了一些python的小技巧和小trick。
<!-- more -->
放到这里的多半比较简单，不值得单独讲一讲，汇总以备查阅吧。

----------
-   #### 多变量迭代

对多个迭代器调用zip可以同时迭代多个iterable，其中一个停止则迭代停止。for循环神器。
 
可以从itertools中导入zip_longest，其会在多个迭代器中某一个迭代器结束后填充none，直到全部迭代器结束

``` python
# zip & zip_longest 样例
a = [1, 2, 3]
b = [5, 6, 7, 8]
for i, j in zip(a, b):
    print(i, j, end=";\t", sep=",")
print()
for i, j in zip_longest(a, b):
    print(i, j, end=";\t", sep=",")
```

输出如下：

``` python
1,5; 2,6; 3,7; 
1,5; 2,6; 3,7; None,8;
```

