import './style.css';
import Player from './player.js';

const button = document.querySelector('.submit');
const nameInput = document.querySelector('#name');
const startScreen = document.querySelector('.startScreen');
const playerName = document.querySelector('.playerName');
const enemyName = document.querySelector('.enemyName');
const errorText = document.querySelector('.errorText')

let Player1;
let Player2;

button.addEventListener('click', () => {
    if (!nameInput.value){
        errorText.style.display= 'inline';
       return; 
    }
    Player1 = new Player(nameInput.value);
    Player1.initialize();
    playerName.textContent = Player1.name.toUpperCase();

    Player2 = new Player('CPU');
    Player2.initialize();
    enemyName.textContent = Player2.name.toUpperCase();

    startScreen.style.display = 'none';
    
    render.randomPlace(Player1);
    render.randomPlace(Player2);
    render.renderBoards();
    render.renderPlayer(Player1);
    render.renderEnemy(Player2);
    console.log(Player1);

})

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

const render = new Render;