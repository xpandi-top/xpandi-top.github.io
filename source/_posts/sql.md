---
title: sql学习小记
categories:
  - 技术
  - sql
copyright: true
comments: true
date: 2018-09-11 20:32:45
tags:
author: Di
---
粗略学了一点皮毛吧。

![sololearn—sql](http://p15ezcjt2.bkt.clouddn.com/小书匠/1536669246706.png)

<!--more-->

### 一些学习工具
app：sololearn
网站：w3school
课程：coursera-用MySQL管理大数据

### 关于数据库

#### 理想的数据库特点
	easy retrieval
	easy updating
	accessibility for mutiple peple at the same time
	data consistency
	space efficiency
	speed
	security

#### relational databases

subsets  theme tables
interacts

set theory: common features
relational agebra

tables = smallest logical subsets of data

each column represents a unique category of information

each raw must be unique

order of columns or rows doesn't matter

#### database organization

Er diagrams

relational schemas



##### ER diagram
for each software package, the data base must keep track of a unique SPID, SPName and No.of installations
for each computer, the database must keep track of a unique CompID, compmodel and compMake
for each employee, the database must keep track of a unique EmpID, EmpName and multiple EmpSkills

each software package can be installed at one or more computers, the software not installed is not tracked. each Computer can install install more than one pacakges and also can install none.
date of install is tracked when each software is installed.

each software packaged can be certificated to one or more employee to use.
each employee have certificated to zero of morethan one softwares


information about vehicles is being tracked and will be made into table called "VeHICLE" in a data base.
for each vehicle, the VIN, LPNUMber,State,model, make and yeas is recorded and will be entered as a seperate column. each value entered into a row of the Vin column will be unique, each combination of values in the lpnumber and state columns will be unique, but each value in the lpnnumber or state columns , on their own, does not have to be unique.
values in the model, make, and year columns do not have to be unique.
the vun will serve as the primary key.

information about vehecle is being tracked and will be made into table called "vehecle" in a database.
for each vehicle, the lpnumber, state, model, make and year are recorded and will be entered as a seperate column. each value entered into a row of the lpnumber column and state will be unique. each value in the model, make, year columns, on their own, does not have to be unique. lpnumber and state will serve as the primary key.


##### other
set theory 
relational scheme 
er diagram

### sql query

一般分号作为每句话的命令，对于有一些数据库，对于另一些并不需要
    ` 
SQL分为两个部分
数据操作语言：DML：查询和更新指令
数据定义语言：DDL：创建或删除表格。我们也可以定义索引（键），规定表之间的链接，以及施加表间的约束

查询和更新指令构成了 SQL 的 DML 部分：

SELECT - 从数据库表中获取数据
UPDATE - 更新数据库表中的数据
DELETE - 从数据库表中删除数据
INSERT INTO - 向数据库表中插入数据
SQL 的数据定义语言 (DDL) 部分使我们有能力创建或删除表格。我们也可以定义索引（键），规定表之间的链接，以及施加表间的约束。

SQL 中最重要的 DDL 语句:

CREATE DATABASE - 创建新数据库
ALTER DATABASE - 修改数据库
CREATE TABLE - 创建新表
ALTER TABLE - 变更（改变）数据库表
DROP TABLE - 删除表
CREATE INDEX - 创建索引（搜索键）
DROP INDEX - 删除索引
