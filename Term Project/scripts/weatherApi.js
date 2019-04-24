function getRequest(city) {
    var id;
    switch (city.trim().toLowerCase()) {
        case 'preston':
            id = 5604473;
            break;
        case 'fish haven':
            id = 5585010;
            break;
        case 'soda springs':
            id = 5607916;
            break;
        default:
            document.write('Error in the code, please contact maintenance')
    }
    var requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=' + id + '&appid=ef215a532f3986dca09865df45262239';
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