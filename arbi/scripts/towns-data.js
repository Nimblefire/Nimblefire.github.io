function getRequest() {
    var requestURL = 'https://Nimblefire.github.io/arbi/json/towns-data.json';
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
    var section = document.querySelector('.city-wrapper');
    for (var i=0;i<towns.length;i++){
        var containerDiv = document.createElement('div');
        var div = document.createElement('div');
        var cityName = document.createElement('h3');
        var cityMotto = document.createElement('p');
        var yearP = document.createElement('p');
        var populationP = document.createElement('p');
        var rainFall = document.createElement('p');
        var townFigure = document.createElement('figure');
        var townImg = document.createElement('img');

        cityName.classList.add('city-name');
        cityMotto.classList.add('city-motto');
        townFigure.classList.add('townFigure', 'townImg' + i);
        div.classList.add('town', 'box' + i);
        containerDiv.classList.add('container', 'box' + i);

        cityName.textContent = towns[i].name;
        cityMotto.textContent = (document.createElement('strong').textContent = 'Main Feature: ') + towns[i].mainFeature;
        yearP.textContent = (document.createElement('strong').textContent = 'Notable People: ') + towns[i].famousPeople;
        populationP.textContent = (document.createElement('strong').textContent = 'Population: ') + towns[i].currentPopulation;
        rainFall.textContent = (document.createElement('strong').textContent = 'Annual Rain Fall: ') + towns[i].averageRainfall + " mm";
        townImg.src = 'image/' + towns[i].name.toLowerCase().trim() + '.png';

        townFigure.appendChild(townImg);
        div.appendChild(cityName);
        div.appendChild(cityMotto);
        div.appendChild(yearP);
        div.appendChild(populationP);
        div.appendChild(rainFall);
        div.appendChild(townFigure);

        containerDiv.appendChild(div);
        section.appendChild(containerDiv);
    }  
}