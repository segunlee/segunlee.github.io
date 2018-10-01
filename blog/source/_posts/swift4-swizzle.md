---
title: swift4 swizzle
date: 2017-12-29 15:36:06
tags:
- Swift
- Xcode
- iOS
---
### Swift4 swizzle
<p>UIViewController-Swizzle.swift</p>
<pre><code>
import UIKit

private func swizzle(_ vc: UIViewController.Type) {
    [ (#selector(vc.viewDidLoad), #selector(vc.sg_viewDidLoad)), ].forEach { original, swizzled in

        let originalMethod = class_getInstanceMethod(vc, original)
        let swizzledMethod = class_getInstanceMethod(vc, swizzled)

        let didAddViewDidLoadMethod = class_addMethod(vc, original, method_getImplementation(swizzledMethod), method_getTypeEncoding(swizzledMethod))
        if didAddViewDidLoadMethod {
            class_replaceMethod(vc, swizzled, method_getImplementation(originalMethod), method_getTypeEncoding(originalMethod))
        } else {
            method_exchangeImplementations(originalMethod, swizzledMethod)
        }
    }
}

private var hasSwizzled = false
extension UIViewController {
    final public class func doSwizzle() {
        guard !hasSwizzled else { return }
        hasSwizzled = true
        swizzle(self)
    }

    internal func sg_viewDidLoad() {
        print("swizzled -> viewDidLoad:")
        self.sg_viewDidLoad()
    }
}

</code></pre>

<br />
<p>AppDelegate.swift</p>
<pre><code>
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
	// doSwizzle
	UIViewController.doSwizzle()
}
</code></pre>