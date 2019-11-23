var numArray = [0189459, 0189460, 0189461, 0189463, 0189465];
var mia= [];

    for(var i = 1; i < numArray.length; i++) 
    {     
        if(numArray[i] - numArray[i-1] != 1) 
        {         
            var x = numArray[i] - numArray[i-1];
            var j = 1;
            while (j<x)
            {
                mia.push(numArray[i-1]+j);
                j++;
            }
        }
    }
console.log(mia)