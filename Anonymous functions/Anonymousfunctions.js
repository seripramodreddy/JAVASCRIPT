
//Print odd numbers in an array anonymous function
var arr=[1,2,3,4,5,6,7,8,9,10];
var oddnumbers=function()
{
    arr.forEach(element=>{
        if(element%2!=0)
        console.log(element);
    })
}
console.log(oddnumbers());

var stringarray=["pramod","naveen","surya","aca","aba"];


var stringarray1=["pramod","naveen","surya","aca","aba"];

//Convert all the strings to title caps in a string array anonymous function
toupper=function(x)
{
    return x.charAt(0).toUpperCase()+x.substr(1).toLowerCase();
}

stringarray = stringarray.map(toupper);

console.log(stringarray);

//Sum of all numbers in an array anonymous function
var total=0;
var sumofnumbers=function()
{
    arr.forEach(element=>
        {
        total=total+element;    
        })
        console.log(total);
}

sumofnumbers();

//Return all the prime numbers in an array anonymous function
var primenumbers=function()
{
    arr.forEach(element=>
        {   
            var flag=false;
            if(element==1)
            {
                flag=true;
            }
            for(let i=2;i<element/2;i++)
            { 
                
                if(element%i==0)
                {
                    flag=true;
                    break;
                }
            }
            if(!flag)
            {
                console.log(element);
            }
        })
}

primenumbers();

//Return all the palindromes in an array anonymous function
var palindromes=function()
{
    stringarray1.forEach(element=>
        {
        var len=element.length;
        let flag=false;
        for(let i=0;i<len/2;i++)
        {
            if(element[i]!==element[len-i-1])
            {
                flag=true;
            }
        }
        if(!flag)
        {
            console.log(element);
        }
        })
}

palindromes();

//Remove duplicates from an array anonymous function
let chars = ['A', 'B', 'A', 'C', 'B','A','B'];

let uniqueChars = [];

let uniqueChars1=[];



var removeduplicates=function()
{
    chars.forEach(element=>
        {
            if(!uniqueChars1.includes(element))
            uniqueChars1.push(element);
        })
        return uniqueChars1;
}

console.log(removeduplicates());

//Rotate an array by k times and return the rotated array anonymous function
var numbers=[1,2,3,4,5,6,7,8]

var rotatearray=function()
{
    let i=0;
    while(i<3)
    {
        numbers.unshift(numbers.pop())
        i++;
    }
    return numbers;
}

console.log(rotatearray());

//Return median of two sorted arrays of same size anonymous function
var arr1=[1,2,3,4,5,6,7,8,9];

var arr2=[20,21,22,23,24,25,26,27,28,29];

var median=function()
{
    let compare=(a,b)=>{
        return a-b;
    }
    let finalarr=arr1.concat(arr2).sort(compare);
    if(finalarr.length%2==0)
    {
        return finalarr[finalarr.length/2-1]+finalarr[finalarr.length/2];
    }
    return finalarr[Math.floor(finalarr.length/2)];
}

console.log(median());

//Print odd numbers in an array  using IIFE
(function()
{
    arr.forEach(element=>{
        if(element%2!=0)
        console.log(element);
    })
})()

//Sum of all numbers in an array using IIFE
var total1=0;
(function()
{
    arr.forEach(element=>
        {
        total1=total1+element;    
        })
        console.log(total1);
})()

//Return all the prime numbers in an array 
var numarray=[1,2,3,4,5,6,7,8,9];
(function()
{
    numarray.forEach(element=>
        {   
            var flag=false;
            if(element==1)
            {
                flag=true;
            }
            for(let i=2;i<element/2;i++)
            { 
                
                if(element%i==0)
                {
                    flag=true;
                    break;
                }
            }
            if(!flag)
            {
                console.log(element);
            }
        })
})()

//Return all the palindromes in an array using IIFE
stringarray2=['aba','aca','pramod','ravi','acca'];
(function()
{
    stringarray1.forEach(element=>
        {
        var len=element.length;
        let flag=false;
        for(let i=0;i<len/2;i++)
        {
            if(element[i]!==element[len-i-1])
            {
                flag=true;
            }
        }
        if(!flag)
        {
            console.log(element);
        }
        })
})()


//Remove duplicates from an array using IIFE
chars1=['A','B','C','D','E','A','C','B'];

let uniqueChars2=[];
(function()
{
    chars1.forEach(element=>
        {
            if(!uniqueChars2.includes(element))
            uniqueChars2.push(element);
        })
        return uniqueChars2;
})(console.log(uniqueChars2));


//Rotate an array by k times and return the rotated array using IIFE
var numbers1=[2,4,6,8,10,12,14,16,18];
(function()
{
    let i=0;
    while(i<3)
    {
        numbers1.unshift(numbers1.pop())
        i++;
    }
    return numbers1;
})(console.log(numbers1))


arr3=[1,2,3,4,5,6,7,8,9];
arr4=[10,11,12,1,3,14,15,16,17,18,19];

//Return median of two sorted arrays of same size using IIFE.
(function()
{
    let compare=(a,b)=>{
        return a-b;
    }
    let finalarr1=arr3.concat(arr4).sort(compare);
    if(finalarr1.length%2==0)
    {
        console.log(finalarr1[finalarr1.length/2-1]+finalarr1[finalarr1.length/2]);
    }else{
    console.log(finalarr1[Math.floor(finalarr1.length/2)]);
    }
})();





