import { html, render } from '../node_modules/lit-html/lit-html.js'
import { createSubmitHandler } from '../js/util.js';
import { hourlyForecast } from './views/dailyForecast.js';
// import { hourlyTemplate } from './views/dailyForecast.js';
// import { details } from './details.js';


const city = 'Sofia'

export const body = document.getElementById('body');

const homeTemplate = (data, forecast, onSearch, formatter, hourlyForecast) => html`

        <header>
            <div class="headerDiv">
                <h2>WeatherNow</h2>
            </div>
        </header>
        <main >
            <section class="main-section">

                <div class="searchField">
                    <form name="searchForm" id="searchForm" @submit=${onSearch}>
                        <input id="searchInput" class="search-input" type="search" name="search" placeholder="Search for city"/>
                        <button>Search</button>
                    </form>
                </div>


                <div class="main-weather">
                    <div class="weatherBlock">
                        <div class="infoBlock temp">
                            <span class="current-temp">${data.current.temp_c}</span><span class="temp-sign">&deg;C</span>
                        </div>
                        <div class="infoBlock image-detail">
                            <p class="imageP" ><img src=${data.current.condition.icon} class="order"/></p>
                            <!-- <img src=${data.icon}/> -->
                            <p class="condition conditionText order">${data.current.condition.text}</p>  
                        </div>
                    </div>
                    <div class="location-info">
                        <span class="location-name"><em class="small-text">Location: </em>${data.location.name}</span>
                    <div>
                <div>

                <div class="detailsBlock">
                    <table class="table">
                        <tr>
                            <td><em class="small-text">Feels like: </em>${data.current.feelslike_c}</td>
                            <td><em class="small-text">Wind speed: </em>${data.current.wind_kph}<span class="infoText"> km/h</span></td>
                        </tr>
                        <tr>
                            <td><em class="small-text">Humidity: </em>${data.current.humidity}</td>
                            <td><em class="small-text">Pressure: </em>${data.current.pressure_mb}<span class="infoText"> mb</span></td>
                        </tr>
                        <tr>
                            <td><em class="small-text">UV Index: </em>${data.current.uv}</td>
                            <td><em class="small-text">Visibility: </em>${data.current.vis_km}<span class="infoText"> km</span></td>
                        </tr>
                        <tr>

                            <td><em class="small-text">Precipitation: </em>${data.current.precip_mm}<span class="infoText"> mm</span></td>
                            <td><em class="small-text">Wind gust: </em>${data.current.gust_kph}<span class="infoText"> km/h</span></td>
                        </tr>
                        <tr>

                            <td><em class="small-text">Latitude: </em>${data.location.lat}</td>
                            <td><em class="small-text">Longitude: </em>${data.location.lon}</td>
                        </tr>
                        <tr>
                            <td><em class="small-text">Region: </em>${data.location.region}</td>
                            <td><em class="small-text">Time zone: </em>${data.location.tz_id}</td>
                        </tr>
                    </table>
                </div>


                <h6 class="forecastHeader">--  Hourly Forecast  --</h6>
                <div class="forecastBlock">
                    <div class="forecast">
                        <!-- <a href="javascript:void(0)" @click=${() => alert('Will be done in next app versions!')}> -->
                        <p class="forecast-label" @click=${() => hourlyForecast(forecast.forecast.forecastday[0], data.location.name)}>
                            <img src=${forecast.forecast.forecastday[0].day.condition.icon} alt="condition image"/>
                            <span class="forecast-date">Today</span class="forecast-label">
                        </p>
                    </div>
                    <div class="forecast">
                        <!-- <a href="javascript:void(0)" @click=${() => alert('Will be done in next app versions!')}> -->
                        <p class="forecast-label" @click=${() => hourlyForecast(forecast.forecast.forecastday[1], data.location.name)}>
                            <img src=${forecast.forecast.forecastday[1].day.condition.icon} alt="condition image"/>
                            <span class="forecast-date">${formatter(forecast.forecast.forecastday[1].date)}</span class="forecast-label">
                        </p>
                    </div>
                    <div class="forecast">
                        <!-- <a href="javascript:void(0)" @click=${() => alert('Will be done in next app versions!')}> -->
                        <p class="forecast-label" @click=${() => hourlyForecast(forecast.forecast.forecastday[2], data.location.name)}>
                            <img src=${forecast.forecast.forecastday[2].day.condition.icon} alt="condition image"/>
                            <span class="forecast-date">${formatter(forecast.forecast.forecastday[2].date)}</span class="forecast-label">
                        </p>
                    </div>

                </div>

            </section>
            <div id="toSofia" class="toSofia">
                <button @click=${() => homePage('Sofia')}>Return to Sofia</button>
            </div>
        </main>
`;

homePage(city)
export async function homePage(city) {
    const baseURL = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}%20Bulgaria`;

    const response = await fetch(baseURL, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5d5f7a03a5msh54b752933b8e6d0p1f90cbjsn9618af378be3',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    })
    const data = await response.json();

    const forecastResponse = await fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=Sofia&days=3', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0b1bd47e78msh9150619d0919e26p16e710jsn870f6abef60a',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    })

    const forecast = await forecastResponse.json();
    // console.log(forecast);

    render(homeTemplate(data, forecast, createSubmitHandler(onSearch), formatter, hourlyForecast), body);
    
    function formatter(date) {
        const [year, month, day] = date.split('-');
        return `${day}.${month}`;
    }

    const btnSofia = document.getElementById('toSofia');


    if (city === 'Sofia') {
        btnSofia.style.display = 'none';
    } else {
        btnSofia.style.display = '';

    }

    async function onSearch(city, form) {
        homePage(city)
        form.reset();
    }

    // async function hourlyForecast(dayData, location){
    //     console.log(dayData);
    //     render(hourlyTemplate(dayData, location, details), body);

    // }
}

