// Cricket Ground Weather

const adelaideBtn = document.getElementById("adelaide")
const brisbaneBtn = document.getElementById("brisbane")
const geelongBtn = document.getElementById("geelong")
const hobartBtn  = document.getElementById("hobart")
const melbourneBtn = document.getElementById("melbourne")
const perthBtn = document.getElementById("perth")
const sydneyBtn = document.getElementById("sydney")
const weatherCont = document.getElementById("weather")

let myDate = new Date()

const adeBrisTime = (myDate) =>{
return myDate.toLocaleString(`en-GB`, {
    timeZone: "Australia/Brisbane"
})}

const geeHobMelSydTime = (myDate) =>{
return myDate.toLocaleString(`en-GB`, {
        timeZone: "Australia/Sydney"
    })}

const perthTime = (myDate) =>{
return myDate.toLocaleString(`en-GB`, {
        timeZone: "Australia/Perth"
        })}
    


const putWeather1 = (weather) => {
    myDate = new Date()
    const html = `<h1> Current weather in ${weather.name} </h1>
                  <h2> Current date and time is : ${adeBrisTime(myDate)}
                  <h2> Temperature: ${Math.round(weather.main.temp - 273.15)}°</h2>
                  <h3>${weather.weather[0].description}</h3>
                  <img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png">
                           
                  <button id="forecast">Get the weather forecast</button>
                  `

               
    weatherCont.innerHTML = html
}

const putWeather2 = (weather) => {
    myDate = new Date()
    let html = `<h1> Current weather in ${weather.name} </h1>
    <h2> Current date and time is : ${geeHobMelSydTime(myDate)}
    <h2> Temperature: ${Math.round(weather.main.temp - 273.15)}°</h2>
    <h3>${weather.weather[0].description}</h3>
    <img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png">
             
    <button id="forecast">Get the weather forecast</button>
    `
// if (weather.weather[0].description)
//  {html += ""}
    weatherCont.innerHTML = html
}

const putWeather3 = (weather) => {
    myDate = new Date()
    const html = `<h1> Current weather in ${weather.name} </h1>
    <h2> Current date and time is : ${perthTime(myDate)}
    <h2> Temperature: ${Math.round(weather.main.temp - 273.15)}°</h2>
    <h3>${weather.weather[0].description}</h3>
    <img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png">
             
    <button id="forecast">Get the weather forecast</button>
    `

    weatherCont.innerHTML = html
}

const axiosGetWthr = async (longitude, latitude) => {
    const {data} = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);

        putWeather1(data)
}


adelaideBtn.addEventListener('click', () => {
    axiosGetWthr(138.5953, -34.9156)})
brisbaneBtn.addEventListener('click', () => {
    axiosGetWthr(153.037430, -27.486099)})
geelongBtn.addEventListener('click', () => {
    axiosGetWthr(144.350006, -38.150002)})
hobartBtn.addEventListener('click', () => {
    axiosGetWthr(147.324997, 42.8805546)})
melbourneBtn.addEventListener('click', () => {
    axiosGetWthr(144.983398, -37.819954)})
sydneyBtn.addEventListener('click', () => {
    axiosGetWthr(151.224121, -33.891525)})
perthBtn.addEventListener('click', () => {
    axiosGetWthr(115.888138, -31.9510296)})




