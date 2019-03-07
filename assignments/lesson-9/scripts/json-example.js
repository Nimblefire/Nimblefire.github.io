function getRequest() {
    var requestURL = 'https://https://nimblefire.github.io/Shardmind.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var races = request.response;
        populateHeader(races);
        showRace(races);
    }
}

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['displayname'];
    header.appendChild(myH1);
}

function showFeatures(jsonObj) {
    var abilityBonus = jsonObj['abilityscorebonuses'];
    var abilityBonusList = document.createElement('ul');
    for (var i = 0; i < abilityBonus.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = abilityBonus[i].name + abilityBonus[i].value;
        abilityBonusList.appendChild(listItem);
    }
    var speed = document.createElement('p');
    var languages = document.createElement('p');
    var features = document.createElement('p');

    speed.textContent = 'Speed: ' + jsonObj['speed'];
    var languageList = document.createElement('ul');
    for (var i = 0; i < jsonObj['language'].length; i++){
        var listItem = document.createElement('li');
        listItem.textContent = jsonObj['language'][i];
        languageList.appendChild(listItem);
    }

    var featuresList = document.createElement('ul');
    for (var i = 0; i < jsonObj['features'].length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = jsonObj['features'][i];
        featuresList.appendChild(listItem);
    }

    languages.appendChild(languageList);
    features.appendChild(featuresList);

    section.appendChild(abilityBonusList);
    section.appendChild(speed);    
    section.appendChild(languages);
    section.appendChild(features);
}