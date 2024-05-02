import './style.css';
import Player from './player.js';

let newX = 0;
let newY = 0;
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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class Render {
    createPlayerBoard() {
        const playerBoard = document.querySelector('.playerBoard');

        for (let x = 0; x < 10; x += 1) {
            for (let y = 0; y < 10; y += 1) {
                let playerDiv = document.createElement('div');

                playerBoard.appendChild(playerDiv).classList.add('player', `[${x},${y}]`);
            }
        }
    }

    createEnemyBoard() {
        const enemyBoard = document.querySelector('.enemyBoard');

        for (let x = 0; x < 10; x += 1) {
            for (let y = 0; y < 10; y += 1) {
                let enemyDiv = document.createElement('div');

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
                    const ship = document.getElementsByClassName(`player ${x},${y}]`);
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
        }
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
        }
    }

    clearBoard() {
        const playerBoard = document.querySelector('.playerBoard');

        while (playerBoard.firstChild) {
            playerBoard.removeChild(playerBoard.firstChild);
        }
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

    placeBoat(){
        let array = Array.from(currentDiv);
        let player = Player1[currentShip];

        if (currentShip){
            Player1.board.place(player, [parseInt(array[1]),parseInt(array[3])]);
            render.renderPlayer(Player1);
        }
    }

    setShip(state) {
        carrier.style.display = state;
        battleship.style.display = state;
        destroyer.style.display = state;
        submarine.style.display = state;
        patrolboat.style.display = state;
    }
}

const render = new Render;
let Player1;
let Player2;

button.addEventListener('click', () => {
    if (!nameInput.value) {
        errorText.style.display = 'inline';
        return;
    }
    Player1 = new Player(nameInput.value);
    Player1.initialize();
    Player2 = new Player('CPU');

    startScreen.style.display = 'none';
    enemySide.style.display = 'none';

    render.setShip('grid');
    render.createPlayerBoard();
})

randomButton.addEventListener('click', () => {
    Player1.initialize();
    render.clearBoard();
    render.createPlayerBoard();
    render.randomPlace(Player1);
    render.renderPlayer(Player1);
    render.setShip('none');
})

playButton.addEventListener('click', () => {
    Player2.initialize();
    render.createEnemyBoard();
    render.randomPlace(Player2);
    render.renderEnemy(Player2);
    playerName.textContent = Player1.name.toUpperCase();
    enemyName.textContent = Player2.name.toUpperCase();

    enemySide.style.display = 'grid';
    battleshipArea.style.display = 'none';
    console.log(Player1.board)
})

let currentShip;
let currentDiv;

function mouseDown(e) {
    currentShip = e.target.className;
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e) {
    newX = startX - e.clientX;
    newY = startY - e.clientY;
    
    startX = e.clientX;
    startY = e.clientY;
    
    document.querySelector(`.${currentShip}`).style.top = (startY - 10) + 'px';
    document.querySelector(`.${currentShip}`).style.left = (startX - 10) + 'px';
}

function mouseUp(e) {
    document.querySelector(`.${currentShip}`).style.top = `var(--${currentShip}-coord)`;
    document.querySelector(`.${currentShip}`).style.left = 'var(--left-coord)';
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
    currentDiv = document.elementFromPoint(e.clientX, e.clientY).classList[1];
    render.placeBoat();
    currentShip = undefined;
}

carrier.addEventListener('mousedown', mouseDown);
battleship.addEventListener('mousedown', mouseDown);
destroyer.addEventListener('mousedown', mouseDown);
submarine.addEventListener('mousedown', mouseDown);
patrolboat.addEventListener('mousedown', mouseDown);