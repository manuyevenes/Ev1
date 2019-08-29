function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(8);
  noStroke();
}

function draw() {
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(random(50,500));
  colorMode(HSB, 360, 100, 100);
  for (var x = 0; x < 100; x++) {
    var a = random(0, 360);
    fill(a, 100, 100);
    cubo(a)

  }
}

function cubo(diametro) {
box([random(0,100)], [random(0,100)], [random(0,100)], [0],[100])

}