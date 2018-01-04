var flattenArray = function (arr) {
  var len = arr.length
  var res = []

  for (var i = 0; i < len; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flattenArray(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}

console.log(flattenArray([1,[2,3],[4,[5,[6]]]]))