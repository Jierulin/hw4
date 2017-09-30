background(255)
var rate = 0.9;
var x=0, y=0
var targetx=mouseX, targety=mouseY;

while(true){
  fill(255,0,0)
  stroke(255,0,0)
  ellipse(x, y, 15, 15);
	fill(255)
	stroke(255)
  rectMode(CENTER)
	rect(x,y,30,30);
  x = targetx*rate + x*(1-rate); // rate is 0.1, or 10% -- (1-rate) is 0.9, or 90%
	y=targety*rate+y*(1-rate);

  var targetx=mouseX, targety=mouseY
}
