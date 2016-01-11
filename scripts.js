function normalize() {
	makeImageFullScreen();
	fixTopMargin();
	centerResumeButton();
}

function makeImageFullScreen() {
	// alert("you're hovering");

	myImg = document.getElementById("home1");

	if(window.innerHeight > window.innerWidth){
		myImg.style.height = window.innerHeight+ "px";
	}

	else if(window.innerWidth / window.innerHeight > 1.5) {
		myImg.style.width = window.innerWidth+ "px";
		myImg.style.height = window.innerWidth/1.5 + "px";
	}

	else if(window.innerWidth / window.innerHeight <= 1.5){
		myImg.style.width = window.innerWidth+ "px";
		myImg.style.height = window.innerHeight+ "px";
	}

	else{
		myImg.style.height = window.innerHeight+ "px";
	}	
}

function fixTopMargin() {
    var imgHeight = document.getElementById("home1").height;

    document.getElementById("Education").style.marginTop = imgHeight + "px";
}

function resumeButton() {
	var resumeButton = document.getElementById("floatingLink");
	var myImg = document.getElementById("home1");

	resumeButton.top = (myImg.height - 20) + "px";
}