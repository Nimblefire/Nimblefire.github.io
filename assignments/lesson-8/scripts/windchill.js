function windchill(){
    var temperature = parseInt(document.getElementById("value2").innerText);
    var windspeed = parseInt(document.getElementById("value5").innerText);

    var windchill = 35.74 + 0.6215*temperature - 35.75*Math.pow(windspeed, 0.16) + 0.4275*temperature*Math.pow(windspeed, 0.16);

    document.getElementById("value3").innerHTML = Math.round(windchill) + "°F";
}