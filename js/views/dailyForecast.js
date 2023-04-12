import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { homePage } from '../script.js';
import { details } from './details.js';


export const hourlyTemplate = (dayData, location, details) => html`
            <header>
                <div class="headerDiv">
                    <h2>WeatherNow</h2>
                </div>
            </header>
            <main style="margin: 40px auto 0">
                <section class="main-section">
                    <div class="main-weather">
                        <div>
                            <p class="warning">${dayData.day.condition.text}</p>
                        </div>
                        <div class="day-temps">
                            <div>
                                <em class="small-text">Min temp: </em>
                                <span>${dayData.day.mintemp_c}</span>
                            </div>
                            <div>
                                <em class="small-text">Max temp: </em>
                                <span>${dayData.day.maxtemp_c}</span>
                            </div>
                        </div>

                        <div class="hours">
                            ${dayData.hour.map(x => html`
                            <div class="hour" @click=${() => details(x, location)}>
                                <p class="">${x.temp_c} C</p>
                                <img src="${x.condition.icon}" />
                                <p class="condition">${x.condition.text}</p>
                                <p class="time" >${x.time.split(' ')[1]}
                            </div>
                            `)}
                        </div>
                        <table class="table">
                            <tbody>
                                <tr class="tr">
                                    <td class=""><em class="small-text">Rain expected: </em>${dayData.day.daily_chance_of_rain}<span class="infoText"> %</span></td>
                                    <td class=""><em class="small-text">Snow expected: </em>${dayData.day.daily_chance_of_snow}<span class="infoText"> %</span></td>
                                </tr>
                                <tr>
                                    <td><em class="small-text">Average temp: </em>${dayData.day.avgtemp_c}<span class="infoText"> C</span></td>
                                    <td><em class="small-text">Max wind: </em>${dayData.day.maxwind_kph}<span class="infoText"> km/h</span></td>
                                </tr>
                                <tr>
                                    <td><em class="small-text">Min temp: </em>${dayData.day.mintemp_c}<span class="infoText"> C</span></td>
                                    <td><em class="small-text">Max temp: </em>${dayData.day.maxtemp_c}<span class="infoText"> C</span></td>
                                </tr>
                                <tr>
                                    <td><em class="small-text">Avg humidity: </em>${dayData.day.avghumidity}</td>
                                    <td><em class="small-text">Precipitation: </em>${dayData.day.totalprecip_mm}<span class="infoText"> mm</span></td>
                                </tr>
                                <tr>
                                    <td><em class="small-text">Total snow: </em>${dayData.day.totalsnow_cm}<span class="infoText"> cm</span></td>
                                    <td><em class="small-text">Avg distance: </em>${dayData.day.avgvis_km}<span class="infoText"> km</span></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>




            <div id="toSofia" class="toSofia">
                <button @click=${() => homePage(location)}>Return</button>
            </div>
`;


export async function hourlyForecast(dayData, location){
    console.log(dayData);
    render(hourlyTemplate(dayData, location, details), body);
}