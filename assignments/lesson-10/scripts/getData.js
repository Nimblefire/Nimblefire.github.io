function getRequest() {
    var requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=ef215a532f3986dca09865df45262239';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var weatherjson = request.response;
        var currently = document.querySelector('#value1');
        var high = document.querySelector('#value2');
        var windchill = document.querySelector('#value3');
        var humidity = document.querySelector('#value4');
        var windspeed = document.querySelector('#value5');
        var temperatureF = Math.round((weatherjson.main.temp_max-273.15)*9/5 + 32);
        currently.textContent = weatherjson.weather[0].main;
        high.textContent = temperatureF;
        humidity.textContent = weatherjson.main.humidity;
        windspeed.textContent = weatherjson.wind.speed;
        windchill.textContent = Math.round(35.74 + 0.6215*temperatureF - 35.75*Math.pow(weatherjson.wind.speed, 0.16) + 0.4275*temperatureF*Math.pow(weatherjson.wind.speed, 0.16));
    }
}

function daysTemperatures() {
    var requestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ef215a532f3986dca09865df45262239';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var forecastjson = request.response;
        populateForecast(forecastjson);
    }
}

function populateForecast(jsonObj){
    var wrapper = document.querySelector('.wrapper');
    var forecast_wrapper = document.querySelector('.forecast-wrapper');

    for (var i=0; i < jsonObj.list.length; i++) {
        if (jsonObj.list[i].dt_txt.includes('18:00:00')){
            var imgDiv = document.createElement('div');
            var img = document.createElement('img');

            img.src = 'https://openweathermap.org/img/w/' + jsonObj.list[i].weather[0].icon + '.png';
            img.alt = jsonObj.list[i].weather[0].main;
            imgDiv.classList.add('forecast-image', 'img'+i);

            imgDiv.appendChild(img);
            forecast_wrapper.appendChild(imgDiv);
        }
    }

    for (var i=0; i < jsonObj.list.length; i++) {
        if (jsonObj.list[i].dt_txt.includes('18:00:00')){
            var temperature = document.createElement('div');

            temperature.textContent = Math.round((jsonObj.list[i].main.temp - 273.15)*9/5 + 32) + '°F';
            temperature.classList.add('temp', 'temperature'+i)

            forecast_wrapper.appendChild(temperature);
        }
    }
}