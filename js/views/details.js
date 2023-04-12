import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { body } from '../script.js';
import { homePage } from '../script.js';

const detailTemplate = (data, location) => html`
            <header>
                <div class="headerDiv">
                    <h2>WeatherNow</h2>
                </div>
            </header>
            <main style="margin: 40px auto 0">
                <section class="main-section">
                <div class="main-weather">
                    <div class="weatherBlock">
                        <div class="infoBlock temp">
                            <span class="current-temp">${data.temp_c}</span><span class="temp-sign">&deg;C</span>
                        </div>
                        <div class="infoBlock image-detail">
                            <p class="imageP" ><img src=${data.condition.icon} class="order"/></p>
                            <p class="condition conditionText order">${data.condition.text}</p>  
                        </div>
                    </div>
                    <div class="location-info">
                        <span class="location-name"><em class="small-text">Location: </em>${location}</span>
                    <div>
                <div>

                <div class="detailsBlock">
                    <table class="table">
                        <tr>
                            <td><em class="small-text">Feels like: </em>${data.feelslike_c}<span class="infoText"> C</span></td>
                            <td><em class="small-text">Wind speed: </em>${data.wind_kph}<span class="infoText"> km/h</span></td>
                        </tr>
                        <tr>
                            <td><em class="small-text">Clouds: </em>${data.cloud}<span class="infoText"></span></td>
                            <td><em class="small-text">Dewpoint: </em>${data.dewpoint_c}<span class="infoText"></span></td>
                        </tr>
                        <tr>
                            <td><em class="small-text">Gust: </em>${data.gust_kph}<span class="infoText"> km/h</span></td>
                            <td><em class="small-text">Heat index: </em>${data.heatindex_c}<span class="infoText"> C</span></td>
                        </tr>
                        <tr>
                            <td><em class="small-text">Humidity: </em>${data.humidity}</td>
                            <td><em class="small-text">Precip: </em>${data.precip_mm}<span class="infoText"> mm</span></td>
                        </tr>
                        <tr>
                            <td><em class="small-text">Pressure: </em>${data.pressure_mb}<span class="infoText"> mb</span></td>
                            <td><em class="small-text">UV index: </em>${data.uv}<span class="infoText"></span></td>
                        </tr>
                        <tr>
                            <td><em class="small-text">View: </em>${data.vis_km}<span class="infoText"> km</span></td>
                            <td><em class="small-text">Wind degree: </em>${data.wind_degree}<span class="infoText"></span></td>
                        </tr>
                        <tr>
                            <td><em class="small-text">Rain ? </em>${data.will_it_rain}<span class="infoText"></span></td>
                            <td><em class="small-text">Snow ? </em>${data.will_it_snow}<span class="infoText"></span></td>
                        </tr>
                        <!-- <tr>
                            <td><em class="small-text">Wind direction: </em>${data.wind_dir}</td>
                            <td><em class="small-text">Wind speed: </em>${data.wind_kph}<span class="infoText"> km/h</span></td>
                        </tr> -->
                        <tr>
                            <td><em class="small-text">Wind temp: </em>${data.windchill_c}<span class="infoText"></span></td>
                            <td><em class="small-text">Day/Night </em>${data.is_day === 0 ? html`Night` : html`Day`}<span class="infoText"></span></td>
                        </tr>

                    </table>
                    <img src="../../../img/arrowSet/${data.wind_dir}.png" alt="" />
                    <p>${data.wind_kph}<span class="infoText"> km/h</span></p>
                </div>
                </section>
            </main>




            <div id="toSofia" class="toSofia">
                <button @click=${() => homePage(location)}>Return</button>
            </div>
`;

export function details(thisHour, location) {
    console.log(thisHour, location);
    render(detailTemplate(thisHour, location), body)
}