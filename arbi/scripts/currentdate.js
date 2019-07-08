function printCurrentDate() {
    var n =  new Date();
    var y = n.getFullYear();
    var d = n.getDate();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var monthName = new Array(12);
    monthName[0] = "January";
    monthName[1] = "February";
    monthName[2] = "March";
    monthName[3] = "April";
    monthName[4] = "May";
    monthName[5] = "June";
    monthName[6] = "July";
    monthName[7] = "August";
    monthName[8] = "September";
    monthName[9] = "October";
    monthName[10] = "November";
    monthName[11] = "December";

    var currentMonth = monthName[n.getMonth()+1];
    var currentWeekday = weekday[n.getDay()];
    document.getElementById("datetime").innerHTML =currentWeekday + ", " + d + " " + currentMonth + " " + y;
}

function toggleMenu(){
    document.getElementById("navigationTab").classList.toggle("hide");
}