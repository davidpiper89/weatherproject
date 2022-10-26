// Cricket Ground Weather

const adelaideBtn = document.getElementById("adelaide")
const brisbaneBtn = document.getElementById("brisbane")
const geelongBtn = document.getElementById("geelong")
const hobartBtn  = document.getElementById("hobart")
const melbourneBtn = document.getElementById("melbourne")
const perthBtn = document.getElementById("perth")
const sydneyBtn = document.getElementById("sydney")
const weatherCont = document.getElementById("weather")
const getMyWthrBtn = document.getElementById("getMyWthr")
const weatherCont2 = document.getElementById("myweather")

const myDate = new Date()
const adeBrisTime = myDate.toLocaleString(`en-GB`, {
    timeZone: "Australia/Brisbane"
})

const myDate1 = new Date()
const geeHobMelSydTime = myDate1.toLocaleString(`en-GB`, {
    timeZone: "Australia/Sydney"
})

const myDate2 = new Date()
const perthTime = myDate2.toLocaleString(`en-GB`, {
    timeZone: "Australia/Perth"
})




const putWeather1 = (weather) => {
    const html = `<h1> Current weather in ${weather.city.name} </h1>
                  <h2> Current date and time is : ${adeBrisTime}
                  <h2> Temperature: ${Math.round(weather.list[0].main.temp - 273.15)}°</h2>
                  <h3>${weather.list[0].weather[0].description}</h3>
                  <img src="http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@4x.png">
                  <button id="forecast">Get the weather forecast</button>
                  `
                  const forecastBtn = document.getElementById("forecast")
                  forecastBtn.addEventListener("click", ()=>{
                    console.log("button inside clicked");
                  })

    weatherCont.innerHTML = html
}

const putWeather2 = (weather) => {
    const html = `<h1> Current weather in ${weather.city.name} </h1>
                  <h2> Current date and time is : ${geeHobMelSydTime}
                  <h2> Temperature: ${Math.round(weather.list[0].main.temp - 273.15)}°</h2>
                  <h3>${weather.list[0].weather[0].description}</h3>
                  <img src="http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@4x.png">
                  <button id="forecast">Get the weather forecast</button>
                  `

    weatherCont.innerHTML = html
}

const putWeather3 = (weather) => {
    const html = `<h1> Current weather in ${weather.city.name} </h1>
                  <h2> Current date and time is : ${perthTime}
                  <h2> Temperature: ${Math.round(weather.list[0].main.temp - 273.15)}°</h2>
                  <h3>${weather.list[0].weather[0].description}</h3>
                  <img src="http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@4x.png">
                  <button id="forecast">Get the weather forecast</button>
                  `

    weatherCont.innerHTML = html
}





const adelaideWthr = async () => {
    const adelaideLoc = {longitude: 138.5953, latitude:-34.9156}
    const {longitude, latitude} = adelaideLoc

    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);

        console.log(data);

        putWeather1(data)
};

const brisbaneWthr = async () => {
    const brisbaneLoc = {longitude: 153.037430, latitude:-27.486099}
    const {longitude, latitude} = brisbaneLoc

    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);

        putWeather1(data)
};

const geelongWthr = async () => {
    const geeLongLoc = {longitude: 144.350006, latitude:-38.150002}
    const {longitude, latitude} = geeLongLoc

    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);

        putWeather2(data)
}

const hobartWthr = async () => {
    const hobartLoc = {longitude: 147.324997, latitude:-42.880554}
    const {longitude, latitude} = hobartLoc

    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);

        putWeather2(data)
}

const melbourneWthr = async () => {
    const melbourneLoc = {longitude: 144.983398, latitude: -37.819954}
    const {longitude, latitude} = melbourneLoc

    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);

        putWeather2(data)
}

const sydneyWthr = async () => {
    const sydneyLoc = {longitude: 151.224121, latitude: -33.891525}
    const {longitude, latitude} = sydneyLoc

    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);

        putWeather2(data)
}

const perthWthr = async () => {
    const perthLoc = {longitude: 115.888138, latitude: -31.951029}
    const {longitude, latitude} = perthLoc

    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);

        putWeather3(data)
    }

adelaideBtn.addEventListener('click', adelaideWthr)
brisbaneBtn.addEventListener('click', brisbaneWthr)
geelongBtn.addEventListener('click', geelongWthr)
hobartBtn.addEventListener('click', hobartWthr)
melbourneBtn.addEventListener('click', melbourneWthr)
sydneyBtn.addEventListener('click', sydneyWthr)
perthBtn.addEventListener('click', perthWthr)


//////////////////////////////////////////////////////////
// User Location or requested city Weather


const options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0}; 

const putMyWeather = (weather) => {

const html2 = `<h1>Current weather in ${weather.city.name}</h1>
            <h2> Temperature: ${Math.round(weather.list[0].main.temp - 273.15)}°</h2>
            <h3>${weather.list[0].weather[0].description}</h3>
            <img src="http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@4x.png">`


weatherCont2.innerHTML = html2
}

const success = async (evt) => {
    const {latitude, longitude} = evt.coords;
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`)
   
    putMyWeather(data);
}
   
const error = (err) => {
    
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

// const getCity = async (cityEntry) => {
//     const {data}= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityEntry}&appid=40ce40e3254302084831efa372ed8341`)

//     console.log(data);

//     putMyWeatherCity(data)
// }


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

    const html2 = `<h1>Current weather in ${data.name}</h1>
                <h2> Temperature: ${Math.round(data.main.temp - 273.15)}°</h2>
                <h3>${data.weather[0].main}</h3>
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png">`
    console.log(data);
    
    weatherCont2.innerHTML = html2
    
}



