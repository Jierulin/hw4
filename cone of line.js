function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255);
for(var x=0;x<width; x=x+10){
stroke(0)
line(x, 0, mouseX, mouseY)
}
}
