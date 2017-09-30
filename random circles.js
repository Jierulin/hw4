function setup(){
background(255);
noStroke();
colorMode(HSB);

}



function draw() {
	var h = random(360)
  fill(h, 100, 100);
  ellipse(width/2, height/2, 100, 100);
  h = h + 5;
  
  if (h >= 360) {
    h = 0;
  }
}
