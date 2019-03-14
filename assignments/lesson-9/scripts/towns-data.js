function getRequest() {
    var requestURL = 'https://Nimblefire.github.io/assignments/lesson-9/json/towns-data.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var towns = request.response;
        populateBox(towns); 
    }
}

function populateBox(jsonObj){
    var towns = jsonObj.towns;
    for (var i=0;i<towns.length;i++){
        var div = document.createElement('div');
        var cityName = document.createElement('h3');
        var cityMotto = document.createElement('p');
        var yearP = document.createElement('p');
        var populationP = document.createElement('p');
        var rainFall = document.createElement('p');

        cityName.textContent = towns[i].name;
        cityName.classList.add('city-name');
        cityMotto.textContent = towns[i].motto;
        cityMotto.classList.add('city-motto');
        yearP.textContent = 'Year Founded: ' + towns[i].yearFounded;
        populationP.textContent = 'Population: ' + towns[i].currentPopulation;
        rainFall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall + '"';

        div.appendChild(cityName);
        div.appendChild(cityMotto);
        div.appendChild(yearP);
        div.appendChild(populationP);
        div.appendChild(rainFall);
        div.classList.add('town', 'box' + i);

        section.appendChild(div);  
    }
}