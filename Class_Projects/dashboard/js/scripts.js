$(function() {

	var startPos;
	var geoSuccess = function(position) {
	startPos = position;
	document.getElementById('startLat').innerHTML = startPos.coords.latitude;
	document.getElementById('startLon').innerHTML = startPos.coords.longitude;
	};
	navigator.geolocation.getCurrentPosition(geoSuccess);

	console.log("Lat: "+ startPos.coords.latitude);
	console.log("Long: "+ startPos.coords.longitude);




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
			$("#temp").html(temp_string);
			$("#greeting").html(greeting);
			var weatherElements = ["sunny", "partly cloudy", "snowing", "raining"]
			var elem = document.getElementById("weatherImage");

			current_weather = (weatherElements.indexOf(current_weather.toLowerCase()) === -1) ? "snowing" : current_weather;

			elem.setAttribute("src", "img/" + current_weather.toLowerCase() +".png");
			elem.setAttribute("alt", "img/" + current_weather.toLowerCase() +".png");
		});
	}

	function nyTimes(section, createList) {
		var sections = [ "home", "world", "national", "politics", "nyregion", "business", "opinion", "technology",
			"science", "health", "sports", "arts", "fashion", "dining", "travel", "magazine", "realestate" ],
		section = section || "national",
		topStoriesKey = "bf1c3b8bf43dcf7910aae43bf75d25f1:8:74283828",
		newswireKey = "a8cf6af2d1820b864378acd5c9b9ca1b:8:74283828",
		url = "http://api.nytimes.com/svc/topstories/v1/"+sections[sections.indexOf(section)]+".json?api-key="+topStoriesKey;

		if (createList) {
			// make select element for changing topics
			var select = document.createElement("select");
			sections.forEach(function(sec){
				var topic = document.createElement("option");
				topic.innerHTML = sec;
				topic.value = sec;
				select.appendChild(topic);
			});
			select.addEventListener('change', reload);
			document.getElementById("reloadList").appendChild(select);
		}

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
		// style the title a bit
		title.style.fontWeight = "800";
		title.style.color = "gray";
		title.style.fontFamily = "Times";
		title.style.fontSize = "x-large";
		abstract.innerHTML = art.abstract;
		abstract.title = art.abstract;
		url.href = art.url;

		// add the title as a link, <br>, then the abstract explanation of the article.
		article.appendChild(title);
		article.appendChild(abstract);
		url.appendChild(article);
		// add the article to the list
		document.getElementById("articles").appendChild(url);
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

	/**
	 * Reloads the articles with a new topic
	 * triggered by selecting a new value
	 */
	function reload(e) {
		document.getElementById("articles").innerHTML = "";
		nyTimes(this.value);
	}

	// show / hide the select list when you press 'z'
	document.onkeydown = function(e){
        if (e.keyCode == 90) {
        	var sel = document.getElementById("reloadList");
        	console.log("hi");
        	if (sel.style.display == "none") {
        		sel.style.display = "block";
        	} else {
        		sel.style.display = "none";
        	}
        }
    }

    // initially populate the articles div
	nyTimes(undefined, true);
	// initially populate the greeting and weather information
	weather();
	// update the time every second
	setInterval(updateTime, 1000);

});
