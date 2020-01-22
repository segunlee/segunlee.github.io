---
title: Xcode-Replace-Xib
date: 2020-01-22 15:48:30
tags: 
- Xcode
---

```
find . -name '*.xib' -type f -exec sed -i "" 's/[[:<:]]<userDefinedRuntimeAttribute type="string" keyPath="themeTextKey" value="LABEL_MAIN_BG"/>//g' {} \;
find . -name '*.xib' -type f -exec sed -i "" 's/[[:<:]]btnHelpBig/btn_help_big/g' {} \;
find . -name '*.xib' -type f -exec sed -i "" 's,"btnHelpBig","btn_help_big",g' {} \;
```

