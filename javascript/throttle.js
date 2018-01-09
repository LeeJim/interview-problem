var throttle = function(func, wait) {
  let previous

  var throttled = function() {
    var now = Date.now()
    previous = previous || now
    var remaining = wait - (now - previous)
    if (remaining <= 0) {
      func.call(this, arguments)
      previous = now
    }
  }

  return throttled
}