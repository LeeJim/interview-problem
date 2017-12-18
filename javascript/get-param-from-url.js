// 获取URL上的参数

var getUrlParams = function(url) {
  var result = {}
  var params = url.split('?')[1].split('&')

  params.forEach(item => {
    var tmp = item.split('=')
    result[tmp[0]] = tmp[1] || ''
  })

  return result
}

var getUrlParamsWithRegExp = function(url) {
  var result = {}
  url = url.split('?')[1]
  url.replace(/(\w+)=(\w*)/g, function(match, a, b) {
    result[a] = b
  })
  return result
}
