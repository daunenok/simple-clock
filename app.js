setInterval(setTime, 1000);

function setTime() {
	var time = new Date();
	var sec = time.getSeconds();
	var mins = time.getMinutes();
	var hours = time.getHours();

	var degSec = sec * 6 - 90;
	var degMin = mins * 6 - 90;
	var degHour = hours * 30 - 90;

	var element1 = document.querySelector("#seconds");
	var element2 = document.querySelector("#minutes");
	var element3 = document.querySelector("#hours");

	element1.style.transform = "rotate(" + degSec + "deg)";
	element2.style.transform = "rotate(" + degMin + "deg)";
	element3.style.transform = "rotate(" + degHour + "deg)";
}