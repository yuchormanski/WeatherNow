export async function search(){
    const city = '';
    const url = `https://weatherapi-com.p.rapidapi.com/search.json?q=${city}`

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