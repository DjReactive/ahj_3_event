export default class Board {
  constructor() {
    this.board = Board.createBoard();
    this.image = Board.createImage();
    this.allCells = document.getElementsByClassName('cell');
  }

  static createBoard(countCells = 16) {
    const board = document.getElementById('board');
    for (let el, i = 0; i < countCells; i++) {
      el = document.createElement('div');
      el.classList.add('cell');
      board.appendChild(el);
    }
    return board;
  }

  static createImage() {
    const img = document.createElement('img');
    img.setAttribute('src', 'images/goblin.png');
    img.classList.add('image');
    return img;
  }

  getCells() {
    const arr = [];
    const cells = this.board.getElementsByClassName('cell');
    for (const cell of cells) arr.push(cell);
    return arr;
  }

  getRandomIndex() {
    return Math.floor(Math.random() * Math.floor(this.allCells.length));
  }

  setImageOnCell(index) {
    for (const cell of this.allCells) {
      if (this.allCells[index] === cell) { this.allCells[index].appendChild(this.image); }
    }
  }
}
