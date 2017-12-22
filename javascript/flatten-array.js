var flattenArray = function (arr) {
  var len = arr.length
  var res = []

  for (var i = 0; i < len; i++) {
    if (Array.isArray(arr[i])) {
      res.push(...flattenArray(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}
