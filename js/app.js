import page from '../node_modules/page/page.mjs';
import { render } from '../../node_modules/lit-html/lit-html.js';
import { headerTemplate } from './views/header.js';
import { homePage } from './views/home.js';

const body = document.getElementById('body');


page(middleware)
page('index.html', '/'); // system tool
page('/', homePage);

page.start();

function middleware(ctx, next) {
    ctx.render = renderView;
    next();
}

function renderView(content) {
    
    render(headerTemplate(content), body);
}