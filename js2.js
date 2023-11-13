import { KELVIN_TO_CELSIUS } from "./config";


const getMyWthrBtn = document.getElementById("getMyWthr");
const weatherCont2 = document.getElementById("myweather");
const options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };
const myforecast = document.getElementById("myforecastcont");

const putMyWeather = (weather) => {
  myforecast.innerHTML = "";

  const date = new Date();

  const firstLetterCapital = weather.weather[0].description;
  const firstLetterCapital2 =
    firstLetterCapital.charAt(0).toUpperCase() + firstLetterCapital.slice(1);

  const html2 = `<style> #myweather {visibility: visible;} </style>
            <h1>Weather in ${weather.name}</h1>
            <h2>Date and Time: ${date.toLocaleString("en-GB")}
            <h2> Temperature: ${Math.round(weather.main.temp - KELVIN_TO_CELSIUS)}°</h2>
            <h2> ${firstLetterCapital2}</h2>
            <h2><img src="https://openweathermap.org/img/wn/${
              weather.weather[0].icon
            }@2x.png"></h2>
            <h2>Humidity: ${weather.main.humidity}</h2>
            <button id="myforecast">Get your forecast</button>`;

  weatherCont2.innerHTML = html2;
  const myForecastBtn = document.getElementById("myforecast");
  myForecastBtn.addEventListener("click", () => {
    axiosGetMyForecast(weather.coord.lon, weather.coord.lat);
  });
};

const putMyForecast = (data) => {
  const list = data.list.map((forecast) => {
    const firstLetterCapital = forecast.weather[0].description;
    const firstLetterCapital2 =
      firstLetterCapital.charAt(0).toUpperCase() + firstLetterCapital.slice(1);
    return `<div class="myforecast"> 
            <p> Date and Time ${forecast.dt_txt}</p>
            <p>Temperature: ${Math.round(forecast.main.temp - KELVIN_TO_CELSIUS)}°</p>
            <p><img src="https://openweathermap.org/img/wn/${
              forecast.weather[0].icon
            }@2x.png"></p>
            <p>Desciption: ${firstLetterCapital2}</p>
            <p>Humidity: ${forecast.main.humidity}%</p></div>
            `;
  });

  myforecast.innerHTML = list.join("");
};

const success = async (evt) => {
  const { latitude, longitude } = evt.coords;
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`
  );

  putMyWeather(data);
};

const error = (err) => {
  console.log(err);
  weatherCont2.innerHTML = `<style> #myweather {visibility: visible;}</style>
                            ${err.message}`;
};

getMyWthrBtn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(success, error, options);
});

const axiosGetMyForecast = async (longitude, latitude) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`
  );

  putMyForecast(data);
};

/////////////////////// Search Bar Weather

const locationForm = document.getElementById("cityName");

document.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityEntry = cityLoc.value;
  getCity(cityEntry);
});

const getCity = async (cityEntry) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${cityEntry}&limit=1&appid=40ce40e3254302084831efa372ed8341`
  );

  const cityLat = data[0].lat;
  const cityLong = data[0].lon;

  convertToCity(cityLat, cityLong);
};

const convertToCity = async (cityLat, cityLong) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLong}&appid=40ce40e3254302084831efa372ed8341`
  );

  putMyWeatherCity(data);
};

const putMyWeatherCity = (data) => {
  myforecast.innerHTML = "";

  const firstLetterCapital = data.weather[0].description;
  const firstLetterCapital2 =
    firstLetterCapital.charAt(0).toUpperCase() + firstLetterCapital.slice(1);

  const html2 = `<style> #myweather {visibility: visible;} </style>
                <h1>Weather in ${data.name}</h1>
                <h2> Temperature: ${Math.round(data.main.temp - KELVIN_TO_CELSIUS)}°</h2>
                <h2>${firstLetterCapital2}</h3>
                <h2><img src="https://openweathermap.org/img/wn/${
                  data.weather[0].icon
                }@2x.png"></h2>
                <h2>Humidity: ${data.main.humidity}%
                `;

  weatherCont2.innerHTML = html2;
};

const putMyCityForecast = (data) => {
  const list = data.list.map((forecast) => {
    console.log(forecast);
    const firstLetterCapital = forecast.weather[0].description;
    const firstLetterCapital2 =
      firstLetterCapital.charAt(0).toUpperCase() + firstLetterCapital.slice(1);
    return `<div class="myforecast"> 
            <p> Date and Time ${forecast.dt_txt}</p>
            <p>Temperature: ${Math.round(forecast.main.temp - KELVIN_TO_CELSIUS)}°</p>
            <p><img src="https://openweathermap.org/img/wn/${
              forecast.weather[0].icon
            }@2x.png"></p>
            <p>Desciption: ${firstLetterCapital2}</p>
            <p>Humidity: ${forecast.main.humidity}%</p></div>
            `;
  });

  myforecast.innerHTML = list.join("");
};
