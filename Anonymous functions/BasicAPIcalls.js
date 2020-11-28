var request= new XMLHttpRequest();
var request1= new XMLHttpRequest();

var request2= new XMLHttpRequest();
var lat=33;
var long=66;

var url="https://api.openweathermap.org/data/2.5/weather?lat="+lat +"&lon="+long +"&appid=c32cdde7f28f0637394e3c7f74db3dbd"

request.open('GET',url,true);

request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
     console.log(data);
    
} 

var name="USA"
var url1="https://api.openweathermap.org/data/2.5/weather?q="+name+"&appid=c32cdde7f28f0637394e3c7f74db3dbd"

request1.open('GET',url1,true);

request1.send();
request1.onload=function(){
    var data1=JSON.parse(this.response);
     console.log(data1);
    
} 


var cityid="1149361";

var url2="https://api.openweathermap.org/data/2.5/weather?id="+cityid+"&appid=c32cdde7f28f0637394e3c7f74db3dbd"

request2.open('GET',url2,true);

request2.send();
request2.onload=function(){
    var data2=JSON.parse(this.response);
     console.log(data2);
    
} 



