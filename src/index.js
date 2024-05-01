require('./style.css');

const Board = require('./board');
const Ship = require('./ship');
const Player = require('./ship');

class Render {
    renderBoards() {
        const playerBoard = document.querySelector('.playerBoard');
        const enemyBoard = document.querySelector('.enemyBoard');

        for (let x = 0; x < 10; x += 1) {
            for (let y = 0; y < 10; y += 1) {
                playerBoard.appendChild(document.createElement('div')).classList.add(`player[${x},${y}]`);
                enemyBoard.appendChild(document.createElement('div')).classList.add(`enemy[${x},${y}]`);
            }
        }
    }
}

const render = new Render;
const board = new Board;
board.createBoard();
console.log(board.board)

render.renderBoards();