
// Counter Code

var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){

	// Create a counter request

	// Capture the response and store it in a variable

	// render the variable in the correct span
	counter = counter + 1;
	var span = document.getElementById('count');
	span.innerHTML = counter.toString()
}
