---
title: Swift Localization I18N
date: 2017-11-23 10:22:47
tags:
- Swift
- Xcode
- iOS
---
> 해당글을 참고하여 작성하였습니다.
> 
> [iOS에서 언어를 localization하는 Gorgeous 한 방법](https://medium.com/@trilliwon/ios에서-localization하는-gorgeous-한-방법-f82ac29d2cfe)


<br />

### Create LocalizedString.strings

<p>
지역화를 처리하기 위해 기본적으로 Localizable.strings 파일이 필요합니다.
<br />
Localizable.strings의 이름을 가진 파일을 프로젝트에 추가 한 후 Project - Info 섹션에서 지원할 언어를 추가합니다.<br />
신규 언어가 추가 될 떄 Localization할 파일 리스트에서 지역화 되어야 할 파일(Localizable.strings)들을 선택합니다.
</p>


<br />

### Write LocalizedString.strings

<pre><code>
// 입력 방법
"KEY"="VALUE";

// 기존 데이터 형태
"Confirm"="확인";

// Script를 위한 데이터 삽입 형태 변경 (KEY에 "를 제거)
Confirm="확인";

// 개인적으로 사용하기 편하게 하는 방법 (Prefix 설정)
M_CONFIRM="확인";

</code></pre>

<p>포맷에 맞게 입력되지 않으면 Build 시 다음과 같은 오류가 발생합니다.</p>

<pre><code>read failed: The data couldn’t be read because it isn’t in the correct format.</code></pre>

<p>정확한 오류를 확인하려면 Terminal을 통해 해당하는 Localizable.Strings 경로로 이동하여 다음과 같이 입력하여 확인합니다.</p>

<pre><code>
$ cd .../Base.lproj
$ plutil -lint Localizable.strings 
2017-11-23 13:05:55.037 plutil[12752:242882] CFPropertyListCreateFromXMLData(): Old-style plist parser: missing semicolon in dictionary on line 3. Parsing will be abandoned. Break on _CFPropertyListMissingSemicolon to debug.
Localizable.strings: <strong>Unexpected character M at line 1</strong>

</code></pre>



<br />

### Helper String Extension

<pre><code>
// For I18N.swift 
extension String {
	var localized: String {
		return NSLocalizedString(self, comment: "")
	}
}

</code></pre>


<br />

### Create I18N.swift


<p>
원하는 위치에 I18N.swift 파일을 생성합니다.
추후 해당 파일은 Run Script에 의해 작성됩니다.
</p>


<br />

### Run Script

<p>
TAGETS/Project의 Build Pharses에서 새로운 Run Script를 추가한 후 아래의 내용을 입력합니다.
</p>

> {$SRCROOT} 값은 해당하는 프로젝트의 .xcodeproj이 존재하는 경로

<pre><code>
touch tempI18N.swift
echo "struct I18N {" >> tempI18N.swift
file="${SRCROOT}/{Example}/Utils/ko.lproj/Localizable.strings" # 위치를 개발하시는 프로젝트의 파일 위치로 고쳐주세요.
while IFS= read -r line
do
variableName=$(echo ${line%%=*})
if [ "$variableName" != "" ]
then
echo "	static let $variableName = \"$variableName\".localized" >> tempI18N.swift
fi
done <"$file"

echo "}" >> tempI18N.swift

cat "tempI18N.swift" > ${SRCROOT}/Example/I18N.swift # 위치를 개발하시는 프로젝트의 파일 위치로 고쳐주세요.
rm tempI18N.swift

</code></pre>



<br />

### Use I18N.swift
<p>Project Build를 하면 생성한 I18N.swift에 Localizable.Strings에 작성한 내용이 변환됩니다.</p>
<pre><code>
struct I18N {
	static let M_CONFIRM = "M_CONFIRM".localized
}

</code></pre>

<p>Project에 적용</p>

<pre><code>
// 직접 사용
let label = UILabel()
label.text = I18N.M_CONFIRM


// UILabel Extension에서 IBInspectable을 이용하여 간단하게 사용
extension UILabel {
​    @IBInspectable var localizedKey: String {
​        get {
​            return text!
​        }
​        set {
​            self.text = newValue.localized
​        }
​    }
}

</code></pre>
