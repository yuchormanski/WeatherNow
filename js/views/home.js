import { html } from '../../node_modules/lit-html/lit-html.js';
const city = 'Sofia';
// const baseURL = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Sofia%20Bulgaria';
const baseURL = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}%20Bulgaria`;

const homeTemplate = (data) => html`

<section class="main-section">
            <div class="apiDiv">
                <button>Get weather for Sofia</button>
                <p>or</p>

                <form>
                    <label for="search">Search city: <input type="search" /></label>
                    <button>Get weather</button>
                </form>
            </div>

            <div class="weatherBlock">
                <img src=${data.current.condition.icon}/>
            </div>
            <div class="detailsBlock">

            </div>
            <div class="forecastBlock">
                <div class="forecast"></div>
                <div class="forecast"></div>
                <div class="forecast"></div>

            </div>
        </section>




`;

export async function homePage(ctx) {


    const response = await fetch(baseURL, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5d5f7a03a5msh54b752933b8e6d0p1f90cbjsn9618af378be3',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    })
    const data = await response.json();
    const icon = `https:${data.current.condition.icon}`
    console.log(data);
    ctx.render(homeTemplate(data))
}