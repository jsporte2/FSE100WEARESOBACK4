let molePhoto
let circleArr
let ranX
var points
let backGroundPic
let ranY
let shapeColor
function preload() {
  molePhoto = loadImage("mole.png"); 
  backGroundPic = loadImage("whackAMole.jpg");
}
function setup() {
  createCanvas(400, 400); 
  shapeColor = color(0,0,0)
  image(molePhoto,10,10)
  image(backGroundPic,400,400)
  points = 0;
  ranX = 50; 
  ranY = 50;

}

function draw() {
  background(250, 10, 200); 
  fill(shapeColor)
  image(backGroundPic, 0, 0, 400, 400);
  image(molePhoto, ranX, ranY, 90, 100);
  if(mouseIsPressed) {
    drawRandom();
    if(checkHit()) {
      points = points + 1
    }
  }
  textSize(32)
  text("Total Points: " + points, 50, 50);
}
function highlightColor() {
  shapeColor = (250,250, 0);
}
function getRandom() {
  let ranX = int(random(0, 200));
  let ranY = int(random(0,200));
}
function drawRandom() {
  ranX = int(random(0,300))
  ranY = int(random(0,300))
}
function checkHit() {
  if(mouseX > (50 + ranY) && mouseY > (50+ ranX)){
    var points = points + 1; 
    console.log(points);
    return true;
  }
  else {
    console.log("No point");
    return false;
  }
}
