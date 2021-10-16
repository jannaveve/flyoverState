var canvas;
let x,y;

function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  //background(175);
}

function draw() {
	x = random(width);
	y = random(height);
	noStroke();
	s = second();
	fill(255);
	rect(x, y,20,20);
	
	if (mouseX > 700 && mouseX <750){
		fill(0,255,255,s);
		rect(x, y,20,20);
	}
	if (mouseX < 100){
		fill(253,238,0,s);
		rect(x, y,20,20);
	}
	
	else{
	
	fill(random(255),20);
	rect(x, y,20,20);
	}
}// JavaScript Document