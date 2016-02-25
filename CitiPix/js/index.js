//note to self - add attr function

//start of js - delays until DOM loaded
$(document).ready(function(){

	// Blocks page reload
	$("input:submit").click(function(event) {
	   event.preventDefault();
	});

	// Button click, capture input value
	$('#submit-btn').on('click', function(){
		// Defines var city as user entry
		var city = $('#city-type').val();
		//making sure it works
		console.log(city);
		
		//start of conditionals
		if(city == 'new york' || city == 'nyc' || city == 'New York City') {
		$('#citibodi').css("background-image", "url(images/nyc.jpg)");  
		}
		else if(city == 'San Francisco' || city == 'SF' || city == 'Bay Area') {
		$('#citibodi').css("background-image", "url(images/sf.jpg)");  
		}
		else if(city == 'Los Angeles' || city == 'LA' || city == 'LAX') {
		$('#citibodi').css("background-image", "url(images/la.jpg)");  
		}
		else if(city == 'Austin' || city == 'ATX') {
		$('#citibodi').css("background-image", "url(images/austin.jpg)");  
		}
		else if(city == 'Sydney' || city == 'SYD') {
		$('#citibodi').css("background-image", "url(images/sydney.jpg)");  
		}
	});
});