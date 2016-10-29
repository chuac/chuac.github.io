//Calculate client's timezone offset in minutes
function pushTimeOffset() {
	var offset = new Date().getTimezoneOffset();
	document.getElementById("time").innerHTML = offset/60;
}

