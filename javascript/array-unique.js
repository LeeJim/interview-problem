// 数组去重

var unique = function(arr) {
  var obj = {}
  var result = []
  var len = arr.length

  for (var i = 0; i < len; i++) {
    if (!obj[arr[i]]) {
      result.push(obj)
      obj[arr[i]] = true
    }
  }

  return result
}

var uniqueWithIndex = function(arr) {
  var result = []
  var len = arr.length

  for (var i = 0; i < len; i++) {
    if (arr.indexOf(arr[i]) === i) { // or result.indexOf(arr[i]) === -1
      result.push(obj)
    }
  }

  return result
}

var uniqueWithES6 = function(arr) {
  return [...new Set(arr)]
}
