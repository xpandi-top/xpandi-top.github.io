---
title: Ubuntu下安装dlib步骤
copyright: true
comments: true
categories:
  - 技术
  - linux
tags: 
  - dlib
  - unubtu
author: Di
abbrlink: 6af76d8
date: 2018-06-02 15:16:44
---

原文链接：https://www.learnopencv.com/install-dlib-on-ubuntu/
按照原文的步骤安装，没有什么太大的问题，主要是python创建虚拟环境那里报了错误。按照网上查找的资料是可以解决的。不过最后自己选择了用[conda管理环境][1]，感觉也挺方便的。
<!--more-->

介绍Ubuntu上装Dlib的步骤

### Step 1：安装 OS libraries


``` python?linenums
sudo apt-get install build-essential cmake pkg-config
sudo apt-get install libx11-dev libatlas-base-dev
sudo apt-get install libgtk-3-dev libboost-python-dev
```

### Step 2：安装 Python libraries


``` python?linenums
sudo apt-get install python-dev python-pip python3-dev python3-pip
sudo -H pip2 install -U pip numpy
sudo -H pip3 install -U pip numpy
```

利用python的虚拟环境来安装Python库（对于区分不同环境的使用是有益处的，*评：其实用比如conda创建虚拟环境也可以*）


``` python?linenums
# Install virtual environment
sudo pip2 install virtualenv virtualenvwrapper
sudo pip3 install virtualenv virtualenvwrapper
echo "# Virtual Environment Wrapper" >> ~/.bashrc
echo "source /usr/local/bin/virtualenvwrapper.sh" >> ~/.bashrc
source ~/.bashrc
  
############ For Python 2 ############
# create virtual environment
mkvirtualenv facecourse-py2 -p python2
workon facecourse-py2
  
# now install python libraries within this virtual environment
pip install numpy scipy matplotlib scikit-image scikit-learn ipython
  
# quit virtual environment
deactivate
######################################
  
############ For Python 3 ############
# create virtual environment
mkvirtualenv facecourse-py3 -p python3
workon facecourse-py3
  
# now install python libraries within this virtual environment
pip install numpy scipy matplotlib scikit-image scikit-learn ipython
  
# quit virtual environment
deactivate
######################################
```


#### Step 3：编译Dlib


#### Step 3.1:  编译 C++ binary


Dlib的作者，Davis King，建议通过[CMake使用Dlib][2]。但是如果只是把Dlib当作库来使用的话就按照以下步骤


``` python?linenums
wget http://dlib.net/files/dlib-19.6.tar.bz2
tar xvf dlib-19.6.tar.bz2
cd dlib-19.6/
mkdir build
cd build
cmake ..
cmake --build . --config Release
sudo make install
sudo ldconfig
cd ..
```

可以使用pkg-config为Dlib提供路径


``` python?linenums
pkg-config --libs --cflags dlib-1
```


#### Step 3.2：编译 Python module


激活 Python 虚拟环境


``` python?linenums
############ For Python 2 ############
workon facecourse-py2
 
############ For Python 3 ############
workon facecourse-py3
```


编译并安装Dlib的Python模块


``` python?linenums
# move to dlib's root directory
cd dlib-19.6
python setup.py install
# clean up(this step is required if you want to build dlib for both Python2 and Python3)
rm -rf dist
rm -rf tool/python/build
rm python_examples/dlib.so
```


在这里删除了几个文件和文件夹（代码段# clean以下为删除文件夹命令），因为Dlib对python2和python3生成的Python 模块都是用相同的名字。如果在python2环境中运行 setup.py, 会生成dlib.so在python_examples文件夹中。然后如果取消激活Python2的虚拟环境，激活Python3的虚拟环境，运行setup.py，就会替代在python2环境中生成的dlib.so，和python_examples.
当你尝试从这个目录中运行任何python_example时，它将导入这个dlib.so，而不是位于site-packages或dist-packages目录中的一个，并引发错误。尽管不会出现此错误，但是dlib.so的本地副本不存在于当前目录中，但最好删除本地副本以避免混淆。


为了保持一致性，使用相同的源代码安装了Dlib的Python和C ++二进制文件。


如果只是打算使用Dlib的python模块，也可以就使用pip安装


``` python?linenums
pip install dlib
```


安装完成后可以推出python虚拟环境


``` python?linenums
deactivate
```


如果需要运行运用dlib的python脚本，首先激活相应的python虚拟环境


  [1]: http://www.xpandi.top/posts/b5a05a6e/
  [2]: https://stackoverflow.com/questions/33996361/create-a-shared-library-for-dlib/33997825#33997825