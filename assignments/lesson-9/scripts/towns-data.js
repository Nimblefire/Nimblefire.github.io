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
        var containerDiv = document.createElement('div');
        var div = document.createElement('div');
        var cityName = document.createElement('h3');
        var cityMotto = document.createElement('p');
        var yearP = document.createElement('p');
        var populationP = document.createElement('p');
        var rainFall = document.createElement('p');
        var townImg = document.createElement('img');

        cityName.textContent = towns[i].name;
        cityName.classList.add('city-name');
        cityMotto.textContent = towns[i].motto;
        cityMotto.classList.add('city-motto');
        yearP.textContent = (document.createElement('strong').textContent = 'Year Founded: ') + towns[i].yearFounded;
        populationP.textContent = (document.createElement('strong').textContent = 'Population: ') + towns[i].currentPopulation;
        rainFall.textContent = (document.createElement('strong').textContent = 'Annual Rain Fall: ') + towns[i].averageRainfall + '"';
        townImg.src = 'image/' + towns[i].name.toLowerCase().trim() + '.jpg';

        div.appendChild(cityName);
        div.appendChild(cityMotto);
        div.appendChild(yearP);
        div.appendChild(populationP);
        div.appendChild(rainFall);
        div.appendChild(townImg);
        div.classList.add('town', 'box' + i);
        containerDiv.classList.add('container', 'box' + i);
        
        containerDiv.appendChild(div);
        section.appendChild(containerDiv);  
    }
}