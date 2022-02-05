import Board from './Board';
import Events from './Events';

const board = new Board();
const eventsModule = new Events(board.board, board.getCells());

const timer = setInterval(() => {
  board.setImageOnCell(board.getRandomIndex());
  eventsModule.checkHit(timer);
}, 1000);
