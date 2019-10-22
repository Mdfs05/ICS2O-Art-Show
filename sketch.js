let sceneNum = 0;
let dot = new Mover();
let dots = [];


function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 40; i++) {
    dots[i] = new Mover();
  }

}

function draw() {
  mouseClicked = function() {
    background(173, 239, 255);
    fill(7, 14, 255);
    text("hello", 10, 10);
    sceneNum++;
  }
  if (sceneNum == 1) {
    
  
  background(220);

  for (let i = 0; i < 40; i++) {
    dots[i].update();
    dots[i].show();
  }

  ellipse(mouseX, mouseY, 10, 10);
  }
}
