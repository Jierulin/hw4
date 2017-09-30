var x=0;
var a=200;
var b=200;

var xChange=10



function setup(){
createCanvas(400,400);
background(255);
	stroke(0);
	
}



function draw(){
	line(x,0,a,b)
x=x+xChange
	
if(x>=width){
xChange=0
}
	

}

	
function mousePressed(){
	a=mouseX;
	b=mouseY;
}	
