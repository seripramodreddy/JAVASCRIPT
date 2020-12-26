
let div=document.createElement('div');
div.classList.add('container');


let row=document.createElement('div');
row.classList.add('row','mt-3','bg-dark');

fetch('https://restcountries.eu/rest/v2/all')
.then((response)=>{return response.json()})
.then((data)=>{									
	data.forEach(function(x){
		let columndiv=document.createElement('div');								
		columndiv.classList.add('col-lg-4', 'col-sm-12');
		let carddiv=document.createElement('div');
		carddiv.classList.add('card', 'text-center', 'cardGradient', 'text-white', 'm-3');		
		let h4=document.createElement('h2');
		h4.classList.add('card-header', 'p-2', 'bg-info');
		h4.innerText=x.name;
		carddiv.appendChild(h4);
		let cardbody=document.createElement('div');
		cardbody.classList.add('card-body', 'p-2');
		let img=document.createElement('img');
		img.classList.add('card-img-top','img-fluid');
		img.src=x.flag;
		cardbody.appendChild(img);
		let Capital=document.createElement('p');
		Capital.classList.add('card-text', 'h5', 'mt-4');
		Capital.innerText='Capital : '+x.capital;
		cardbody.appendChild(Capital);
		let Region=document.createElement('p');
		Region.classList.add('card-text', 'h5');
		Region.innerText='Region : '+x.region;
		cardbody.appendChild(Region);
		let CountryCode=document.createElement('div');
		CountryCode.classList.add('card-text', 'h5');
		CountryCode.innerText='Country Code : '+x.alpha3Code;
		cardbody.appendChild(CountryCode);
		carddiv.appendChild(cardbody);
		let WeatherData=document.createElement('button');
		WeatherData.setAttribute('id',x.latlng);
		WeatherData.onclick=LatLongData;
		WeatherData.classList.add('btn', 'btn-primary', 'col-6', 'offset-3', 'bg-success', 'border-white', 'mb-4');
		WeatherData.innerText='Click for Weather';
		carddiv.appendChild(WeatherData);
		columndiv.appendChild(carddiv);
		row.appendChild(columndiv);
	});
})
.catch((err)=>alert(err));


let LatLongData=function(){
	let latlong=this.id;						
	let lat=latlong.split(',')[0];
	let long=latlong.split(',')[1];
	fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=c32cdde7f28f0637394e3c7f74db3dbd') 
	.then((response)=>{return response.text();})
	.then((data)=>alert(data))
	.catch((err)=>alert(err));
}


div.appendChild(row);
document.body.appendChild(div);