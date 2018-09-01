---
title: 用wget和curl下载文件
categories:
  - 技术
  - linux
copyright: true
comments: true
date: 2018-08-31 21:13:26
tags: linux
author: Pan
---
wget和curl是在linux下下载文件最常用的两个工具。
<!-- more -->
先说wget。
wget有如下几个特点：
1. 支持http，https，ftp协议。可以使用http代理。
2. 在带宽不高的网络中表现优异。
3. 支持后台自动下载，下载时不用一直盯着看。
4. 可以递归的下载整个站点。

基本用法：
```
wget [option] URL

```
常用的几个例子
```
wget www.this.is/a/url
#下载网站的首页
wget -r www.this.is/a/url
#递归的下载整个网站。所有被引用的链接也会被下载。
wget -r -l1 -nd www.this.is/a/url
#递归的同时限定递归深度为1，同时不创建文件夹，所有的文件会被存在工作路径下
wget -c -t10 -T10 www.this.is/a/url
#-c表示断点续传（默认是开启的） -t表示断线重连的尝试次数，0代表无穷。-T表示超时的秒数，-T10表示超过10秒无相应就视为超时。
wget -A "ABC*.avi" www.this.is/a/url
#只下载文件名以ABC开头的视频文件
wget --reject=gif www.this.is/a/url
#下载除gif文件外的所有文件
wget -O out -o log www.this.is/a/url
#文件下载到out，日志记录到log
wget -i urls.txt
#下载urls.txt中的url，每行一个url。

curl -o home.html  www.this.is/a/url
#抓取页面内容到一个文件中  
curl -O out.html www.this.is/a/url/[0-9][0-9]/aaaaa.jpg  
# curl的url里面支持正则表达式
curl -r 0-100 -o img.part1 www.this.is/a/url/sample.jpg  
curl -r 100-200 -o img.part2 www.this.is/a/url/sample.jpg  
curl -r 200- -o img.part3 www.this.is/a/url/sample.jpg  
#分段下载
```

wget的速查表：

| command | meaning |
| --- |---|
| -V,  --version  |	显示wget的版本后退出 |
|  -h,  --help				|打印语法帮助|
| -b,  --background		|	启动后转入后台执行 |
 | -e,  --execute=COMMAND   |	执行`.wgetrc`格式的命令，`wgetrc`格式参见/etc/wgetrc或~/.wgetrc |
|  -o,  --output-file=FILE	| 把记录写到FILE文件中| 
|   -a,  --append-output=FILE| 	把记录追加到FILE文件中| 
|   -d,  --debug			| 	打印调试输出| 
 |  -q,  --quiet				| 安静模式(没有输出)| 
|   -v,  --verbose			| 冗长模式(这是缺省设置)| 
 |  -nv, --non-verbose		| 关掉冗长模式，但不是安静模式| 
 |  -i,  --input-file=FILE	| 下载在FILE文件中出现的URLs| 
|   -F,  --force-html	| 		把输入文件当作HTML格式文件对待| 
|   -B,  --base=URL	| 		将URL作为在-F -i参数指定的文件中出现的相对链接的前缀| 
  |      --sslcertfile=FILE    |  可选客户端证书| 
   |     --sslcertkey=KEYFILE  |  可选客户端证书的KEYFILE| 
   |     --egd-file=FILE      |   指定EGD socket的文件名| 
|        --bind-address=ADDRESS |  指定本地使用地址(主机名或IP，当本地有多个IP或名字时使用)|
|   -t,  --tries=NUMBER          | 设定最大尝试链接次数(0 表示无限制).|
|   -O   --output-document=FILE|   把文档写到FILE文件中|
|   -nc, --no-clobber           |  不要覆盖存在的文件或使用.#前缀|
|   -c,  --continue               |接着下载没下载完的文件|
 |       --progress=TYPE      |    设定进程条标记|
 |  -N,  --timestamping      |     不要重新下载文件除非比本地文件新|
 |  -S,  --server-response |       打印服务器的回应|
|        --spider               |  不下载任何东西|
|   -T,  --timeout=SECONDS   |     设定响应超时的秒数|
|   -w,  --wait=SECONDS       |    两次尝试之间间隔SECONDS秒|
|        --waitretry=SECONDS |     在重新链接之间等待1...SECONDS秒|
|        --random-wait          |  在下载之间等待0...2\*WAIT秒|
 |  -Y,  --proxy=on/off        |   打开或关闭代理|
 |  -Q,  --quota=NUMBER|           设置下载的容量限制|
  |     --limit-rate=RATE   |     限定下载输率|
