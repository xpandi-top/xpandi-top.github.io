---
title: SSD-tensorflow学习之制作数据集
categories:
  - 技术
  - Tensorflow
copyright: true
comments: true
tags: SSD
author: Di
abbrlink: 572e9c52
date: 2018-07-15 17:01:28
---
记录一下自己构建数据的一个流程

参考的博客：https://blog.csdn.net/w5688414/article/details/78395177
SSD的网络：https://github.com/balancap/SSD-Tensorflow
<!--more-->
### 文件目录
下载下来ssd的文件夹目录应该是差不多长这样子的:
SSD-Tensorflow-master
├─checkpoints
├─datasets
├─demo
├─deployment
├─mydata ###这部分文件夹是我自己创建的
│  ├─white
│  │  ├─Annotations
│  │  ├─ImageSets
│  │  │  └─Main
│  │  └─JPEGImages
│  └─white_tfrecord
├─nets
├─notebooks
├─pictures
├─preprocessing
├─tf_extended

### 1. 准备数据

```python
# 示例数据的位置
 data_path = "./mydata/white/"
 tf_path = "./mydata/white_tfrecord/"
``` 
以下是我在网络上下载的VOC2007的数据的目录文件，

├─VOC2007
│  ├─Annotations
│  ├─ImageSets
│  │  ├─Layout
│  │  ├─Main
│  │  └─Segmentation
│  ├─JPEGImages
│  ├─SegmentationClass
│  └─SegmentationObject

这个示例中主要是要需要Annotation和JPEGimages的文件夹，所以呢就创建了如下的目录：
把图片放在JPEGImages目录下，xml格式的文件放在Annotations目录下
├─white
│  ├─Annotations
│  └─JPEGimages
│  ├─ImageSets
│  │  ├─Main

利用程序生成 rain.txt, test.txt, trainval.txt, val.txt
```python
import os
import random 
 
xmlfilepath="./mydata/white/Annotations"
saveBasePath="./mydata"
 
trainval_percent=0.8
train_percent=0.7
total_xml = os.listdir(xmlfilepath)
num=len(total_xml)  
list=range(num)  
tv=int(num*trainval_percent)  
tr=int(tv*train_percent)  
trainval= random.sample(list,tv)  
train=random.sample(trainval,tr)  
 
print("train and val size",tv)
print("traib size",tr)
ftrainval = open(os.path.join(saveBasePath,'white/ImageSets/Main/trainval.txt'), 'w')  
ftest = open(os.path.join(saveBasePath,'white/ImageSets/Main/test.txt'), 'w')  
ftrain = open(os.path.join(saveBasePath,'white/ImageSets/Main/train.txt'), 'w')  
fval = open(os.path.join(saveBasePath,'white/ImageSets/Main/val.txt'), 'w')  
 
for i  in list:  
    name=total_xml[i][:-4]+'\n'  
    if i in trainval:  
        ftrainval.write(name)  
        if i in train:  
            ftrain.write(name)  
        else:  
            fval.write(name)  
    else:  
        ftest.write(name)  
  
ftrainval.close()  
ftrain.close()  
fval.close()  
ftest .close()  
```
会生成如下的目录
├─white
│  ├─Annotations
│  └─JPEGimages
│  ├─ImageSets
│  │  └─Main
│  │          test.txt
│  │          train.txt
│  │          trainval.txt
│  │          val.txt

数据准备就基本完成了

### 2. 生成tfrecord的文件

数据集生成后，把数据集转换成tfrecord的形式
修改 datasets/pascalvoc_common.py文件
```python
VOC_LABELS = {
    'none': (0, 'Background'),
    'w,standing': (1, 'w_standing'),
    'w,lying ': (2, 'w_lying'),
    'w,other': (3, 'w_other'),
}
```

因为采用的是jpeg格式（如果还是jpg格式就不用改了，原代码的格式是jpg），所以在datasets/pascalvoc_to_tfrecords.py 把82行改以一下
```python
filename = directory + DIRECTORY_IMAGES + name + '.jpeg'
image_data = tf.gfile.FastGFile(filename, 'rb').read()
```
运行如果出现这个错误
```python
UnicodeDecodeError: 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte
```
就把83行改成如下所示

```python
image_data = tf.gfile.FastGFile(filename, 'rb').read()
```

### 一些问题

- 关于LabelImage标注得到的xml得不到Height和weight

看了一下数据，标注jpg得到的xml是正确的，而标注jpeg却得不到height和weight，具体什么原因还没有找，等到之后再看看吧。因为没有得到size所以我在datasets/pascalvoc_to_tfrecords.py中手动指定了size（所有图片的大小都一样，所以这样应该也是没有问题的）

- 关于打标签 

最开始的label打标签用了逗号，其实并不会报什么错，但是就是看起来有点蠢，也是因为自己没有特别理解这个打标签的内容。命名的角度来说，逗号是不太合适的，应该用下划线比较好。