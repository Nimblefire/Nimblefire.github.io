
function printCurrentDate() {
    var n =  new Date();
    var y = n.getFullYear();
    var m = n.getMonth() + 1;
    var d = n.getDate();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var currentWeekday = weekday[d.getDay()];
    document.getElementById("date").innerHTML =currentWeekday + ", " + d + m + y;
}

function toggleMenu(){
    document.getElementById("navigationTab").classList.toggle("hide");
}