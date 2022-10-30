const getMyWthrBtn = document.getElementById("getMyWthr")
const weatherCont2 = document.getElementById("myweather")
const options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0}; 

const putMyWeather = (weather) => {

    // const firstLetterCapital = weather.list[0].weather[0].description
    // const firstLetterCapital2 = firstLetterCapital.charAt(0).toUpperCase() + firstLetterCapital.slice(1)

    console.log(weather);

const html2 = `<style> #myweather {visibility: visible;} </style>
            <h1>Weather in ${weather.name}</h1>
            <h2> Temperature: ${Math.round(weather.main.temp - 273.15)}°</h2>
            <h2> ${weather.weather[0].main}</h2>
            <h2><img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"></h2>
            <h2>Humidity: ${weather.main.humidity}%`


weatherCont2.innerHTML = html2
}

const success = async (evt) => {
    const {latitude, longitude} = evt.coords;
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`)
   
    putMyWeather(data);
}
   
const error = (err) => {
   console.log(err);
   weatherCont2.innerHTML = `<style> #myweather {visibility: visible;}</style>
                            ${err.message}`
}

getMyWthrBtn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(success, error, options);
   
})

/////////////////////// Search Bar Weather

const locationForm = document.getElementById("cityName")


document.addEventListener("submit", (e)=> {
    e.preventDefault();
    const cityEntry = cityLoc.value
    console.log(cityEntry);

    getCity(cityEntry)
})




const getCity = async (cityEntry) => {
    const {data}= await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityEntry}&limit=1&appid=40ce40e3254302084831efa372ed8341`)
 
    const cityLat = data[0].lat 
    const cityLong = data[0].lon
   
    convertToCity(cityLat, cityLong)    
}

const convertToCity = async (cityLat, cityLong) => {
    const {data}= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLong}&appid=40ce40e3254302084831efa372ed8341`)    
    
    putMyWeatherCity(data)
    
}



const putMyWeatherCity = (data) => {

    const html2 = `<style> #myweather {visibility: visible;} </style>
                <h1>Weather in ${data.name}</h1>
                <h2> Temperature: ${Math.round(data.main.temp - 273.15)}°</h2>
                <h2>${data.weather[0].main}</h3>
                <h2><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></h2>`
    ;
    
    weatherCont2.innerHTML = html2
    
}



