---
title: Frida-Memory-Dump
date: 2020-01-22 16:07:45
tags: 
- iOS
- Xcode
- MemoryDump
- Frida
---



# 준비

1. 탈옥된 아이폰

   1. Cydia에서 NewTerm 설치
   2. Cydia에서 Frida 설치 (Cydia/APT URL: http://build.frida.re/)   *설치 후 자동 실행됨

2. Mac

   1. python3 설치

      1. ```
         $ python3 –version
         # python3 설치 : https://www.python.org/downloads/mac-osx/ 에 접속하여 최신 버전 다운로드 및 설치
         ```

   2. pip 설치

      1. ```
         $ curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
         $ sudo python get-pip.py
         ```

   3. Frida 설치

      1. ```
         $ pip install frida
         $ install frida-tools
         ```



# do Dump

### 디바이스 목록
```
$ frida-ls-devices
```

```
Id                                        Type    Name        
----------------------------------------  ------  ------------
local                                     local   Local System
afce666ff913e4e8f2b23c909cb44112ee6d8696  usb     iPhone      
tcp                                       remote  Local TCP  
```



### 프로세스 목록 -  frida-server 동작여부 확인

```
$ frida-ps -U | grep 'frida' 
```

```
77  frida-server
```



### 프로세스 목록 -  대상 애플리케이션 동작여부 확인

```
$ frida-ps -U | grep 'LightComics'
```

```
1031  LightComics
```



### 메모리 덤프 처리

```
$ cd ~/Documents/FridaDump/
$ git clone https://github.com/Nightbringer21/fridump.git
$ cd fridump
$ python fridump.py -U -r --max-size 1048576000 LightComics
```

```
optional arguments:
-h, --help         show this help message and exit
-o dir, --out dir  provide full output directory path. (def: 'dump')
-U, --usb          device connected over usb
-v, --verbose      verbose
-r, --read-only    dump read-only parts of memory. More data, more errors
-s, --strings      run strings on all dump files. Saved in output dir.
--max-size bytes   maximum size of dump file in bytes (def: 20971520
```



### *.data 파일 검사

```
cd ~/Documents/FridaDump/fridump/dump/
grep -q "SEARCH_KEYWORD" *.data; [ $? -eq 0 ] && echo "OOPS" || echo "GOOD, NOT FOUND"
grep -l "SEARCH_KEYWORD" *.data; [ $? -eq 0 ] && echo "OOPS" || echo "GOOD, NOT FOUND"
```



# iOS Frida 수동 설치

Cydia Repo가 정상적이지 않는 경우도 있어 수동 설치 방법을 기입한다.

1. iPhone 또는 Mac에서 SSH 접속

2. Firda 다운로드

   1. ```
      $ cd /var/mobile/
      $ mkdir frida
      $ cd frida
      ```

   2. ```
      $ wget https://github.com/frida/frida/releases/download/12.8.7/frida-core-devkit-12.8.7-ios-arm64.tar.xz
      ```

   3. ```
      $ unxz frida-core-devkit-12.8.7-ios-arm64.tar.xz
      ```

   4. ```
      $ cp frida-core-devkit-12.8.7-ios-arm64.tar frida-server
      ```

   5. ```
      $ chmod 775 frida-server 
      ```

   6. ```
      $ ./frida-server &
      ```




