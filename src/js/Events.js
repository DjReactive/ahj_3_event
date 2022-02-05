export default class Events {
  constructor(board, cellsArray) {
    this.countPoints = 0;
    this.countMiss = 0;
    this.endGame = false;
    this.isNoMiss = true;
    this.elCounter = document.getElementById('counter');
    this.board = board;
    this.cells = cellsArray;

    board.addEventListener('click', (event) => this.clickEvent(event.target));
    this.updateInformer();
  }

  clickEvent(target) {
    if (target.className === 'image' && !this.endGame) {
      this.updateCounter();
      this.isNoMiss = true;
      target.remove();
    }
  }

  checkHit(timer) {
    let lose = false;
    if (!this.isNoMiss) this.updateCounter('miss');
    if (this.countMiss >= 5) {
      lose = true;
      this.endGame = true;
      clearInterval(timer);
    }
    this.isNoMiss = false;
    this.updateInformer(lose);
  }

  updateCounter(type = 'points') {
    if (type !== 'miss') this.countPoints += 1;
    else this.countMiss += 1;
    this.updateInformer();
  }

  updateInformer(lose = false) {
    const points = `Your points: ${this.countPoints}`;
    const message = !lose
      ? `${points} | Your miss: ${this.countMiss}` : `You Loose. ${points}`;
    this.elCounter.innerHTML = message;
  }
}
