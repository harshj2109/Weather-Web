const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '786147084bmsh09fecb5d9b9b3c1p19f929jsn575c161f2786',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const func = (city)=>{
    cityname.innerHTML=city;
try {
    
        
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
        .then(response=>response.json())
        .then(response=>{
            console.log(response)
            mintemp.innerHTML=response.min_temp + "°C"
            temp.innerHTML=response.temp + "°C"
            maxtemp.innerHTML=response.max_temp + "°C" 
            list1.innerHTML=response.cloud_pct
            list2.innerHTML=response.feels_like
            list3.innerHTML=response.humidity
            list4.innerHTML=response.wind_speed
            list5.innerHTML=response.wind_degrees 
            list6.innerHTML=response.sunrise
            list7.innerHTML=response.sunset
            
        })
    
  } catch (e) {
    
    alert(e);
  }
}

search.addEventListener("click",()=>{
    func(city.value);
    
})
func("bangalore");





