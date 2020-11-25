var request= new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();





// Get all the countries from Asia continent using Filter function
request.onload=function(){
    var restcountriesdata=JSON.parse(this.response);
    
    var countriesfromAsia= restcountriesdata.filter(item=>{
        return item.region=="Asia"
    })

    console.log(countriesfromAsia);

} 

//Get all the countries with population of less than 2 lacs using Filter function
request.onload=function(){
    var restcountriesdata=JSON.parse(this.response);

    var limitedpopulationcountries=restcountriesdata.filter(item=>{
        return item.population<200000
    })
    console.log(limitedpopulationcountries);
} 

//Print the following details name, capital, flag using forEach function
request.onload=function(){
    var restcountriesdata=JSON.parse(this.response);
    
    restcountriesdata.forEach(element => {
        console.log("name: "+element.name);
        console.log("capitalcity: "+element.capital);
        console.log("flag: "+element.flag);
        
    });
} 

// Print the total population of countries using reduce function
request.onload=function(){
    var restcountriesdata=JSON.parse(this.response);
    
    var totalpopulation=restcountriesdata.reduce(function(count,current)
    {
        return count+current.population;
        
    },0)
    console.log(totalpopulation);
} 

//Print the total population of countries in Asia continent using reduce and filter function
request.onload=function(){
    var restcountriesdata=JSON.parse(this.response);
     
    var countriesfromAsia= restcountriesdata.filter(item=>{
        return item.region=="Asia"
    })
    
    var totalpopulationfromAsia=countriesfromAsia.reduce(function(count,current)
    {
        return count+current.population;
        
    },0)
    console.log(totalpopulationfromAsia);
} 

//Print the country which use US Dollars as currency.

request.onload=function(){
    var restcountriesdata=JSON.parse(this.response);
    var countrieswithdollarcurrency=restcountriesdata.filter(item=>{
        return item.currencies[0].symbol=='$' &&item.currencies[0].code=="USD" && item.currencies[0].name=="United States dollar"
        })
    console.log(countrieswithdollarcurrency);
} 

//Add error handling to the xml http request code
request.onload=function(){
    try{
    var restcountriesdata=JSON.parse(this.response);
    if(restcountriesdata.length!=300)
    {
        throw new SyntaxError("incomplete data");
    }
    else{
        alert("found data");
    }
}
catch(error)
{
    alert(error.message);
}
}









