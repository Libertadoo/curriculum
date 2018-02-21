'use strict'

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}




// function for slideshow on Home page, code can be used for all
var myIndex = 0;
            carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 2 seconds
}


fetch("json.json").then(result => result.json()).then(data => show(data));

function show(skills){
	//coreAreas.forEach(coreAreas=>console.log("smth"));
	console.log(coreAreas);
}


