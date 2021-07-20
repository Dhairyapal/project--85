canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car_width = 100;
car_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x = 10;
car_y = 10;

function add() {
	background_img_tag = new Image();
    background_img_tag.onload = uploadBackground;
    background_img_tag.src = background_img;

	car_img_tag = new Image();
    car_img_tag.onload = uploadrover;
    car_img_tag.src = rover_img;
}

function uploadBackground() {
	ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(car_img_tag, car_x, car_y, car_width, car_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if (car_y>=0)
{
    car_y = car_y-10;
    console.log("When up arrow is presed = "+car_x,car_y); 
    uploadBackground();
    uploadgreencar();
}
}


function down()
{
	if (car_y<=500)
{
    car_y = car_y+10;
    console.log("When down arrow is presed = "+car_x,car_y); 
    uploadBackground();
    uploadgreencar();
}
}


function left()
{
	if (car_x>=0)
{
    car_x = car_x-10;
    console.log("When left is presed = "+car_x,car_y); 
    uploadBackground();
    uploadgreencar();
}
}


function right()
{
	if (car_x<=700)
{
    car_y = car_x+10;
    console.log("When right arrow is presed = "+car_x,car_y); 
    uploadBackground();
    uploadgreencar();
}
}


