

fetch("json.json").then(result => result.json()).then(data => show(data));

function show(skills){
	//coreAreas.forEach(coreAreas=>console.log("smth"));
	console.log(coreAreas);
}
