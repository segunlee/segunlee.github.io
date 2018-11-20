---
title: plist file encryption at build time
date: 2017-11-24 17:55:39
tags: 
- iOS
- Xcode
- macOS
- Swift
---


### What's for?
<p>네트워크 통신이 들어간 애플리케이션을 개발 할 시 서버 Protocol에 대한 정보를 프로젝트 내부에 저정해야 합니다.<br />명료하게 .plist 파일로 정리를 하여 배포를 하게 되면 다른 개발자 또는 사용자가 .ipa을 언패킹하여 간단하게 .plist 파일을 취득할 수 있다면 큰 단점이 있습니다. 따라서 많은 프로젝트들이 .plist로 서버 Protocol을 관리하지 않고 사용하지 않고 상수 선언 또는 다양한 방법으로 사용하고 있습니다.</p>

<p>소개하고자 하는 방법은 build시에 .plist파일을 암호화 처리하고 코드에서는 해당 .plist를 복호화 처리하여 사용하면 개발시 편리하게 이용할 수 있고 .ipa를 언패킹하여도 파일명은 노출되지만 해당 내용은 암호화가 되어 있기 때문에 확인할 수 없기 때문에 보안에도 유리합니다.</p>

<p>물론 다른 좋은 방법이 있다면 그 방법을 사용하는게 유리합니다.</p>

<br />
### 0. Prepare
테스트를 위해 메인프로젝트 디렉토리에 HERE을 폴더를 생성하고 APIProtocol.plist 파일을 임시로 추가하였습니다.

<br />
### 1. MacOS Command Line Tool Target (이하 BuildHeler)
적용하고자 하는 프로젝트에서 XCode > New > Target 선택 > macOS 항목의 Command Line Tool을 선택하여 생성한다.<br />새로운 타켓이 생성되면 해당 디렉토리의 main.swift가 있는지 확인한다.<br />(현재 글에서는 BuildHeler 로 생성하였습니다.)