|  -nd  --no-directories           | 不创建目录|
|  -x,  --force-directories       |  强制创建目录|
|  -nH, --no-host-directories      | 不创建主机目录|
 | -P,  --directory-prefix=PREFIX|   将文件保存到目录 PREFIX/...|
 |      --cut-dirs=NUMBER  |         忽略 NUMBER层远程目录|
 |      --http-user=USER    |  设定HTTP用户名为 USER.|
  |     --http-passwd=PASS |   设定http密码为 PASS.|
 | -C,  --cache=on/off      |  允许/不允许服务器端的数据缓存 (一般情况下允许).|
 | -E,  --html-extension   |   将所有text/html文档以.html扩展名保存|
  |     --ignore-length      | 忽略 `Content-Length`头域|
   |    --header=STRING      | 在headers中插入字符串 STRING |
  |   --proxy-user=USER    | 设定代理的用户名为 USER |
  |   --proxy-passwd=PASS |  设定代理的密码为 PASS |
  |   --referer=URL        | 在HTTP请求中包含 `Referer: URL`头|
|  -s,  --save-headers        | 保存HTTP头到文件 |
 | -U,  --user-agent=AGENT|    设定代理的名称为 AGENT而不是 Wget/VERSION.|
  |     --no-http-keep-alive | 关闭 HTTP活动链接 (永远链接).|
   |    --cookies=off        | 不使用 cookies.|
   |   --load-cookies=FILE |  在开始会话前从文件 FILE中加载cookie|
   |  --save-cookies=FILE|   在会话结束后将 cookies保存到 FILE文件中|
 | -nr, --dont-remove-listing |  不移走 `.listing`文件|
  |-g,  --glob=on/off      |     打开或关闭文件名的 globbing机制|
   |    --passive-ftp     |      使用被动传输模式 (缺省值).|
   |   --active-ftp       |     使用主动传输模式|
   |  --retr-symlinks |        在递归的时候，将链接指向文件(而不是目录)|
 | -r,  --recursive         | 递归下载－－慎用!|
  |-l,  --level=NUMBER |      最大递归深度 (inf 或 0 代表无穷).|
  |    --delete-after       |在现在完毕后局部删除文件|
 | -k,  --convert-links    |  转换非相对链接为相对链接|
  |-K,  --backup-converted|   在转换文件X之前，将之备份为 X.orig|
|  -m,  --mirror            | 等价于 -r -N -l inf -nr.|
 | -p,  --page-requisites   | 下载显示HTML文件的所有图片|
 | -A,  --accept=LIST            |    分号分隔的被接受扩展名的列表|
  |-R,  --reject=LIST             |   分号分隔的不被接受的扩展名的列表|
 | --accept-regex urlregex		|	用正则表达式匹配要下载的url|
 | --reject-regex urlregex		|	用正则表达式匹配要下载的url|
|  -D,  --domains=LIST         |      分号分隔的被接受域的列表|
| --exclude-domains=LIST  |     分号分隔的不被接受的域的列表|
 |      --follow-ftp                 |跟踪HTML文档中的FTP链接|
  |     --follow-tags=LIST        |   分号分隔的被跟踪的HTML标签的列表|
  |-G,  --ignore-tags=LIST    |       分号分隔的被忽略的HTML标签的列表|
  |-H,  --span-hosts             |    当递归时转到外部主机|
  |-L,  --relative                   |仅仅跟踪相对链接|
  |-I,  --include-directories=LIST   |允许目录的列表|
  |-X,  --exclude-directories=LIST|   不被包含目录的列表|
  |-np, --no-parent          |        不要追溯到父目录|
 

curl 参数说明：
| command | meaning |
| --- |---|
|-a/--append |上传文件时，附加到目标文件  
| -A/--user-agent <string> | 设置用户代理发送给服务器  
| - anyauth  | 可以使用“任何”身份验证方法  
| -b/--cookie <name=string/file> |cookie字符串或文件读取位置  
| - basic |使用HTTP基本验证  
| -B/--use-ascii| 使用ASCII /文本传输  
| -c/--cookie-jar <file> |操作结束后把cookie写入到这个文件中  
| -C/--continue-at <offset> | 断点续转  
| -d/--data <data>  | HTTP POST方式传送数据  
| --data-ascii <data> | 以ascii的方式post数据  
| --data-binary <data>| 以二进制的方式post数据  
 |--negotiate   |  使用HTTP身份验证  
 |--digest       | 使用数字身份验证  
| --disable-eprt | 禁止使用EPRT或LPRT  
| --disable-epsv | 禁止使用EPSV  
| -D/--dump-header <file> |把header信息写入到该文件中  
| --egd-file <file>| 为随机数据(SSL)设置EGD socket路径  
| --tcp-nodelay  | 使用TCP_NODELAY选项  
| -e/--referer| 来源网址  
| -E/--cert <cert[:passwd]>| 客户端证书文件和密码 (SSL)  
| --cert-type <type>| 证书文件类型 (DER/PEM/ENG) (SSL)  
| --key <key>    | 私钥文件名 (SSL)  
| --key-type <type> |私钥文件类型 (DER/PEM/ENG) (SSL)  
| --pass  <pass> | 私钥密码 (SSL)  
| --engine <eng>  |加密引擎使用 (SSL). "--engine list" for list  
| --cacert <file> |CA证书 (SSL)  
| --capath <directory>| CA目录 (made using c_rehash) to verify peer against (SSL)  
 |--ciphers <list> | SSL密码  
