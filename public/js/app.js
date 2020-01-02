console.log("Javascript from client Side");

fetch("https://puzzle.mead.io/puzzle").then((response) => {
    response.json().then((data) => {
        console.log(data);

    })

})

const weatherForm = document.querySelector('form');

const search = document.querySelector('input');

const date = document.querySelector('#date');
const place = document.querySelector('#place');
const icon = document.querySelector('#icon');

const iconTemp = document.querySelector('#iconTemp');
const temperature = document.querySelector('#temp');
const summary = document.querySelector('#summary');
const temperatureHighLow = document.querySelector('#tempHL');
const windSpeed = document.querySelector('#windSpeed');
const humidity = document.querySelector('#humidity');
const visibility = document.querySelector('#visibility');




weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(search.value);
    console.log('testing');

    const location = search.value;

    date.textContent = "...";
    place.textContent = "";
    temperature.textContent = "";
    summary.textContent = "Loading....";
    temperatureHighLow.textContent = "...";
    windSpeed.textContent = "...";
    humidity.textContent = "...";
    visibility.textContent = "...";



    fetch("/weather?address=" + encodeURIComponent(location)).then((response) => {
        response.json().then((data) => {
            if (data.error) {

                summary.textContent = data.error;
                icon.innerHTML = "";

            } else {
                console.log(data);

                date.textContent=Date();
                
                place.textContent=data.location;

                temperature.textContent = data.foreCast.temperature+"°C";


                summary.textContent = data.foreCast.summary;

                temperatureHighLow.textContent = data.foreCast.addInfo.temperatureHigh + "°C" + " /" + data.foreCast.addInfo.temperatureLow + "°C";

                windSpeed.textContent = data.foreCast.addInfo.windSpeed + " km/h";

                visibility.textContent = data.foreCast.addInfo.visibility + " m";

                humidity.textContent = data.foreCast.addInfo.humidity+"%";

            }
        })
    })

})