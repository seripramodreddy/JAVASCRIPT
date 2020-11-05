var cat = {
    name: "Fluffy",
    activities: ["play","eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
   }
  // console.log(cat);
// Add height and weight to Fluffy
cat.height="6ft";
cat["weight"]="5";

//Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name="Fluffyy";

//List all the activities of Fluffyy’s catFriends
for(var key in cat["catFriends"])
{
    //console.log(cat.catFriends[key].activities);
    var value=cat.catFriends[key].activities;
    for(j in value)
    {
        //console.log(value[j]);
    }
}
//Print the catFriends names
for(var key in cat["catFriends"])
{
    //console.log(cat.catFriends[key].name);
    
}
let sum=0;
//Print the total weight of catFriends    
for(var key in cat["catFriends"])
{    
    //console.log(typeof(cat.catFriends[key.weight]));
     sum=sum+(cat.catFriends[key].weight);
    
}
//console.log(sum);

//Update the fur color of bar
for(var key in cat["catFriends"])
{
    if(cat.catFriends[key].name==="bar")
    {
        cat.catFriends[key].furcolor="red";
    }
}
//console.log(cat);
//Add 2 more activities to bar & foo cats
for(var key in cat["catFriends"])
{
    cat.catFriends[key].activities.push("dance","run");
}
for(key in cat["catFriends"]){
//console.log(cat.catFriends[key].activities);
}


var myCar = {
    make: "Bugatti",
    model: "Bugatti La Voiture Noire",
    year: 2019,
    accidents: [
    {
    date: "3/15/2019",
    damage_points: "5000",
    atFaultForAccident: true
    },
    {
    date: "7/4/2022",
    damage_points: "2200",
    atFaultForAccident: true
    },
    {
    date: "6/22/2021",
    damage_points: "7900",
    atFaultForAccident: true
    }
    ]
   }
//Loop over the accidents array. Change atFaultForAccident from true to false.
for(key in myCar["accidents"])
{
    myCar.accidents[key].atFaultForAccident="false";
}
//console.log(myCar);
//Print the dated of my accidents
for(key in myCar["accidents"])
{
    //console.log(myCar.accidents[key].date);
}

//Write a function called “printAllValues” which returns an newArray of all the input object’s values.
var object = {name: "RajiniKanth", age: 33, hasPets : false};
function printAllValues(obj) {
    var arr=[];
    for(key in obj)
    {
        arr.push(obj[key]);
    }
    return arr;
}

var outputarr=printAllValues(object);
//console.log(outputarr);

//Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
function printAllKeys(obj) {
    // your code here
    var arr=[];
    for(key in obj)
    {
        arr.push(key);
        //console.log(key);
    }
    return arr;
   }
var keysarray=printAllKeys(object);
//console.log(keysarray);

//var objlist=Object.entries(object);
//console.log(objlist);
var obj = {name: "ISRO", age: 35, role: "Scientist"};
//Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
function convertListToObject(obj) {
    var objlist=Object.entries(obj);
    return objlist;
 // your code here
}

//console.log(convertListToObject(obj));

var array = ["GUVI", "I", "am", "Geek"];
function transformFirstAndLast(arr) {
    var newObject={};
    newObject[arr[0]]=arr[arr.length-1];
    return newObject;
   }
//console.log(transformFirstAndLast(array));

var array1 = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];

//Write a function “fromListToObject” which takes in an array of arrays, 
//and returns an object with each pair of elements in the array as a key-value pair.
function fromListToObject(arr) {
    var newObject = {};
    for(key in arr)
    {
        newObject[arr[key][0]]= arr[key][1];
    }
    return newObject;
   }

//console.log(fromListToObject(array1));





//I have a mock data of security Questions and Answers. You function should take the object 
//and a pair of strings and should return if the quest is present 
//and if its valid answer


var securityQuestions = [
    {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
   ]
   function chksecurityQuestions(securityQuestions,question,answer) {
       let value=false;
       for(key in securityQuestions)
       {
           if(securityQuestions[key].question===question)
           {
               if(securityQuestions[key].expectedAnswer===answer)
               {
                    value=true;
                    break;
               }
           }
       }
   
    // your code here
    return value; 
   }
   //Test case1:
   var ques = "What was your first pet’s name?";
   var ans  =  "FlufferNutter";
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   //console.log(status); // true
   //Test case2:
   var ques = "What was your first pet’s name?";
  var ans  =  "DufferNutter";
 var status = chksecurityQuestions(securityQuestions, ques, ans);
   //console.log(status); // flase

   
   var expected = {foo: 5, bar: 6};
   var actual = {foo:6,bar:5};
   //_.isEqual(expected,actual);
  // _.isEqual(expected, actual);
  // isDeepStrictEqual(expected,actual);
 let expected1=JSON.stringify(expected);

 //expected1=JSON.parse(expected1);

 let actual1=JSON.stringify(actual);
 //actual1=JSON.parse(actual1);

 //console.log(expected1==actual1);

 //console.log(_.isEqual(expected,actual));

 console.log(deepEqual(expected,actual));

 function deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = isObject(val1) && isObject(val2);
      if (
        areObjects && !deepEqual(val1, val2) ||
        !areObjects && val1 !== val2) {
        return false;
      }
    }
  
    return true;
  }
  
  function isObject(object) {
    return object != null && typeof object === 'object';
  }


//Write a function to return the list of characters below 20 age
    var students = [
        {
        name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
        {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
        {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
        {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
        {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
        {name: "Devdas",age: 56} 
        ];
var obj={};
for( i in students)
{   

    if(students[i].age<20)
    {
         obj[i]=students[i];
    }
    
}
console.log(obj);


