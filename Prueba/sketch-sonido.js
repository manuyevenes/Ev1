var mic;
function setup(){
  mic = new p5.AudioIn()
  mic.start();
    createCanvas(1280, 650);

}
function draw(){
  background(200);
  micLevel = mic.getLevel();
  rect(width/2, constrain(height-micLevel*height*5, 0, height), 25, 25);

}


