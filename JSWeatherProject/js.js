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


const putWeather = (weather) => {
    const html = `<h1>Current weather in ${weather.city.name} </h1>
                  <h2> Temperature: ${Math.round(weather.list[0].main.temp - 273.15)}°</h2>
                  <h3>${weather.list[0].weather[0].description}</h3>
                  <img src="http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@4x.png">
                  `

    weatherCont.innerHTML = html
}


const adelaideWthr = async () => {
    const adelaideLoc = {longitude: 138.5953, latitude:-34.9156}
    const {longitude, latitude} = adelaideLoc

    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);

        console.log(data);

        putWeather(data)
};

const brisbaneWthr = async () => {
    const brisbaneLoc = {longitude: 153.037430, latitude:-27.486099}
    const {longitude, latitude} = brisbaneLoc

    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);

        putWeather(data)
};


adelaideBtn.addEventListener('click', adelaideWthr)
brisbaneBtn.addEventListener('click', brisbaneWthr)

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

const cityInput = document.getElementById("city")
const cityBtn = document.getElementById("cityBtn")
const form = document.getElementById("cityForm")


// `https://api.openweathermap.org/data/2.5/weather?q=`${city}`&appid=40ce40e3254302084831efa372ed8341`

// city.addEventListener("input",(e) => {
//     console.log(e.target.name, e.target.value);
// })
// const 





