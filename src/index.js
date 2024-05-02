import './style.css';
import Player from './player.js';

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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class Render {
    createPlayerBoard(){
        const playerBoard = document.querySelector('.playerBoard');

        for (let x = 0; x < 10; x += 1) {
            for (let y = 0; y < 10; y += 1) {
                let playerDiv = document.createElement('div');
                
                playerBoard.appendChild(playerDiv).classList.add('player', `[${x},${y}]`);
            }
        }
    }

    createEnemyBoard(){
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
    Player2 = new Player('CPU');

    startScreen.style.display = 'none';
    enemySide.style.display = 'none';

    render.createPlayerBoard();
})

randomButton.addEventListener('click', () => {
    Player1.initialize();
    render.clearBoard();
    render.createPlayerBoard();
    render.randomPlace(Player1);
    render.renderPlayer(Player1);
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