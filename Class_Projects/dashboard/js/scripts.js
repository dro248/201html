$(function() {

	function weather(city) {
		var city = city || "Provo",
		key = "37457581fad82883",
		wundergroundUrl = "https://api.wunderground.com/api/"+ key +"/geolookup/conditions/q/Utah/"+city+".json",
		greeting = "Good " + (new Date().getHours() < 12 ? "Morning" :
							  new Date().getHours() < 17 ? "Afternoon" :
							  new Date().getHours() > 17 && new Date().getHours() < 24 ? "Evening" :
							  "Day");

		$.getJSON(wundergroundUrl, function(parsed_json) {
			var temp_string = parsed_json['current_observation']['temperature_string'];
			var current_weather = parsed_json['current_observation']['weather'];
			var weather = greeting;
			$("#header").html(weather);
		});
	}
	weather()
});