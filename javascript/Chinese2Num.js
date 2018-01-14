var chineseNum = {
  '零': 0,
  '一': 1,
  '二': 2,
  '三': 3,
  '四': 4,
  '五': 5,
  '六': 6,
  '七': 7,
  '八': 8,
  '九': 9
}

var chineseUnit = {
  '十': {value:10, sec:false},
  '百': {value:100, sec:false},
  '千': {value:1000, sec:false},
  '万': {value:10000, sec:true},
  '亿': {value:100000000, sec:true},
}

function chinese2num(chinese) {
  var spilitChinese = chinese.split(''),
      length = spilitChinese.length;

  var num = 0,
      unitSum = 0,
      sum = 0;

  for (var i=0; i<length; i++) {
    var singleChar = spilitChinese[i];

    if (singleChar in chineseNum) {
      num = chineseNum[singleChar];

      if (i === length - 1) {
        sum += num;
      }
    }
    else {
      var unit = chineseUnit[singleChar]
      if (unit.sec) {
        sum = (sum + num) * unit.value
      }
      else {
        sum += num * unit.value
      }

      num = 0;
    }
  }

  console.log(sum);
}


var t1 = '四'
var t2 = '一十四'
var t3 = '一百一十四'
var t4 = '一千一百一十四'
var t5 = '一万一百一十四'
var t6 = '五百七十八万六千四百九十一'

chinese2num(t6)