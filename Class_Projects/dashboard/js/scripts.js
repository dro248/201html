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
		url = "http://api.nytimes.com/svc/topstories/v1/"+sections[2]+".json?api-key="+topStoriesKey;
		$.getJSON(url, function(data) {
			data.results.forEach(makeArticleLink);
		});
	}

	/**
	 * art is an article object from the nytimes json
	 * creates elements that will be added to the thing
	 */
	function makeArticleLink(art) {
		// create elements for the article
		var article = document.createElement("div"),
		title = document.createElement("span"),
		abstract = document.createElement("div"),
		lineBreak = document.createElement("br"),
		url = document.createElement("a");

		//add css to the classes
		article.className = "article panel-body";
		url.className = "title";
		abstract.className = "abstract";

		// Put the corresponding info from the 'art' object into their elements
		title.innerHTML = art.title;
		abstract.innerHTML = shorten(art.abstract);
		abstract.title = art.abstract;
		url.href = art.url;
		url.innerHTML = art.title;

		// add the title as a link, <br>, then the abstract explanation of the article.
		article.appendChild(url);
		article.appendChild(lineBreak);
		article.appendChild(abstract);
		// add the article to the list
		document.getElementById("articles").appendChild(article);
	}

	function shorten(val) {
		// if (val.length < 40) {
			return val;
		// } else {
		// 	return val.substring(0, 35)+"...";
		// }
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