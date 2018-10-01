---
title: ubuntu 16.04 vsftp Install
date: 2017-11-21 15:45:50
tags: 
- ubuntu 
- vsftp 
- server
---
> 해당 글은 ubuntu 16.04 기준으로 작성되었습니다.

<br />

### Package install

<pre><code>$ apt-get install vsftpd</code></pre>

<br />

### Account Setting

<pre><code>
# List of account about home directory path
$ vi /etc/passwd 

# Add User
$ adduser {Account} 

# Add User, Set HomeDirectory path
$ adduser -d {HomeDirectory_Path} {Account} 

# Change HomeDirectory path
$ usermod -d {HomeDirectory_Path} {Account} 

</code></pre>

<pre><code>
# Access not allow users
$ vi /etc/ftpusers

</code></pre>

<br />

### Configure
<pre><code>
$ vi /etc/vsftpd.conf

</code></pre>

<pre><code>
# Enable Local User
local_enable=YES

# Enable Upload
write_enable=YES


# Enable PassiveMode
pasv_enable=YES

# Min, Max Passive Port
port_enable=YES
pasv_min_port={PORT_BEGIN}	
pasv_max_port={PORT_END}

# For Security: Bad IP connecting.
pasv_promiscuous=YES	

# For vsftpd: refusing to run with writable root inside chroot ()
allow_writeable_chroot=YES


# NOTE: chroot options
# chroot option1 (Can't access to the top level directory: all user)
chroot_local_user=YES

# chroot option2 (Can't access to the top level directory: vsftpd_chroot_list)
chroot_list_enable=YES
chroot_list_file=/etc/vsftpd_chroot_list
	
# chroot option3 (Can access to the top level directory: vsftpd_chroot_list)
chroot_local_user=YES
chroot_list_enable=YES
chroot_list_file=/etc/vsftpd_chroot_list

</code></pre>