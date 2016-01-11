function normalize() {
	makeImageFullScreen();
	fixTopMargin();
	centerResumeButton();
}

function makeImageFullScreen() {
	myImg = document.getElementById("home1");

	if(window.innerWidth / window.innerHeight > 1.5) {
		myImg.style.width = window.innerWidth+ "px";
		myImg.style.height = window.innerWidth/1.5 + "px";
	}

	else{
		myImg.style.height = window.innerHeight+ "px";
	}	
}

function fixTopMargin() {
    var imgHeight = document.getElementById("home1").height;

    document.getElementById("Education").style.marginTop = imgHeight + "px";
}