// Cricket Ground Weather

const adelaideBtn = document.getElementById("adelaide")
const brisbaneBtn = document.getElementById("brisbane")
const geelongBtn = document.getElementById("geelong")
const hobartBtn  = document.getElementById("hobart")
const melbourneBtn = document.getElementById("melbourne")
const perthBtn = document.getElementById("perth")
const sydneyBtn = document.getElementById("sydney")
const weatherCont = document.getElementById("weather")


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
    try{
    const adelaideLoc = {longitude: 138.5953, latitude:-34.9156}
    const {longitude, latitude} = adelaideLoc

    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);

        console.log(data);

        putWeather1(data)
    }
    catch (err) {
        weatherCont.innerHTML = `Failed to load weather`
    }
};

const brisbaneWthr = async () => {

    try{
    const brisbaneLoc = {longitude: 153.037430, latitude:-27.486099}
    const {longitude, latitude} = brisbaneLoc

    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);

        putWeather1(data)
    }
    catch (err) {
        weatherCont.innerHTML = `Failed to load weather`
    }
};

const geelongWthr = async () => {
    try{
    const geeLongLoc = {longitude: 144.350006, latitude:-38.150002}
    const {longitude, latitude} = geeLongLoc

    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);

        putWeather2(data)
    }
    catch (err) {
        weatherCont.innerHTML = `Failed to load weather`
    }
}

const hobartWthr = async () => {
    try{
    const hobartLoc = {longitude: 147.324997, latitude:-42.880554}
    const {longitude, latitude} = hobartLoc

    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);

        putWeather2(data)
    }
    catch (err) {
        weatherCont.innerHTML = `Failed to load weather`
    }
}

const melbourneWthr = async () => {
    try{
    const melbourneLoc = {longitude: 144.983398, latitude: -37.819954}
    const {longitude, latitude} = melbourneLoc

    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);

        putWeather2(data)
    }
    catch (err) {
        weatherCont.innerHTML = `Failed to load weather`
    }
}

const sydneyWthr = async () => {
    try{
    const sydneyLoc = {longitude: 151.224121, latitude: -33.891525}
    const {longitude, latitude} = sydneyLoc

    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);

        putWeather2(data)
    }
    catch (err) {
        weatherCont.innerHTML = `Failed to load weather`
    }
}

const perthWthr = async () => {
    try{
    const perthLoc = {longitude: 115.888138, latitude: -31.951029}
    const {longitude, latitude} = perthLoc

    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);

        putWeather3(data)
    }
    catch (err) {
        weatherCont.innerHTML = `Failed to load weather`
    }
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


