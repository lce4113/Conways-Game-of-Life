class Grid {

  constructor() {
    this.cells = [];
    for (let i = 0; i < width / cellSize; i++) {
      this.cells[i] = [];
      for (let j = 0; j < height / cellSize; j++) {
        this.cells[i][j] = new Cell(i, j);
      }
    }
  }

  draw() {
    for (let row of this.cells) {
      for (let cell of row) {
        cell.draw();
      }
    }
  }

  update() {
    for (let i = 0; i < this.cells.length; i++) {
      for (let j = 0; j < this.cells[i].length; j++) {
        var neighbors = 0;
        for (let k = -1; k <= 1; k++) {
          for (let l = -1; l <= 1; l++) {
            if (
              !(k == 0 && l == 0)
              && i + k >= 0 && i + k < this.cells.length
              && j + l >= 0 && j + l < this.cells[i].length
            ) neighbors += this.cells[i + k][j + l].state;
          }
        }
        this.cells[i][j].calcUpdate(neighbors);
      }
    }

    for (let i = 0; i < this.cells.length; i++) {
      for (let j = 0; j < this.cells[i].length; j++) {
        this.cells[i][j].update();
      }
    }
  }

}