
function printCurrentDate() {
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleDateString();
}

function toggleMenu(){
    document.getElementById("navigationTab").classList.toggle("hide");
}