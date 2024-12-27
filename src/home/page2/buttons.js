const win11 = document.getElementById("start11");
const win10 = document.getElementById("start10");
const win8 = document.getElementById("start8");
const win7 = document.getElementById("start7");
const next = document.getElementById("next");
let select = 11

function click11() {
	win11.className = "primary";
	win10.className = "second";
	win8.className = "danger";
	win7.className = "danger";
	select = 11
}

function click10() {
	win11.className = "second";
	win10.className = "primary";
	win8.className = "danger";
	win7.className = "danger";
	select = 10
}

function click8() {
	win11.className = "second";
	win10.className = "second";
	win8.className = "dansel";
	win7.className = "danger";
	select = 8
}

function click7() {
	win11.className = "second";
	win10.className = "second";
	win8.className = "danger";
	win7.className = "dansel";
	select = 7
}

function nextPage() {
	window.location.assign("win" + select + "/");
}

win11.addEventListener("click", click11);
win10.addEventListener("click", click10);
win8.addEventListener("click", click8);
win7.addEventListener("click", click7);
next.addEventListener("click", nextPage);
