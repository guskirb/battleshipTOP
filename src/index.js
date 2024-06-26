import './style.css';
import Player from './player.js';

let startX = 0;
let startY = 0;

const button = document.querySelector('.submit');
const nameInput = document.querySelector('#name');
const startScreen = document.querySelector('.startScreen');
const playerName = document.querySelector('.playerName');
const enemyName = document.querySelector('.enemyName');
const errorText = document.querySelector('.errorText');
const enemySide = document.querySelector('.enemy');
const randomButton = document.querySelector('.randomButton');
const playButton = document.querySelector('.playButton');
const battleshipArea = document.querySelector('.battleships');
const carrier = document.querySelector('.carrier');
const battleship = document.querySelector('.battleship');
const destroyer = document.querySelector('.destroyer');
const submarine = document.querySelector('.submarine');
const patrolboat = document.querySelector('.patrolboat');
const playerHitMessage = document.querySelector('.playerHitMessage');
const enemyHitMessage = document.querySelector('.enemyHitMessage');
const resultScreen = document.querySelector('.resultScreen');
const result = document.querySelector('.result');
const replayButton = document.querySelector('.replayButton');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let turn = true;
let Player1;
let Player2;
let currentShip;
let currentDiv;
let hardMode;

export default class Render {
    static createPlayerBoard() {
        const playerBoard = document.querySelector('.playerBoard');

        for (let x = 0; x < 10; x += 1) {
            for (let y = 0; y < 10; y += 1) {
                const playerDiv = document.createElement('div');

                playerBoard.appendChild(playerDiv).classList.add('player', `[${x},${y}]`);
            }
        }
    }

    static createEnemyBoard() {
        const enemyBoard = document.querySelector('.enemyBoard');

        for (let x = 0; x < 10; x += 1) {
            for (let y = 0; y < 10; y += 1) {
                let enemyDiv = document.createElement('div');

                enemyBoard.appendChild(enemyDiv).classList.add('enemy', `[${x},${y}]`);

                enemyDiv = document.getElementsByClassName(`enemy [${x},${y}]`);
                enemyDiv[0].addEventListener('click', () => {
                    if (!turn) {
                        return;
                    }
                    if (Player2.board.receiveAttack([x, y])) {
                        Player2.board.receiveAttack([x, y]);
                        this.renderEnemy(Player2);
                        turn = false;
                        this.enemyTurn();
                    }
                })
            }
        }
    }

    static renderPlayer(player) {
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
            resultScreen.style.display = 'flex';
            result.textContent = 'You Lose!';
        }
    }

    static renderEnemy(player) {
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
            resultScreen.style.display = 'flex';
            result.textContent = 'You Win!';
        }
    }

    static clearBoard() {
        const playerBoard = document.querySelector('.playerBoard');
        const enemyBoard = document.querySelector('.enemyBoard');

        while (playerBoard.firstChild) {
            playerBoard.removeChild(playerBoard.firstChild);
        }
        while (enemyBoard.firstChild) {
            enemyBoard.removeChild(enemyBoard.firstChild);
        }
    }

    static enemyTurn() {

        let x = getRandomInt(10);
        let y = getRandomInt(10);

        while (Player1.board.board[x][y] === '-' || Player1.board.board[x][y] === 'x') {
            x = getRandomInt(10);
            y = getRandomInt(10);
        }

        setTimeout(() => {
            if (hardMode) {
                if (!(Player1.board.lastHit === undefined)) {
                    const coord = Player1.board.lastHit;

                    if (!(Player1.board.board[coord[0]][coord[1] + 1] === '-' || Player1.board.board[coord[0]][coord[1] + 1] === 'x' || Player1.board.board[coord[0]][coord[1] + 1] === undefined)) {
                        Player1.board.receiveAttack([coord[0], coord[1] + 1]);
                    } else if (!(Player1.board.board[coord[0]][coord[1] - 1] === '-' || Player1.board.board[coord[0]][coord[1] - 1] === 'x' || Player1.board.board[coord[0]][coord[1] - 1] === undefined)) {
                        Player1.board.receiveAttack([coord[0], coord[1] - 1]);
                    } else if (!(Player1.board.board[coord[0]][coord[1] - 2] === '-' || Player1.board.board[coord[0]][coord[1] - 2] === 'x' || Player1.board.board[coord[0]][coord[1] - 2] === undefined)) {
                        Player1.board.receiveAttack([coord[0], coord[1] - 2]);
                    } else if (!(Player1.board.board[coord[0]][coord[1] + 2] === '-' || Player1.board.board[coord[0]][coord[1] + 2] === 'x' || Player1.board.board[coord[0]][coord[1] + 2] === undefined)) {
                        Player1.board.receiveAttack([coord[0], coord[1] + 2]);
                    } else {
                        Player1.board.receiveAttack([x, y]);
                    }
                } else {
                    Player1.board.receiveAttack([x, y]);
                }
            } else {
                Player1.board.receiveAttack([x, y]);
            }
            this.renderPlayer(Player1);
            turn = true;
        }, 1500)
    }

    static randomPlace(player) {
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

    static placeBoat() {
        const array = Array.from(currentDiv);
        const player = Player1[currentShip];

        if (currentShip) {
            if (Player1.board.place(player, [parseInt(array[1], 10), parseInt(array[3], 10)])) {
                Player1.board.place(player, [parseInt(array[1], 10), parseInt(array[3], 10)]);
                Render.renderPlayer(Player1);
                document.querySelector(`.${currentShip}`).style.display = 'none';
            }
        }
    }

    static setShip(state) {
        carrier.style.display = state;
        battleship.style.display = state;
        destroyer.style.display = state;
        submarine.style.display = state;
        patrolboat.style.display = state;
    }

    static hitMessage(position) {
        let ship;
        if (turn) {
            ship = document.getElementsByClassName(`enemy [${position}]`)[0].getBoundingClientRect();
            enemyHitMessage.style.top = `${ship.top + 10}px`;
            enemyHitMessage.style.left = `${ship.left + 10}px`;
            enemyHitMessage.style.display = 'block';
            enemyHitMessage.style.opacity = '1';
            enemyHitMessage.style.animation = '';

        } else {
            ship = document.getElementsByClassName(`player [${position}]`)[0].getBoundingClientRect();
            playerHitMessage.style.top = `${ship.top + 10}px`;
            playerHitMessage.style.left = `${ship.left + 10}px`;
            playerHitMessage.style.display = 'block';
            playerHitMessage.style.opacity = '1';
            playerHitMessage.style.animation = '';
        }

        setTimeout(() => {
            enemyHitMessage.style.opacity = '0';
            enemyHitMessage.style.display = 'block';

            playerHitMessage.style.opacity = '0';
            playerHitMessage.style.display = 'block';

            setTimeout(() => {
                enemyHitMessage.style.animation = 'none';
                playerHitMessage.style.animation = 'none';
            }, 500)
        }, 1000)
    }
}

