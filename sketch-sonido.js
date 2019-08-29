var mic;
function setup(){
  mic = new p5.AudioIn()
  mic.start();
    createCanvas(400, 400);

}
function draw(){
  background();
  micLevel = mic.getLevel();
  ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);
}

