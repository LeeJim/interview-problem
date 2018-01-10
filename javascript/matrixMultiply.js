function matrixMultiplication(a,b){

   var len=a.length,
        arr=[];

   for (var i=0; i<len; i++) {

     arr[i]=[];

     for(var j=0; j<len; j++) {

      arr[i][j]=0;//每次都重新置为0

      for(var k=0; k<len; k++) {

        arr[i][j]+=a[i][k]*b[k][j];

      }
     }
   }

   return arr;
}

function matrixMultiplication(a,b){
  return a.map(function(row){
      return row.map(function(_,i){
          return row.reduce(function(sum,cell,j){
              return sum+cell*b[j][i];
          },0);
      });
  });
}


function matrixMultiply(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
        throw new Error('params must be array')
    }
    
    var isValid = a.every(item => item.length === b.length)
    
    if (!isValid) {
        throw new Error('传入的数组数据有误，无法进行矩阵乘')
    }
    
    var result = []
    
    var rowLen = a.length,
        colLen = b[0].length;
        
    var addTimes = a[0].length;
        
    for(var i=0; i<rowLen; i++) {
        result[i] = [];
        
        for(var j=0; j<colLen; j++) {
            result[i][j] = 0
            
            for(var k=0; k<addTimes; k++) {
                result[i][j] += a[i][k] * b[k][j]
            }
        }
    }
    console.log(result)
    return result
}


var a = [[1,2,3],[4,5,6]]
var b = [[1,4],[2,5],[3,6]]

matrixMultiply(a,b)