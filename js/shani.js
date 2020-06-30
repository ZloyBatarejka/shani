function alba() {
	var zag = document.getElementById("logo");
	zag.innerHTML = "Withcer";

};
function imag(eventObj) {
	var img = eventObj.target;
	var hope = img.src;
	var name = img.id;
	name = name + ".jpg";
	img.src=name;

};
function loh() {
	var p = document.getElementById("loh");
	p.innerHTML = "Антон тоже";
}
function loh2() {
	var p = document.getElementById("loh");
	p.innerHTML = "Ден лох";
}
window.onload = function ()  {
	alba();
	var u = document.getElementById("loh");
	u.onmouseover = loh; 
	u.onmouseout = loh2;
	var map = document.getElementById("body");
	map.onmousemove=shoowCoords;
	var img = document.getElementsByTagName("img");
	for(var i = 0; i<img.length;i++){
		img[i].onmouseover=imag;
		img[i].onmouseout=reblur;


	}
	var z = document.getElementById("h2");
	z.onmouseover=text;
	z.onmouseout=textback;
};
function shoowCoords(eventObj){
	var map = document.getElementById("logo2");
	var x = eventObj.clientX;
	var y = eventObj.clientY;
	map.innerHTML=" Mouse coordinates: " + x + ", " + y; 

}


 

setInterval(function () {
var date = new Date;
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var p = document.getElementById("logo");
if(m<10){m="0"+m;}
if(h<10){h="0"+h;}
if(s<10){s="0"+s;}
p.innerHTML=h + ":" + m + ":" + s;
},1000)
function reblur(eventObj) {
var img = eventObj.target;
var name = img.id;
var name = name+ "zamena.jpg"
img.src = name;
}



function text() {
var z = document.getElementById("h2");
z.innerHTML = "Is it all  just a lie?";
}

function textback() {
var z = document.getElementById("h2");
z.innerHTML = "Is it me are you loking   for?";
}
	