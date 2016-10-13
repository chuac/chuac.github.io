//Get car distance driven (in kilometres)
function getDistance() {
	var distance = 0;
	//Get a reference to the form id="fuelform"
	//var theForm = document.forms["fuelform"];
	//distance = theForm.elements["dist"].value;
	
	distance = parseFloat(document.getElementById("dist").value);
	
	return distance;
}

//Get car fuel used (in litres)
function getFuel() {
	var fuel = 0;
	
	//var theForm = document.forms["fuelform"];
	//fuel = theForm.elements["fuel"].value;
	
	fuel = parseFloat(document.getElementById("fuel").value);
	
	return fuel;
}

//Calc car fuel efficiency
function calculateResult() {
	//var fuel = getFuel();
	//var dist = getDistance();
	//var efficiency = 0;
	//var dist2 = 26.69/2.65;
	//efficiency = fuel / dist2;
	var efficiency = getFuel() / (getDistance() / 100);
	//var efficiency = 3 + 5;
	
	//display the result
	document.getElementById('result').innerHTML = "Fuel Efficiency is " + efficiency + " L/100km";
	//var divobj - document.getElementById('result');
	//divobj.style.display='block';
	//divobj.innerHTML = "Fuel Efficiency is " + efficiency + " L/100km";
}