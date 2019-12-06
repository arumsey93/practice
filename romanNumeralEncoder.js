// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

function solution(number){
    var value = 0;
    var romanStr = "";
    var  roman = [{M:1000},{CM:900}, {D:500},{CD:400},{C:100},{XC:90},{L:50},{XL:40},{X:10},{IX:9},{V:5},{IV:4},{I:1} ];
    for(var i = 0; i < roman.length; i++){
      for(var key in roman[i]){
        while(value + roman[i][key] <= number){
           value += roman[i][key];
           romanStr += key;
        }
      }
     }
    return romanStr;
   }