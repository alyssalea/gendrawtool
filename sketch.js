function setup() {
  createCanvas(1000,1000)
  background(250,0,0)
  frameRate(1000)
}

function draw() {
  
if (keyIsPressed === true){
  fill(250,0,0)
  noStroke ()
  ellipse(mouseX,mouseY,40,40)
}

if (mouseIsPressed === true) {
  fill(0)
  ellipse(mouseX,mouseY,15,15)
}
//else none
}