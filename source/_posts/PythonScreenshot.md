---
title: python屏幕截图与鼠标操作
copyright: true
comments: true
date: 2017-12-27 21:29:38
categories: python
tags: [python, 截图]
---
python截图解决方案
windows下需要pywin32
<!--more-->
### 截图

一种方法是直接使用PIL
``` python
from PIL import ImageGrab
im = ImageGrab.grab()
im.save(addr,'jpeg')
```

### 鼠标／键盘模拟

一个python库：https://github.com/SavinaRoja/PyUserInput/wiki/Installation
可以直接用pip 安装
``` python
pip install PyUserInput
```

贴一段代码

``` python
# -*- coding: utf-8 -*- 
import pythoncom, pyHook  
def OnMouseEvent(event): 
  print 'MessageName:',event.MessageName 
  print 'Message:',event.Message 
  print 'Time:',event.Time 
  print 'Window:',event.Window 
  print 'WindowName:',event.WindowName 
  print 'Position:',event.Position 
  print 'Wheel:',event.Wheel 
  print 'Injected:',event.Injected 
  print '---' 
  # 返回 True 可将事件传给其它处理程序，否则停止传播事件 
  return True 
# 创建钩子管理对象 
hm = pyHook.HookManager() 
# 监听所有鼠标事件 
hm.MouseAll = OnMouseEvent # 等效于hm.SubscribeMouseAll(OnMouseEvent) 
# 开始监听鼠标事件 
hm.HookMouse() 
# 一直监听，直到手动退出程序 
pythoncom.PumpMessages()
# 这个例子程序捕捉了所有的鼠标事件，实际上我只需要捕捉向下滚动滚轮的事件即可。翻了下文档，对应的是MouseWheel，之后只要判断event.Wheel是否为-1即可。

# -*- coding: utf-8 -*- 
import pythoncom 
import pyHook 
import time 
import win32api 
import win32con 
def onMouseWheel(event): 
  if event.Wheel == -1: 
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN, 0, 0) 
    time.sleep(0.05) 
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP, 0, 0) 
  return True 
hm = pyHook.HookManager() 
hm.MouseWheel = onMouseWheel 
hm.HookMouse() 
pythoncom.PumpMessages() 
# 这段程序讲鼠标滚轮映射为鼠标单击

```



