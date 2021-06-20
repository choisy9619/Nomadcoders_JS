const API_KEY = "99e45281dfce29d7f1644b4907484ab5";

function onGeoOk(position){
    const lat = position.coords.latitude ; 
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find you. No wether for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);



