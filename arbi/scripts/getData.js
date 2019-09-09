function getRequest(city) {
    var id;
    switch (city.trim().toLowerCase()) {
        case 'lecco':
            id = 6541997;
            break;
        case 'como':
            id = 6542055;
            break;
        case 'varenna':
            id = 3164701;
            break;
        case 'bellagio':
            id = 3182230;
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
        var temperature = Math.round(weatherjson.main.temp_max-273.15);
        currently.textContent = weatherjson.weather[0].main;
        high.textContent = temperature;
        humidity.textContent = weatherjson.main.humidity;
        windspeed.textContent = weatherjson.wind.speed;
        windchill.textContent = Math.round(35.74 + 0.6215*temperature - 35.75*Math.pow(weatherjson.wind.speed, 0.16) + 0.4275*temperature*Math.pow(weatherjson.wind.speed, 0.16));
    }
}

function daysTemperatures(city) {
    var id;
    switch (city.trim().toLowerCase()) {
        case 'lecco':
            id = 6541997;
            break;
        case 'como':
            id = 6542055;
            break;
        case 'varenna':
            id = 3164701;
            break;
        case 'bellagio':
            id = 3182230;
            break;
        default:
            document.write('Error in the code, please contact maintenance')
    }
    var requestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=' + id + '&appid=ef215a532f3986dca09865df45262239';
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
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    for (var i=0; i < jsonObj.list.length; i++) {
        if (jsonObj.list[i].dt_txt.includes('18:00:00')){
            var dayDiv = document.createElement('div');
            var date = new Date(jsonObj.list[i].dt_txt);
            var currentWeekday = weekday[date.getDay()];

            var imgDiv = document.createElement('div');
            var img = document.createElement('img');

            dayDiv.textContent = currentWeekday;
            dayDiv.classList.add('days', 'day' + i);

            img.src = 'https://openweathermap.org/img/w/' + jsonObj.list[i].weather[0].icon + '.png';
            img.alt = jsonObj.list[i].weather[0].main;
            imgDiv.classList.add('forecast-image', 'img'+i);

            imgDiv.appendChild(img);
            forecast_wrapper.appendChild(imgDiv);
            wrapper.appendChild(dayDiv);
        }
    }

    for (var i=0; i < jsonObj.list.length; i++) {
        if (jsonObj.list[i].dt_txt.includes('18:00:00')){
            var temperature = document.createElement('div');

            temperature.textContent = Math.round((jsonObj.list[i].main.temp - 273.15)) + '°C';
            temperature.classList.add('temp', 'temperature'+i)

            forecast_wrapper.appendChild(temperature);
        }
    }
}

function getEvents(city){
    var requestURL = 'https://Nimblefire.github.io/arbi/json/towns-data.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var towns = request.response;
        populateArticle(towns, city); 
    }
}

function populateArticle(jsonObj, city) {
    var town;
    for (var i=0; i < jsonObj.towns.length; i++) {
        if (jsonObj.towns[i].name.trim().toLowerCase() == city.trim().toLowerCase()){
            town = jsonObj.towns[i];
        }
    }
    var articleDiv = document.querySelector('.article-div');
    var article = document.createElement('article');
    var title = document.createElement('h3');

    title.textContent = town.name + ' Activities';
    article.appendChild(title);

    for (var i=0; i < town.events.length; i++) {
        var p = document.createElement('p');
        p.textContent = town.events[i];
        article.appendChild(p);
    }

    articleDiv.appendChild(article);
}