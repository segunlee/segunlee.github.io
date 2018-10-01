---
title: 'Xcode, what the calibratedRGB'
date: 2017-12-29 15:23:18
tags: 
- Xcode
---
> 해당글을 참고하여 작성하였습니다.
> 
> [iOS 삽질 : 인터페이스 빌더에서 설정한 색상이 제대로 표시 안됨](https://code.iamseapy.com/archives/58)

<br />
### Why do colors look different?
<p>
Just follow this
</p>

<br />

### 1.Run Script
<p>Add new Run Script</p>

<pre><code>
grep -rl 'colorSpace="calibratedRGB"' ./* | xargs sed -i '' 's/colorSpace="calibratedRGB"/colorSpace="custom" customColorSpace="sRGB"/g'

</code></pre>

<br />

### 2. Build
<p>Done</p>

<br />
