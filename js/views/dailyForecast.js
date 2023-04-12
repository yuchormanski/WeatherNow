import { html } from '../../node_modules/lit-html/lit-html.js';
import { homePage } from '../script.js';


export const hourlyTemplate = (dayData, location) => html`
            <header>
                <div class="headerDiv">
                    <h2>WeatherNow</h2>
                </div>
            </header>
            <main style="margin: 40px auto 0">
                <section class="main-section">
                    <div class="main-weather">
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
                                <div class="hour">
                                    <img src="${x.condition.icon}" />
                                    <p class="condition">${x.condition.text}</p>
                                    <p class="time" >${x.time.split(' ')[1]}
                                </div>
                            `)}
                        </div>
                    </div>
                </section>
            </main>




            <div id="toSofia" class="toSofia">
                <button @click=${() => homePage(location)}>Return</button>
            </div>
`;