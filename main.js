canvas = document.getElementsByClassName('canvas');
ctx = canvas[0].getContext('2d');

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

	keyPressed = e.keyCode;
	console.log(keyPressed);

	//First solution
	// if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
	// 	alphabetkey();
	// 	document.getElementById("d1").innerHTML="you pressed a letter key";
	// 	console.log("letter");
	// }
	// else if(keyPressed >=48 && keyPressed<=57){
	// 	numberkey();
	// 	document.getElementById("d1").innerHTML="you pressed a number key";
	// 	console.log("number");
	// }
	// else if(keyPressed >=37 && keyPressed<=40){
	// 	arrowkey();
	// 	document.getElementById("d1").innerHTML="you pressed an arrow key";
	// 	console.log("number");
	// }
	// else{
	// 	otherkey();
	//     document.getElementById("d1").innerHTML="You pressed symbol or other key";
	// }
	//Secod solution
	switch (true) {

		case (keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90):
			alphabetkey();
			document.getElementById("d1").innerHTML = "you pressed a letter key";
			console.log("letter");
			break;
		case keyPressed >= 48 && keyPressed <= 57:
			numberkey();
			document.getElementById("d1").innerHTML = "you pressed a number key";
			console.log("number");
			break;
		case keyPressed >=37 && keyPressed<=40:
			arrowkey();
	        document.getElementById("d1").innerHTML="you pressed an arrow key";
		    console.log("arrow");
			break;
        case keyPressed == 17 ||keyPressed == 18 || keyPressed == 27:
			specialkey();
	        document.getElementById("d1").innerHTML="you pressed a special key";
		    console.log("special");
			break;
		default:
			otherkey();
	        document.getElementById("d1").innerHTML="you pressed another key";
		    console.log("other");
	}
}


function alphabetkey() {
	img_image = "Alpkey.png";
	add();

}

function numberkey() {
	img_image = "numkey.png";
	add();
}

function arrowkey() {
	img_image = "arrkey.png";
	add();
}
function specialkey() {
	img_image = "spkey.png";
	add();
}
function otherkey() {
	img_image = "otherkey.png";
	add();
}

