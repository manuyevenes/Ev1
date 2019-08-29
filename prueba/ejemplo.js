var gl;
var tStep = 0.3;

function setup() {
  createCanvas(400, 400);
  
  // Line
  /*gl = new GrowingLine(false);
  gl.addPoint(10,0.5*height,true,20);
  for(var x=20; x<width-20; x+=10){
    gl.addPoint(x,0.5*height+random(-2,2),false,5);
  }
  gl.addPoint(width-10,0.5*height,true,20);*/
  
  // Circle
  gl = new GrowingLine(true);
  for(var a=0; a<TAU; a+=TAU/100){
    let r = 100;
    gl.addPoint(0.5*width+r*cos(a),0.5*height+r*sin(a),false,5); //(a==0 || a==TAU)? true : 
  }
} 

function draw() {
  background(30);
  if(mouseIsPressed){
    gl.insertPoint(false,5,5,Math.floor(random(gl.points.length-2)));
  }
  gl.update(tStep);
  gl.display();
  
  if(frameCount%50 == 0){
    //print(frameRate().toFixed(2)+" fps with "+gl.points.length+" points");
  }
}