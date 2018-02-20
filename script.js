'use strict'

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

fetch("json.json").then(result => result.json()).then(data => show(data));

function show(skills){
	//coreAreas.forEach(coreAreas=>console.log("smth"));
	console.log(coreAreas);
}
