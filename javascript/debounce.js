var debounce = function(func, wait) {
  var timeout, context, args

  var later = function() {
    timeout = null
    func.apply(context, args)
  }

  var debounced = function() {
    if (timeout) clearTimeout(timeout)
    context = this
    args = arguments
    timeout = setTimeout(later, wait)
  }
}