<br />
### 2. 메인 타켓과 BuildHeler 타켓 암호화 툴 설정
본 글에서는 [RNCryptor](https://github.com/RNCryptor/RNCryptor-objc)를 사용합니다.
RNCryptor를 메인 타켓에 프로젝트에 직접포함 후 BuildHeler도 사용해야 함으로 Target Membership에 등록해줍니다.

<br />
### 3. main.swift
main.swift는 MacOS Command Line Tool의 기본 구조입니다 추후 Run Script를 통하여 사용됩니다.
우선 Run Script에서 다음과 같은 값을 받아야 합니다.

1. encrypt 실행 명령어 (mode)
2. plist 파일이 존재하는 경로
3. 암호화 처리후 이동할 경로

코드는 다음과 같습니다.

<pre><code>
import Foundation
import Cocoa

/// 실행 명령어 Eunm
enum BHMode {
​    case unknown
​    case encrypt
​    
​    init(raw: String) {
​        switch raw.uppercased() {
​        case "E":
​            self = .encrypt
​        default:
​            self = .unknown
​        }
​    }
​    
    var description: String {
        switch self {
        case .encrypt:
            return "Encrypt Mode"
        default:
            return "Unknown Mode"
        }
    }
}

/// 명령어 객체
class BHCommand {
​    var mode: BHMode
​    var options = [String]()
​    
​    init(_ mode: BHMode, withOptions: [String]) {
​        self.mode = mode
​        self.options = withOptions
​    }
​    
    var description: String {
        return "Mode: \(mode.description), Options: \(options)"
    }
}


/// 암호화 처리
///
/// - Parameters:
///   - filePath: 경로
///   - descFilePath: 대상 경로
func encryptMode(_ resourcePath: String, _ resourceEncryptPath: String) {
​    print(">> ENCRYPT START")
​    print(">> ENCRYPT resourcePath: \(resourcePath)")
​    print(">> ENCRYPT resourceEncryptPath: \(resourceEncryptPath)")
​    
​    // NOTE: CHANGE UR KEY
​    let key = "SGIOS.GITHUB.IO"
​    
    do {
        let allowTypes = ["plist"]
        let resources = try FileManager.default.contentsOfDirectory(at: URL(fileURLWithPath: resourcePath), includingPropertiesForKeys: nil, options: [])
        let allowFilePaths = resources.filter({ (URL) -> Bool in
            return allowTypes.contains(URL.pathExtension)
        })
    
        for allowFilePath in allowFilePaths {
            let path = resourcePath + allowFilePath.lastPathComponent
            let descPath = resourceEncryptPath + allowFilePath.lastPathComponent
            let willEncryptData = try Data(contentsOf: URL(fileURLWithPath: path))
            let encrypted = try RNEncryptor.encryptData(willEncryptData, with: kRNCryptorAES256Settings, password: key)
            try encrypted.write(to: URL(fileURLWithPath: descPath), options: Data.WritingOptions.atomicWrite)
            print(">> ENCRYPTED SUCCESS -> [\(allowFilePath.lastPathComponent)]")
        }
    
    } catch let error as NSError {
        print(">> OOPS! \(error.localizedDescription)")
        exit(1)
    }
}




/*
 Run Script를 통해 넘어온 arguments 정리
 1. -e              : encrypt 실행 명령어
 2. 1 Path Stirng   : plist 존재하는 경로
 3. 2 Path Stirng   : 암호화 처리후 이동할 경로

 ex: BuildHelper -e $RESOURCES_PATH $RESOURCES_ENCRYPT_PATH
 */

print(">> START BUILD HELPER")
var commands = [BHCommand]() {
​    didSet {
​        if let command = commands.last {
​            print(">> New Command: \(command.description)")
​        }
​    }
}
let arguments: [String] = CommandLine.arguments

for (index, argument) in arguments.enumerated() {
​    
​    let modeChar = argument[argument.index(argument.startIndex, offsetBy: 1)...]
​    let mode = BHMode(raw: String(modeChar))
​    
    switch mode {
    case .encrypt:
        
        // NOTE: arguments 확인
        if arguments.count < index+2 {
            print("OOPS! -e mode, missing arguments!")
            exit(1)
        }
        
        var options = [String]()
        options.append(arguments[index+1])
        options.append(arguments[index+2])
        
        let command = BHCommand(mode, withOptions: options)
        commands.append(command)
        
    default:
        break
    }
}


for command in commands {
​    switch command.mode {
​    case .encrypt:
​        encryptMode(command.options[0], command.options[1])
​    default:
​        break
​    }
}

print(">> END BUILD HELPER")

</code></pre>

해당 내용 작성 후 BuildHelper 타켓 설정 후 Build(최초 빌드를 하여 Command Line Tool 을 생성한다.)


<br />
### 4. 메인타켓의 Run Script 추가
메인타켓 > Build Phases > + > New Run Script Phase

<pre><code>
# 프로젝트 경로
PROJECT_PATH="${BUILD_DIR}/${CONFIGURATION}"

# 암호화될 대상이 있는 경로
RESOURCES_PATH="${PROJECT_DIR}/${TARGET_NAME}/HERE/"

# 암호화된 후 이동(작성)될 경로
RESOURCES_ENCRYPT_PATH="${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/"

# DO IT
$PROJECT_PATH/BuildHelper -e $RESOURCES_PATH $RESOURCES_ENCRYPT_PATH

</code></pre>



### 5. 메인 Target 빌드
빌드 후 Report Navigation에서 가장 최신 Build를 선택하면 추가한 Run Script에 대한 내용을 확인할 수 있습니다.
<pre><code>
Run custom shell script 'Run Script - Build Helper'
\>> START BUILD HELPER
\>> New Command: Mode: Encrypt Mode, Options: ["/Users/SegunLee/Documents/GIT/SGBuildTimeEncrypt/SGBuildTimeEncryptSample/SGBuildTimeEncryptSample/HERE/", "/Users/SegunLee/Library/Developer/Xcode/DerivedData/SGBuildTimeEncryptSample-avlzvyxzhdmuzwgyfkeglmyuelbo/Build/Products/Debug-iphonesimulator/SGBuildTimeEncryptSample.app/"]
\>> ENCRYPT START
\>> ENCRYPT resourcePath: /Users/SegunLee/Documents/GIT/SGBuildTimeEncrypt/SGBuildTimeEncryptSample/SGBuildTimeEncryptSample/HERE/
\>> ENCRYPT resourceEncryptPath: /Users/SegunLee/Library/Developer/Xcode/DerivedData/SGBuildTimeEncryptSample-avlzvyxzhdmuzwgyfkeglmyuelbo/Build/Products/Debug-iphonesimulator/SGBuildTimeEncryptSample.app/
\>> ENCRYPTED SUCCESS -> [APIProtocol.plist]
\>> END BUILD HELPER
</code></pre>

<br />
### 6. plist 사용하기
<pre><code>
import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        if let apiProtocol = loadPlistFile("APIProtocol") {
            print(apiProtocol)
        }
    }
    
    func loadPlistFile(_ fileName: String) -> [String: Any]? {
        let key = "SGIOS.GITHUB.IO"
        do {
            if let url = Bundle.main.path(forResource: fileName, ofType: "plist") {
                let encrypted = try Data(contentsOf: URL(fileURLWithPath: url))
                let decrypted = try RNDecryptor.decryptData(encrypted, withPassword: key)
                
                let plist = try PropertyListSerialization.propertyList(from: decrypted, options: [], format:nil) as! [String: Any]
                print(plist)
                return plist
            }
        
        } catch let error {
            print(error)
        }
        return nil
    }
}
</code></pre>


<br />
### 마치며
생각보다 복잡한 구조이기 때문에 배보다 배꼽이 더 클 수가 있습니다....