| --compressed    |要求返回是压缩的形式 (using deflate or gzip)  
| --connect-timeout <seconds> |设置最大请求时间  
| --create-dirs  | 建立本地目录的目录层次结构  
| --crlf         | 上传是把LF转变成CRLF  
| -f/--fail       |   连接失败时不显示http错误  
| --ftp-create-dirs| 如果远程目录不存在，创建远程目录  
| --ftp-method [multicwd/nocwd/singlecwd] |控制CWD的使用  
| --ftp-pasv    |  使用 PASV/EPSV 代替端口  
| --ftp-skip-pasv-ip| 使用PASV的时候,忽略该IP地址  
| --ftp-ssl      | 尝试用 SSL/TLS 来进行ftp数据传输  
| --ftp-ssl-reqd  |要求用 SSL/TLS 来进行ftp数据传输  
| -F/--form <name=content> |模拟http表单提交数据  |
| -form-string <name=string> |模拟http表单提交数据  
| -g/--globoff |禁用网址序列和范围使用{}和[]  
| -G/--get |以get的方式来发送数据  
| -h/--help |帮助  
| -H/--header |<line>自定义头信息传递给服务器  
| --ignore-content-length  |忽略的HTTP头信息的长度  
| -i/--include |输出时包括protocol头信息  
| -I/--head | 只显示文档信息  
| -j/--junk-session-cookies |读取文件进忽略session cookie  
| --interface <interface> |使用指定网络接口/地址  
| --krb4 <level> | 使用指定安全级别的krb4  
| -k/--insecure |允许不使用证书到SSL站点  
| -K/--config  |指定的配置文件读取  
| -l/--list-only |列出ftp目录下的文件名称  
| --limit-rate <rate> |设置传输速度  
| --local-port<NUM> |强制使用本地端口号  
| -m/--max-time <seconds> |设置最大传输时间  
| --max-redirs <num> |设置最大读取的目录数  
| --max-filesize <bytes> |设置最大下载的文件总量  
| -M/--manual  |显示全手动  
| -n/--netrc |从netrc文件中读取用户名和密码  
| --netrc-optional |使用 .netrc 或者 URL来覆盖-n  
| --ntlm          |使用 HTTP NTLM 身份验证  
| -N/--no-buffer |禁用缓冲输出  
| -o/--output| 把输出写到该文件中  
| -O/--remote-name |把输出写到该文件中，保留远程文件的文件名  
| -p/--proxytunnel   |使用HTTP代理  
| --proxy-anyauth |选择任一代理身份验证方法  
| --proxy-basic   |在代理上使用基本身份验证  
| --proxy-digest | 在代理上使用数字身份验证  
| --proxy-ntlm    |在代理上使用ntlm身份验证  
| -P/--ftp-port <address> |使用端口地址，而不是使用PASV  
| -Q/--quote <cmd>|文件传输前，发送命令到服务器  
| -r/--range <range>|检索来自HTTP/1.1或FTP服务器字节范围  
| --range-file |读取（SSL）的随机文件  
| -R/--remote-time |  在本地生成文件时，保留远程文件时间  
 |--retry <num>   |传输出现问题时，重试的次数  
 |--retry-delay <seconds> | 传输出现问题时，设置重试间隔时间  
| --retry-max-time <seconds> |传输出现问题时，设置最大重试时间  
| -s/--silent|静音模式。不输出任何东西  
| -S/--show-error|   显示错误  
| --socks4 <host[:port]>| 用socks4代理给定主机和端口  
| --socks5 <host[:port]> |用socks5代理给定主机和端口  
| -t/--telnet-option <OPT=val> |Telnet选项设置  
| --trace <file>  |对指定文件进行debug  
| --trace-time    |跟踪/详细输出时，添加时间戳  
| -T/--upload-file <file> |上传文件  
| -u/--user <user[:password]>|设置服务器的用户和密码  
| -U/--proxy-user <user[:password]>|设置代理用户名和密码  
| -V/--version| 显示版本信息  
| -x/--proxy <host[:port]>|在给定的端口上使用HTTP代理  
| -X/--request <command>|指定什么命令  
| -y/--speed-time |放弃限速所要的时间。默认为30  
| -Y/--speed-limit |停止传输速度的限制，速度时间'秒  
| -z/--time-cond | 传送时间设置  
| -0/--http1.0 | 使用HTTP 1.0  
| -1/--tlsv1 | 使用TLSv1（SSL）  
| -2/--sslv2 |使用SSLv2的（SSL）  
| -3/--sslv3  |       使用的SSLv3（SSL）  
| --3p-quote |     like -Q for the source URL for 3rd party transfer  
| --3p-url      |  使用url，进行第三方传送  
| --3p-user   |    使用用户名和密码，进行第三方传送  
| -4/--ipv4  | 使用IP4  
| -6/--ipv6   |使用IP6  
| -#/--progress-bar |用进度条显示当前的传送状态  
