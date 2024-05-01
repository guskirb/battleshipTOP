import './style.css';

import Board from './board.js';
import Ship from './ship.js';
import Player from './player.js';

class Render {
    renderBoards() {
        const playerBoard = document.querySelector('.playerBoard');
        const enemyBoard = document.querySelector('.enemyBoard');

        for (let x = 0; x < 10; x += 1) {
            for (let y = 0; y < 10; y += 1) {
                let playerDiv = document.createElement('div');
                let enemyDiv = document.createElement('div');
                playerBoard.appendChild(playerDiv).classList.add('player', `[${x},${y}]`);
                enemyBoard.appendChild(enemyDiv).classList.add('enemy', `[${x},${y}]`);
            }
        }
    }

    renderShips(player){
        for (let x = 0; x < 10; x += 1) {
            for (let y = 0; y < 10; y += 1){
               if (!( player.board.board[x][y] === 'x' || player.board.board[x][y] === 'o')) {
                    const ship = document.getElementsByClassName(`player [${x},${y}]`);
                    ship[0].classList.add('ship');
                } 
            }
        }
    }
}

const Player1 = new Player('Player1');
Player1.initialize();
const Player2 = new Player('Player2');
Player2.initialize();
Player1.board.place(Player1.battleship, [1,6]);
Player1.board.place(Player1.destroyer, [5,6]);
Player1.board.place(Player1.submarine, [9,0]);
Player1.board.place(Player1.patrolboat, [2,0]);
console.log(Player1)
const render = new Render;
render.renderBoards();
render.renderShips(Player1)
