function getRequest() {
    var requestURL = 'https://Nimblefire.github.io/Shardmind.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var races = request.response;
        populateHeader(races);
        showFeatures(races);
    }
}

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['displayname'];
    header.appendChild(myH1);
}

function showFeatures(jsonObj) {

    var abilityBonusP = document.createElement('p');
    var speedP = document.createElement('p');
    var languagesP = document.createElement('p');
    var featuresP = document.createElement('p');


    var abilityBonus = jsonObj['abilityscorebonuses'];
    var abilityBonusList = document.createElement('ul');
    for (var i = 0; i < abilityBonus.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = abilityBonus[i].name + ': ' + abilityBonus[i].value;
        abilityBonusList.appendChild(listItem);
    }
    
    speedP.textContent = 'Speed: ' + jsonObj['speed'];

    var languages = jsonObj['languages'];
    var languageList = document.createElement('ul');
    for (var i = 0; i < languages.length; i++){
        var listItem = document.createElement('li');
        listItem.textContent = languages[i];
        languageList.appendChild(listItem);
    }

    var features = jsonObj['features']
    var featuresList = document.createElement('ul');
    for (var i = 0; i < features.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = features[i];
        featuresList.appendChild(listItem);
    }

    abilityBonusP.textContent = "Ability Bonuses: "
    languagesP.textContent = "Languages: ";
    featuresP.textContent = "Features: ";
    abilityBonusP.appendChild(abilityBonusList);
    languagesP.appendChild(languageList);
    featuresP.appendChild(featuresList);

    section.appendChild(abilityBonusP);
    section.appendChild(speedP);    
    section.appendChild(languagesP);
    section.appendChild(featuresP);
}