var pugPic = document.getElementById('pug');

pugPic.addEventListener('mouseover', function mouseover(event) {
	largeImg(event.target);
}, false);

pugPic.addEventListener('mouseout', function mouseout(event) {
	normalImg(event.target);
}, false);

function largeImg(element) {
	element.style.width = "500px";
}

function normalImg(element) {
	element.style.width = "450px";
}
