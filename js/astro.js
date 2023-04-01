export async function getAstroForecast() {



/* 

Latitude and Longitude (Decimal degree) e.g: city=48.8567,2.3508
city name e.g.: city=Paris
US zip e.g.: city=10001
UK postcode e.g: city=SW1
Canada postal code e.g: city=G2J
metar: e.g: city=metar:EGLL
iata:<3 digit airport code> e.g: city=iata:DXB
auto:ip IP lookup e.g: city=auto:ip
IP address (IPv4 and IPv6 supported) e.g: city=100.0.0.1
*/



    const city = 'Sofia';
    const url = `https://weatherapi-com.p.rapidapi.com/astronomy.json?q=${city}`

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0b1bd47e78msh9150619d0919e26p16e710jsn870f6abef60a',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}