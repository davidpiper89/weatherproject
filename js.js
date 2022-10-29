// Cricket Ground Weather

const adelaideBtn = document.getElementById("adelaide")
const brisbaneBtn = document.getElementById("brisbane")
const geelongBtn = document.getElementById("geelong")
const hobartBtn  = document.getElementById("hobart")
const melbourneBtn = document.getElementById("melbourne")
const perthBtn = document.getElementById("perth")
const sydneyBtn = document.getElementById("sydney")
const weatherCont = document.getElementById("weather")

const forecastCont = document.getElementById("forecastCont")



let myDate = new Date()

const adeBrisTime = () =>{
return myDate.toLocaleString(`en-AU`, {
    timeZone: "Australia/Brisbane"
})}

const geeHobMelSydTime = () =>{
return myDate.toLocaleString(`en-AU`, {
        timeZone: "Australia/Sydney"
    })}

const perthTime = () =>{
return myDate.toLocaleString(`en-AU`, {
        timeZone: "Australia/Perth"
        })}

  
  

const putWeather1 = (weather) => {
    
    myDate = new Date();

    
    const pullTime = () => {
        if (weather.name === "Adelaide"){
            return adeBrisTime(myDate)
        }
        if (weather.name === "Woolloongabba"){
            return adeBrisTime(myDate)
        }
        if (weather.name === "Geelong"){
            return geeHobMelSydTime(myDate)
        }
        if (weather.name === "Shikotan"){
            return geeHobMelSydTime(myDate)
        }
        if (weather.name === "East Melbourne"){
            return geeHobMelSydTime(myDate)
        }
        if (weather.name === "Paddington"){
            return geeHobMelSydTime(myDate)
        }
        if (weather.name === "Burswood"){
            return perthTime(myDate)
        }
        

        
    };
    let html = `<style> #weather {visibility: visible;} </style>
                  <h1> Weather in ${weather.name} </h1>
                  <h2> Date and Time: ${pullTime()}</h2>
                  <h2> Temperature: ${Math.round(weather.main.temp - 273.15)}°</h2>
                  <h2><img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"></h2>
                  <h2> Desciption: ${weather.weather[0].description}</h2>
                  <h2> Humidity: ${weather.main.humidity}%</h2> `

                 
    weatherCont.innerHTML = html

// const weatherThoughts = () =>{
//     if (weather.weather[0].description === "Clouds")
//     {html += "<p> With the clouds we bowlers could get more swing</p>";
// }{
//     html+= "<p> Not cloudy"
// }  
// }

}

const putForecast1 = (weather) => {

   
    const list = weather.list.map((forecast) =>{

        const unixTimestamp = forecast.dt
        const localDateTime = new Date(unixTimestamp * 1000);
            
        
        return ` <div class="forecast"> <p class="date">Date and Time: ${localDateTime.toLocaleString(`en-AU`, {
            timeZone: "Australia/Brisbane"
        })} </p>
                <p>Temperature: ${Math.round(forecast.main.temp - 273.15)}°</p>
                <p><img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"></p>
                <p>Desciption: ${forecast.weather[0].description}</p>
                <p>Humidity: ${forecast.main.humidity}%</p></div>
                `;
    })
    
    forecastCont.innerHTML = list.join("");
}
const putForecast2 = (weather) => {

   
    const list = weather.list.map((forecast) =>{

        const unixTimestamp = forecast.dt
        const localDateTime = new Date(unixTimestamp * 1000);
            
        
        return ` <div class="forecast"> <p class="date">Date and Time: ${localDateTime.toLocaleString(`en-AU`, {
            timeZone: "Australia/Sydney"
        })} </p>
                <p>Temperature: ${Math.round(forecast.main.temp - 273.15)}°</p>
                <p><img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"></p>
                <p>Desciption: ${forecast.weather[0].description}</p>
                <p>Humidity: ${forecast.main.humidity}%</p></div>
                `;
    })
    
    forecastCont.innerHTML = list.join("");
}
const putForecast3 = (weather) => {

   
    const list = weather.list.map((forecast) =>{

        const unixTimestamp = forecast.dt
        const localDateTime = new Date(unixTimestamp * 1000);
            
        
        return ` <div class="forecast"> <p class="date">Date and Time: ${localDateTime.toLocaleString(`en-AU`, {
            timeZone: "Australia/Perth"
        })} </p>
                <p>Temperature: ${Math.round(forecast.main.temp - 273.15)}°</p>
                <p><img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"></p>
                <p>Desciption: ${forecast.weather[0].description}</p>
                <p>Humidity: ${forecast.main.humidity}%</p></div>
                `;
    })
    
    forecastCont.innerHTML = list.join("");
}


const axiosGetWthr = async (longitude, latitude) => {
    const {data} = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);
        putWeather1(data)
    
}

const axiosGetForecast = async (longitude,latitude) => {
    const {data} = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);
        
        putForecast1(data)
}
const axiosGetForecast2 = async (longitude,latitude) => {
    const {data} = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);
        
        putForecast2(data)
}
const axiosGetForecast3 = async (longitude,latitude) => {
    const {data} = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);
        
        putForecast3(data)
}
// const axiosGetForecast2 = async (longitude,latitude) => {
//     const {data} = await axios.get(
//         `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);
        
//         putForecast2(data)
// }
// const axiosGetForecast3 = async (longitude,latitude) => {
//     const {data} = await axios.get(
//         `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`);
        
//         putForecast3(data)
// }



adelaideBtn.addEventListener('click', () => {
    axiosGetWthr(138.5953, -34.9156)})
adelaideBtn.addEventListener('click', () => {
    axiosGetForecast(138.5953, -34.9156)})
brisbaneBtn.addEventListener('click', () => {
    axiosGetWthr(153.037430, -27.486099)})
brisbaneBtn.addEventListener('click', () => {
    axiosGetForecast(153.037430, -27.486099)})

geelongBtn.addEventListener('click', () => {
    axiosGetWthr(144.350006, -38.150002)})
geelongBtn.addEventListener('click', () => {
    axiosGetForecast2(144.350006, -38.150002)})
hobartBtn.addEventListener('click', () => {
    axiosGetWthr(147.324997, 42.8805546)})
hobartBtn.addEventListener('click', () => {
    axiosGetForecast2(147.324997, 42.8805546)})
melbourneBtn.addEventListener('click', () => {
    axiosGetWthr(144.983398, -37.819954)})
melbourneBtn.addEventListener('click', () => {
    axiosGetForecast2(144.983398, -37.819954)})
sydneyBtn.addEventListener('click', () => {
    axiosGetWthr(151.224121, -33.891525)})
sydneyBtn.addEventListener('click', () => {
    axiosGetForecast2(151.224121, -33.891525)})

perthBtn.addEventListener('click', () => {
    axiosGetWthr(115.888138, -31.9510296)})
perthBtn.addEventListener('click', () => {
    axiosGetForecast3(115.888138, -31.9510296)})





