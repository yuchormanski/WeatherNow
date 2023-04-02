import { html } from '../../node_modules/lit-html/lit-html.js';
import { createSubmitHandler } from '../util.js';
// const baseURL = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Sofia%20Bulgaria';


const homeTemplate = (data, onSearch) => html`

        <section class="main-section">

            <div class="searchField">
                <form @submit=${onSearch}>
                    <input class="search-input" type="search" name="search" placeholder="Search for city"/>
                    <button>Search</button>
                </form>
            </div>


            <div class="main-weather">
                <div class="weatherBlock">
                    <div class="infoBlock temp">
                        <span class="current-temp">${data.current.temp_c}</span><span class="temp-sign">&deg;C</span>
                    </div>
                    <div class="infoBlock image-detail">
                        <!-- <img src=${data.current.condition.icon}/> -->
                        <img src=${data.icon}/>
                        <p class="condition infoText">${data.current.condition.text}</p>  
                    </div>
                </div>
                <div class="location-info">
                    <span><em class="small-text">Location: </em>${data.location.name}</span>
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


            <div class="forecastBlock">
                <div class="forecast"></div>
                <div class="forecast"></div>
                <div class="forecast"></div>

            </div>
        </section>
`;
const city = 'Sofia';
const baseURL = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}%20Bulgaria`;

export async function homePage(ctx, city) {


    const response = await fetch(baseURL, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5d5f7a03a5msh54b752933b8e6d0p1f90cbjsn9618af378be3',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    })
    const data = await response.json();
    const icon = data.current.condition.icon;
    if (icon.includes('64x64')) {
        let newIcon = icon.replace('64x64', '128x128');
        data.icon = newIcon;
    }
    console.log(data);
    ctx.render(homeTemplate(data, createSubmitHandler(onSearch)));

    async function onSearch(result){
        console.log(result);
        
        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${result.search}%20Bulgaria`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5d5f7a03a5msh54b752933b8e6d0p1f90cbjsn9618af378be3',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        })
        const data = await response.json();
        const icon = data.current.condition.icon;
        if (icon.includes('64x64')) {
            let newIcon = icon.replace('64x64', '128x128');
            data.icon = newIcon;
        }
        console.log(data);
        ctx.render(homeTemplate(data, createSubmitHandler(onSearch)));
    }
}