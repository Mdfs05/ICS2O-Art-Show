var Mover = function () {
  this.x = 400/2;
  this.y = 400/2;
  this.colour = fill(random(255), random(255), random(255));
};

Mover.prototype.update = function() {
  this.x+=random(-3, 3);
  this.y+=random(-3, 3);
};

Mover.prototype.show = function() {
  fill(10, 20, 35);
  noStroke();
  ellipse(this.x, this.y, 10, 10);
};

//Won't work in mover.js /\

/*
let dot= new Mover ();
let dots=[];
*/
