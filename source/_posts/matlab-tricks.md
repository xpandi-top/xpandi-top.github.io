---
title: matlab-tricks
copyright: true
comments: true
date: 2017-12-21 15:33:43
categories: 技术
tags: [matlab]
---
matlab小技巧，其实也不是小技巧，就是一些笔记吧。。。或者说吐槽。。。废话好多。。。
<!-- more -->
----------

### smooth

平滑数据

#### 用法

``` matlab
yy = smooth(y)
yy = smooth(y,span) % span 一定要是奇数，如果span设置为奇数，那么会自动减1
yy = smooth(y,method) % 有六种方法
yy = smooth(y,span,method)
yy = smooth(y,'sgolay',degree)
yy = smooth(y,span,'sgolay',degree)
yy = smooth(x,y,...)
gpuarrayYY = smooth(gpuarrayY)
``` 

smooth 当中默认的平滑参数是5步，普通的滑动平均
具体而言
yy(1) = y(1)
yy(2) = (y(1) + y(2) + y(3))/3
yy(3) = (y(1) + y(2) + y(3) + y(4) + y(5))/5
yy(4) = (y(2) + y(3) + y(4) + y(5) + y(6))/5


### dlmwrite

可以保存多种格式的文件，具体再matlab中可以查找，

不考虑那么多，可以保存多种格式的数据，txt，dat,csv


``` matlab
dlmwrite(filename,M)% M is data
```