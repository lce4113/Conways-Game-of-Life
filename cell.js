class Cell {

  constructor(x, y) {
    this.state = (random() < 0.1 ? 1 : 0);
    this.x = x;
    this.y = y;
  }

  draw() {
    if (this.state) {
      fill(150, 175, 250);
    } else {
      noFill();
    }
    rect(cellSize * this.x, cellSize * this.y, cellSize, cellSize);
  }

  calcUpdate(neighbors) {
    this.newState = this.state;
    if (this.state && (neighbors < 2 || neighbors > 3)) this.newState = 0;
    if (neighbors == 3 && !this.state) this.newState = 1;
  }

  update() {
    this.state = this.newState;
  }

}