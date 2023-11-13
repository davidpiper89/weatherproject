import {
  adelaide,
  brisbane,
  geelong,
  hobart,
  melbourne,
  sydney,
  perth,
  KELVIN_TO_CELSIUS,
  SECONDS_TO_MILLISECONDS
} from "./config.js";

// Cricket Ground Weather

const adelaideBtn = document.getElementById("adelaide");
const brisbaneBtn = document.getElementById("brisbane");
const geelongBtn = document.getElementById("geelong");
const hobartBtn = document.getElementById("hobart");
const melbourneBtn = document.getElementById("melbourne");
const perthBtn = document.getElementById("perth");
const sydneyBtn = document.getElementById("sydney");
const weatherCont = document.getElementById("weather");

const forecastCont = document.getElementById("forecastCont");
// const forecast = document.getElementById("forecast");

let myDate = new Date();

const adeBrisTime = () => {
  return myDate.toLocaleString(`en-AU`, {
    timeZone: "Australia/Brisbane",
  });
};

const geeHobMelSydTime = () => {
  return myDate.toLocaleString(`en-AU`, {
    timeZone: "Australia/Sydney",
  });
};

const perthTime = () => {
  return myDate.toLocaleString(`en-AU`, {
    timeZone: "Australia/Perth",
  });
};

const pullTime = (city) => {
  switch (city) {
    case "Adelaide":
      return adeBrisTime(myDate);
    case "Woolloongabba":
      return adeBrisTime(myDate);
    case "Geelong":
      return geeHobMelSydTime(myDate);
    case "Shikotan":
      return geeHobMelSydTime(myDate);
    case "East Melbourne":
      return geeHobMelSydTime(myDate);
    case "Surry Hills":
      return geeHobMelSydTime(myDate);
    case "Burswood":
      return perthTime(myDate);

    default:
      break;
  }
};



const putWeather1 = (weather) => {
  forecastCont.innerHTML = "";
  myDate = new Date();

  const firstLetterCapital = weather.weather[0].description;
  const firstLetterCapital2 =
    firstLetterCapital.charAt(0).toUpperCase() + firstLetterCapital.slice(1);

  let html = `  <style> #weather {visibility: visible;} </style>
                  <h1> Weather in ${weather.name} </h1>
                  <h2> Date and Time: ${pullTime(weather.name)}</h2>
                  <h2> Temperature: ${Math.round(
                    weather.main.temp - KELVIN_TO_CELSIUS
                  )}°</h2>
                  <h2><img src="http://openweathermap.org/img/wn/${
                    weather.weather[0].icon
                  }@2x.png"></h2>
                  <h2> Desciption: ${firstLetterCapital2}</h2>
                  <h2> Humidity: ${weather.main.humidity}%</h2> 
                  <button id="getForecastBtn"> Get the forecast</button>`;

  weatherCont.innerHTML = html;

  const forecastBtn = document.getElementById("getForecastBtn");

  forecastBtn.addEventListener("click", () => {
    forecastCont.scrollIntoView();
    axiosGetForecast(weather.coord.lon, weather.coord.lat);
  });
};

const axiosGetCricketGroundWthr = async (longitude, latitude) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`
  );
  putWeather1(data);
};

const pullForecast = (city, date) => {
  const unixTimestamp = date;
  const localDateTime = new Date(unixTimestamp * SECONDS_TO_MILLISECONDS);
  switch (city) {
    case "Adelaide":
      return localDateTime.toLocaleString("en-AU", {
        timeZone: "Australia/Brisbane",
      });
    case "Woolloongabba":
      return localDateTime.toLocaleString("en-AU", {
        timeZone: "Australia/Brisbane",
      });
    case "Geelong":
      return localDateTime.toLocaleString("en-AU", {
        timeZone: "Australia/Sydney",
      });
    case "Shikotan":
      return localDateTime.toLocaleString("en-AU", {
        timeZone: "Australia/Sydney",
      });
    case "East Melbourne":
      return localDateTime.toLocaleString("en-AU", {
        timeZone: "Australia/Sydney",
      });
    case "Surry Hills":
      return localDateTime.toLocaleString("en-AU", {
        timeZone: "Australia/Sydney",
      });
    case "Burswood":
      return localDateTime.toLocaleString("en-AU", {
        timeZone: "Australia/Perth",
      });

    default:
      break;
  }
};

const putForecast1 = (weather) => {
  const list = weather.list.map((forecast) => {
    const firstLetterCapital = forecast.weather[0].description;
    const firstLetterCapital2 =
      firstLetterCapital.charAt(0).toUpperCase() + firstLetterCapital.slice(1);
    return `<div class="forecast"> <p class="date">Date and Time: ${pullForecast(
      weather.city.name,
      forecast.dt
    )} </p>
                <p>Temperature: ${Math.round(forecast.main.temp - KELVIN_TO_CELSIUS)}°</p>
                <p><img src="http://openweathermap.org/img/wn/${
                  forecast.weather[0].icon
                }@2x.png"></p>
                <p>Desciption: ${firstLetterCapital2}</p>
                <p>Humidity: ${forecast.main.humidity}%</p></div>
                `;
  });

  forecastCont.innerHTML = list.join("");
};

const axiosGetForecast = async (longitude, latitude) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`
  );

  putForecast1(data);
};

adelaideBtn.addEventListener("click", () => {
  axiosGetCricketGroundWthr(adelaide.long, adelaide.lat);
});

brisbaneBtn.addEventListener("click", () => {
  axiosGetCricketGroundWthr(brisbane.long, brisbane.lat);
});

geelongBtn.addEventListener("click", () => {
  axiosGetCricketGroundWthr(geelong.long, geelong.lat);
});

hobartBtn.addEventListener("click", () => {
  axiosGetCricketGroundWthr(hobart.long, hobart.lat);
});

melbourneBtn.addEventListener("click", () => {
  axiosGetCricketGroundWthr(melbourne.long, melbourne.lat);
});

sydneyBtn.addEventListener("click", () => {
  axiosGetCricketGroundWthr(sydney.long, sydney.lat);
});

perthBtn.addEventListener("click", () => {
  axiosGetCricketGroundWthr(perth.long, perth.lat);
});