button.addEventListener('click', () => {
    if (!nameInput.value) {
        errorText.style.display = 'inline';
        return;
    }

    if (document.getElementById('hard').checked) {
        hardMode = true;
    } else {
        hardMode = undefined;
    }

    Player1 = new Player(nameInput.value);
    Player1.initialize();
    Player2 = new Player('CPU');
    playerName.textContent = "Place your battleships";

    battleshipArea.style.display = 'flex';

    startScreen.style.opacity = '0';
    startScreen.style.display = 'none';

    enemySide.style.display = 'none';
    enemySide.style.opacity = '0';

    Render.clearBoard();
    Render.setShip('grid');
    Render.createPlayerBoard();
    errorText.style.display = 'none';
})

randomButton.addEventListener('click', () => {
    Player1.initialize();
    Render.clearBoard();
    Render.createPlayerBoard();
    Render.randomPlace(Player1);
    Render.renderPlayer(Player1);
    Render.setShip('none');
})

playButton.addEventListener('click', () => {
    Player2.initialize();
    Render.createEnemyBoard();
    Render.randomPlace(Player2);
    Render.renderEnemy(Player2);
    playerName.textContent = Player1.name.toUpperCase();
    enemyName.textContent = Player2.name.toUpperCase();

    enemySide.style.display = 'grid';
    enemySide.style.opacity = '1';
    battleshipArea.style.display = 'none';
})

replayButton.addEventListener('click', () => {
    resultScreen.style.display = 'none';
    startScreen.style.display = 'flex';
    startScreen.style.opacity = '1';
})

function mouseMove(e) {
    startX = e.clientX;
    startY = e.clientY;

    document.querySelector(`.${currentShip}`).style.top = `${startY - 10}px`;
    document.querySelector(`.${currentShip}`).style.left = `${startX - 10}px`;
}

function mouseUp(e) {
    document.querySelector(`.${currentShip}`).style.top = `var(--${currentShip}-coord)`;
    document.querySelector(`.${currentShip}`).style.left = 'var(--left-coord)';
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
    currentDiv = document.elementFromPoint(e.clientX, e.clientY).classList[1];
    if (currentDiv) {
        Render.placeBoat();
    }
    currentShip = undefined;
}

function mouseDown(e) {
    currentShip = e.target.className;
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}


carrier.addEventListener('mousedown', mouseDown);
battleship.addEventListener('mousedown', mouseDown);
destroyer.addEventListener('mousedown', mouseDown);
submarine.addEventListener('mousedown', mouseDown);
patrolboat.addEventListener('mousedown', mouseDown);