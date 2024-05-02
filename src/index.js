import './style.css';
import Player from './player.js';

const Player1 = new Player('Player1');
Player1.initialize();
const Player2 = new Player('Player2');
Player2.initialize();

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

                enemyDiv = document.getElementsByClassName(`enemy [${x},${y}]`);
                enemyDiv[0].addEventListener('click', () => {
                    if (Player2.board.receiveAttack([x, y])) {
                        Player2.board.receiveAttack([x, y])
                        this.renderEnemy(Player2);
                        this.enemyTurn();
                    }
                })
            }
        }
    }

    renderPlayer(player) {
        for (let x = 0; x < 10; x += 1) {
            for (let y = 0; y < 10; y += 1) {
                if (!(player.board.board[x][y] === '-' || player.board.board[x][y] === 'o')) {
                    const ship = document.getElementsByClassName(`player [${x},${y}]`);
                    ship[0].classList.add('ship');
                }
                if (player.board.board[x][y] === '-') {
                    const ship = document.getElementsByClassName(`player [${x},${y}]`);
                    ship[0].classList.add('miss');
                }
                if (player.board.board[x][y] === 'x') {
                    const ship = document.getElementsByClassName(`player [${x},${y}]`);
                    ship[0].classList.add('hit');
                }
            }
        }
        if (!player.board.checkShip()) {
            console.log('LOSE');
        };
    }

    renderEnemy(player) {
        for (let x = 0; x < 10; x += 1) {
            for (let y = 0; y < 10; y += 1) {
                if (player.board.board[x][y] === '-') {
                    const ship = document.getElementsByClassName(`enemy [${x},${y}]`);
                    ship[0].classList.add('miss');
                }
                if (player.board.board[x][y] === 'x') {
                    const ship = document.getElementsByClassName(`enemy [${x},${y}]`);
                    ship[0].classList.add('hit');
                }
            }
        }
        if (!player.board.checkShip()) {
            console.log('WIN');
        };
    }

    enemyTurn() {
        let x = getRandomInt(10);
        let y = getRandomInt(10);

        while (!Player1.board.receiveAttack([x, y])) {
            x = getRandomInt(10);
            y = getRandomInt(10);
        }

        Player1.board.receiveAttack([x, y]);
        this.renderPlayer(Player1);
    }

    randomPlace(player) {
        let x = [getRandomInt(10), getRandomInt(10)];

        while (!player.board.place(player.carrier, x)) {
            x = [getRandomInt(10), getRandomInt(10)];
        }
        player.board.place(player.carrier, x);

        while (!player.board.place(player.battleship, x)) {
            x = [getRandomInt(10), getRandomInt(10)];
        }
        player.board.place(player.battleship, x);

        while (!player.board.place(player.destroyer, x)) {
            x = [getRandomInt(10), getRandomInt(10)];
        }
        player.board.place(player.destroyer, x);

        while (!player.board.place(player.submarine, x)) {
            x = [getRandomInt(10), getRandomInt(10)];
        }
        player.board.place(player.submarine, x);

        while (!player.board.place(player.patrolboat, x)) {
            x = [getRandomInt(10), getRandomInt(10)];
        }
        player.board.place(player.patrolboat, x);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Player1.board.place(Player1.carrier, [0, 1]);
// Player1.board.place(Player1.battleship, [1, 6]);
// Player1.board.place(Player1.destroyer, [5, 6]);
// Player1.board.place(Player1.submarine, [9, 0]);
// Player1.board.place(Player1.patrolboat, [2, 0]);
Player2.board.place(Player2.carrier, [0, 1]);
Player2.board.place(Player2.battleship, [1, 6]);
Player2.board.place(Player2.destroyer, [5, 6]);
Player2.board.place(Player2.submarine, [9, 0]);
Player2.board.place(Player2.patrolboat, [2, 0]);
console.log(Player1);
const render = new Render;
render.randomPlace(Player1);
render.renderBoards();
render.renderPlayer(Player1);
render.renderEnemy(Player2);
