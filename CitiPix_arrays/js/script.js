$(document).ready(function(){

//Defining main variables
var citi = ["NYC", "SF", "LA", "ATX", "SYD"];
var cityType = $('#city-type');
var citiBodi = $('.citiBodi');

//Changing the background
	cityType.on('change', function(){
		var citiSelect = cityType.val();
		//checking that it's getting recorded
		console.log(citiSelect);
		//resetting the page
		citiBodi.removeClass('NYC SF LA ATX SYD');
		//adding the new background
		citiBodi.addClass(citiSelect);
	
	//another way of doing it with if else conditionals:
		//if(citiSelect == "NYC") {
		//citiBodi.addClass("NYC");
		//}
		
	});

//creating the drop down list
for (var i = 0; i<citi.length; i++) {
	cityType.append('<option>'+citi[i]+'</option>');
}
});

