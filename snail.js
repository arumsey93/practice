snail=function (array) {
    var snailArr = [];
    for (var i = 0; i < Math.floor((array.length + 1)/2); i++){
      var curLine = array[i].slice(i,array.length-i);
      var bottomLine = array[array.length-i-1].slice(i,array.length-i).reverse();
      snailArr = snailArr.concat(curLine);
      for(var j = i+1; j <array.length-1-i; j++){
        snailArr.push(array[j][array.length-1-i]);
      }
     snailArr = i === array.length - 1 -i ? snailArr.concat([]) : snailArr.concat(bottomLine);
     for(var k = array.length-2-i; k >= i+1; k--){
        snailArr.push(array[k][i]);
      }
    }
  return snailArr; 
  };
  
  array1 = [[1,2,3],
            [8,9,4],
            [7,6,5]
           ];
  console.log(snail(array1)); //#=> [1,2,3,4,5,6,7,8,9]
  
  array2 = [ [1,2,3,4],
            [5,6,7,8],
            [9,7,2,4],
            [2,4,5,6]
            ];
  console.log(snail(array2)); //[1,2,3,4,8,4,6,5,4,2,9,5,6,7,2,7];
  
  
  array3 = [ [1,2,3,4,5],
             [5,6,7,8,3],
             [9,7,2,4,0],
             [2,4,5,6,1],
             [4,7,3,2,9]
            ];
  console.log(snail(array3)); //[1,2,3,4,5,3,0,1,9,2,3,7,4,2,9,5,6,7,8,4,6,5,4,7,2]