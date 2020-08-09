var cellSize = 5;

var grid;

function setup() {
  createCanvas(700, 700);
  grid = new Grid();
  frameRate(5);
}

function draw() {
  noStroke();

  background(255);
  grid.draw();
  grid.update()
}