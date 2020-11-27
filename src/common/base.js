/* global clientWindow*/
export function getPlane() {
  var u = navigator.userAgent
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  if (isiOS) {
    return true
  } else {
    return false
  }
}
export function jsCallNative(str) {
  if (getPlane()) {
    try {
      window.webkit.messageHandlers.jsCallNative.postMessage({ name: str })
    } catch (error) {
      console.log(error)
    }
  } else {
    try {
      clientWindow.jsCallNative(JSON.stringify({ name: str }))
    } catch (error) {
      console.log(error)
    }
  }
}
