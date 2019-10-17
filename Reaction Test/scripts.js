//Develop into the random time interval
function wait(ms) {
	var wd = new Date();
	var wd2 = null;
	do { wd2 = new Date(); }
	while(wd2-wd < ms);
}

function time(div) {
	var td = new Date();
	var td2 = null;
}

function playTone() {
    var tone = new Audio("Tone.wav");
    tone.play();
}

function visual(div) {
	div.style.background = "black";
	wait(2000);
	div.style.background = "green";
}