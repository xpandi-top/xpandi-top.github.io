---
title: 图标库fontawesome
copyright: true
comments: true
categories:
    - 资源
    - 图标
tags:
    - 图标
abbrlink: e33c66fa
date: 2017-12-23 17:51:46
tags:
---
推荐一个方便的图标资源
<!-- more -->

网址：http://fontawesome.io

在hexo页面上的使用：
打开next主题的配置文件，找到如下位置：

``` yml
# ---------------------------------------------------------------
# Menu Settings
# ---------------------------------------------------------------

# When running the site in a subdirectory (e.g. domain.tld/blog), remove the leading slash from link value (/archives -> archives).
# Usage: `Key: /link/ || icon`
# Key is the name of menu item. If translate for this menu will find in languages - this translate will be loaded; if not - Key name will be used. Key is case-senstive.
# Value before `||` delimeter is the target link.
# Value after `||` delimeter is the name of FontAwesome icon. If icon (with or without delimeter) is not specified, question icon will be loaded.
menu:
  home: / || home
  about: /about/ || user-circle
  categories: /categories/ || bars 
  tags: /tags/ || tags
```

对menu中的每个条目，双竖线后面接的就是图标在网站中的名字。就可以在next主题中看到相应的图标。
注：有些图标会不成功，可能是权限问题。多换几个就会找到可以用的。