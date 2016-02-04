$(function() {

	function weather(city) {
		var city = city || "Provo",
		key = "37457581fad82883",
		wundergroundUrl = "https://api.wunderground.com/api/"+ key +"/geolookup/conditions/q/Utah/"+city+".json",
		greeting = "Good " + (new Date().getHours() < 12 ? "Morning." :
							  new Date().getHours() < 17 ? "Afternoon." :
							  new Date().getHours() > 17 && new Date().getHours() < 24 ? "Evening." :
							  "Day.");

		$.getJSON(wundergroundUrl, function(parsed_json) {
			var temp_string = parsed_json['current_observation']['temperature_string'];
			var current_weather = parsed_json['current_observation']['weather'];
			var weather;
			$("#greeting").html(greeting);
			var weatherElements = ["sunny", "partly cloudy", "snowing", "raining"]
			var elem = document.createElement("img");

			current_weather = weatherElements.indexOf(current_weather) == -1 ? "sunny": current_weather;

			elem.setAttribute("src", "img/" + current_weather.toLowerCase() +".png");
			//console.log("img/" + current_weather.toLowerCase() +".png");
			//elem.setAttribute("height", "768");
			//elem.setAttribute("width", "1024");
			elem.setAttribute("alt", "img/rainy.png");
			//console.log(elem);
			document.getElementById("weatherImage").appendChild(elem);
		});
	}

	/**
	 * Weather is a string like : "Partly Cloudy"
	 */
	function getImage(weather) {

	}

	function nyTimes() {
		var sections = [ "home", "world", "national", "politics", "nyregion", "business", "opinion", "technology", 
			"science", "health", "sports", "arts", "fashion", "dining", "travel", "magazine", "realestate" ],
		topStoriesKey = "bf1c3b8bf43dcf7910aae43bf75d25f1:8:74283828",
		newswireKey = "a8cf6af2d1820b864378acd5c9b9ca1b:8:74283828",
		url = "http://api.nytimes.com/svc/topstories/v1/"+sections[2]+".jsonp?api-key="+newswireKey;
		$.getJSON(url, function(data) {
			console.log(data);
		});
	}

	function updateTime() {
		var currentdate = new Date();
		var datetime = currentdate.getDate() + "/"
			+ (currentdate.getMonth()+1)  + "/"
			+ currentdate.getFullYear() + " @ "
			+ currentdate.getHours() + ":"
			+ currentdate.getMinutes() + ":"
			+ currentdate.getSeconds();
		$("#datetime").html(datetime);
	}

	nyTimes();
	weather();
	setInterval(updateTime, 1000);

});