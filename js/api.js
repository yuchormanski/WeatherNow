

import { elements } from "./createTemplate.js";

const baseURL = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Sofia%20Bulgaria';


export async function getWeather() {

    const response = await fetch(baseURL, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5d5f7a03a5msh54b752933b8e6d0p1f90cbjsn9618af378be3',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    })
    const data = await response.json();
    elements(data)
}