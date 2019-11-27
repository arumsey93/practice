// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    var cnt_arr = {};
    for(var i = 0; i < A.length; i++){
      if( cnt_arr[A[i]] == undefined ){
        cnt_arr[A[i]] = 1;
      } else {
        cnt_arr[A[i]]++;
      }
    }
    for( var key in cnt_arr ) {
      if( cnt_arr[key] % 2 == 1){
        return Number(key);
      }
    }
  }