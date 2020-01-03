
const search = $('input');

const date = $('#date');
const place = $('#place');

const icon = $('#icon');


const temperature = $('#temp');
const summary = $('#summary');
const temperatureHighLow = $('#tempHL');
const windSpeed = $('#windSpeed');
const humidity = $('#humidity');
const visibility = $('#visibility');


$('form').on('submit', (e) => {
    e.preventDefault();


    console.log($('input').val());

    console.log('testing');

    const location =$('input').val();

    date.text('...');
    place.text('');
    icon.hide();
    temperature.text('');
    summary.text("Loading....");
    temperatureHighLow.text("...");
    windSpeed.text("...");
    humidity.text("...");
    visibility.text("...");



    fetch("/weather?address=" + encodeURIComponent(location)).then((response) => {
        response.json().then((data) => {
            if (data.error) {

                summary.text(data.error);


            } else {
                icons.set("icon", data.foreCast.icon);

                const options = {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                };
                date.text(new Date().toLocaleString("en-GB", options, {
                    timeZone: data.foreCast.timezone
                }));

                place.text(data.location);

                icon.show();

                temperature.text(data.foreCast.temperature + "°C");


                summary.text(data.foreCast.summary);

                temperatureHighLow.text(data.foreCast.addInfo.temperatureHigh + "°C" + " /" + data.foreCast.addInfo.temperatureLow + "°C");

                windSpeed.text(data.foreCast.addInfo.windSpeed + " km/h");

                humidity.text(data.foreCast.addInfo.humidity + "%");

                visibility.text(data.foreCast.addInfo.visibility + "m");

            }
        })
    })

})