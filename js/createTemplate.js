import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getForecast } from './forecast.js';
import { getAstroForecast } from './astro.js';
import { getTimeZone } from './timeZone.js';


export function elements(data) {
    const main = document.getElementById('main');
    const basicInfo = Object.values(data)[0];
    const weatherInfo = Object.values(data)[1];
    // console.log(data);

    const weather = (forecast) => html`


    <div class="city-name">
        <h1>${basicInfo.name}</h1>
    </div>
    <div class="city-name-low">
        <h3 class="left">${basicInfo.country}</h3>
        <h3 class="right">${basicInfo.region}</h3>
    </div>
    
    
    <div class="locationInfo">
        <div class="condition-img">
            <img src="${weatherInfo.condition.icon}" alt="${weatherInfo.condition.text}" />
        </div>
        <div><span class="city-condition"><em class="em-class">Condition: </em>${weatherInfo.condition.text}</span></div>
    
        <div class="basic left">
            <p class="p-label">Current Temp:</p>
            <p class="p-status">${weatherInfo.temp_c} &#176;C</p>
        </div>
        <div class="basic right">
            <p class="p-label">Feels Like:</p>
            <p class="p-status">${weatherInfo.feelslike_c} &#176;C</p>
        </div>
    
        <div class="basic left">
            <p class="p-label">Humidity:</p>
            <p class="p-status">${weatherInfo.humidity}</p>
        </div>

        <div class="basic right">
            <p class="p-label">Precip:</p>
            <p class="p-status">${weatherInfo.precip_mm} mm</p>
        </div>
    
        <div class="basic left">
            <p class="p-label">Wind speed:</p>
            <p class="p-status">${weatherInfo.wind_kph} km/h</p>
        </div>

        <div class="basic right">
            <p class="p-label">Presure:</p>
            <p class="p-status">${weatherInfo.pressure_mb} mb</p>
        </div>

    
        <div class="basic left">
            <p class="p-label">UV Index:</p>
            <p class="p-status">${weatherInfo.uv}</p>
        </div>

        <div class="basic right">
            <p class="p-label">Last updated:</p>
            <p class="p-status">${weatherInfo.last_updated}</p>
        </div>
    
    </div>
    
    <div class="lastInfo">
        <div class="basic">Time:<span class="additional-info"> ${basicInfo.localtime}</span></div>
        <div class="basic">Time zone: <span class="additional-info">${basicInfo.tz_id}</span></div>
        <div class="basic">Latitude: <span class="additional-info">${basicInfo.lat}</span></div>
        <div class="basic">Longitude: <span class="additional-info">${basicInfo.lon}</span></div>
    </div>


`
const forecast = getForecast();
const astro = getAstroForecast();
const timeZone = getTimeZone();


    render(weather(forecast, astro), main)
}

// {
//     "location": {
//         "name": "Sofia",
//         "region": "Grad Sofiya",
//         "country": "Bulgaria",
//         "lat": 42.68,
//         "lon": 23.32,
//         "tz_id": "Europe/Sofia",
//         "localtime_epoch": 1678560358,
//         "localtime": "2023-03-11 20:45"
//     },
//     "current": {
//         "last_updated_epoch": 1678559400,
//         "last_updated": "2023-03-11 20:30",
//         "temp_c": 5,
//         "temp_f": 41,
//         "is_day": 0,
//         "condition": {
//             "text": "Light rain",
//             "icon": "//cdn.weatherapi.com/weather/64x64/night/296.png",
//             "code": 1183
//         },
//         "wind_mph": 18.6,
//         "wind_kph": 29.9,
//         "wind_degree": 270,
//         "wind_dir": "W",
//         "pressure_mb": 1003,
//         "pressure_in": 29.62,
//         "precip_mm": 0.9,
//         "precip_in": 0.04,
//         "humidity": 81,
//         "cloud": 100,
//         "feelslike_c": 1.5,
//         "feelslike_f": 34.6,
//         "vis_km": 10,
//         "vis_miles": 6,
//         "uv": 1,
//         "gust_mph": 13,
//         "gust_kph": 20.9
//     }
// }