var jsonp = function(url) {
  var img = document.createElement('img')
  img.src = url
  document.body.appendChild(img)
}