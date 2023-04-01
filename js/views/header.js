import { html } from '../../node_modules/lit-html/lit-html.js';

export const headerTemplate = (content) => html`
    <header>
        <div class="headerDiv">
            <h2>WeatherNow</h2>
        </div>
    </header>
    <main >
        ${content}
    </main>

    <footer>
        <p>footer</p>
    </footer>
`;
