function getRequest() {
    var requestURL = 'https://Nimblefire.github.io/Term%20Project/json/temples-info.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var temples = request.response;
        populateBox(temples); 
    }
}

function populateBox(jsonObj){
    var temple = jsonObj.temples;
    var section = document.querySelector('.flex-container');
    for (var i=0;i<temple.length;i++){
        var containerDiv = document.createElement('div');
        var div = document.createElement('div');
        var templeName = document.createElement('h3');
        var yearAnnounced = document.createElement('p');
        var yearGround = document.createElement('p');
        var yearDedicated = document.createElement('p');
        var templeAddress = document.createElement('p');
        var templePhone = document.createElement('p');
        var daysClosedP = document.createElement('p');
        var daysClosed = document.createElement('ul');
        for (var j=0; j<temple[i].templeClosed.length;j++){
            var listElement = document.createElement('li');
            listElement.textContent = temple[i].templeClosed[j];
            daysClosed.appendChild(listElement);
        }
        var templeFigure = document.createElement('figure');
        var templeImg = document.createElement('img');

        templeName.classList.add('temple-name');
        templeFigure.classList.add('templeFigure', 'templeImg' + i);
        div.classList.add('temple', 'box' + i);
        containerDiv.classList.add('container', 'box' + i);

        templeName.textContent = temple[i].name;
        yearAnnounced.textContent = (document.createElement('strong').textContent = 'Year Announced: ') + temple[i].yearAnnounced;
        yearGround.textContent = (document.createElement('strong').textContent = 'Year Groundbraking: ') + temple[i].yearGroundbraking;
        yearDedicated.textContent = (document.createElement('strong').textContent = 'Year Dedicated: ') + temple[i].yearDedicated;
        templeAddress.textContent = (document.createElement('strong').textContent = 'Address: ') + temple[i].address;
        templePhone.textContent = (document.createElement('strong').textContent = 'Phone: ') + temple[i].phone;
        daysClosedP.textContent = 'Closure Days:'
        daysClosedP.appendChild(daysClosed);
        templeImg.src = 'images/temples/' + temple[i].name.trim() + '.jpg';

        templeFigure.appendChild(templeImg);
        div.appendChild(templeFigure);
        div.appendChild(templeName);
        div.appendChild(yearAnnounced);
        div.appendChild(yearGround);
        div.appendChild(yearDedicated);
        div.appendChild(templeAddress);
        div.appendChild(templePhone);
        div.appendChild(daysClosedP);

        containerDiv.appendChild(div);
        section.appendChild(containerDiv);
    }  
}