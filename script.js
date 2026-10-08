const player = document.getElementById('player');
const player2 = document.getElementById('player2');
const gameArea = document.getElementById('game-area');
const scoreElement = document.getElementById('score');
const messageElement = document.getElementById('message');
const introScreen = document.getElementById('intro-screen');
const btnClassic = document.getElementById('btn-classic');
const btn2p = document.getElementById('btn-2p');
const btnDodge = document.getElementById('btn-dodge');
const scoreBoard = document.getElementById('score-board');
const gameOverScreen = document.getElementById('game-over-screen');
const retryBtn = document.getElementById('retry-btn');
const gameOverMsg = document.getElementById('game-over-msg');
const menuBtnIngame = document.getElementById('menu-btn-ingame');
const menuBtnGameover = document.getElementById('menu-btn-gameover');

let gameWidth = window.innerWidth;
let gameHeight = window.innerHeight;
const playerSpeed = 8; // Movement speed per frame
const playerWidth = 125;
let playerX = (gameWidth / 2) - (playerWidth / 2); // Initial X position
let player2X = (gameWidth / 2) + (playerWidth / 2);

let gameMode = 'classic'; // 'classic', '2p', 'dodge'

window.addEventListener('resize', () => {
    gameWidth = window.innerWidth;
    gameHeight = window.innerHeight;
    playerX = Math.min(playerX, gameWidth - playerWidth);
    player2X = Math.min(player2X, gameWidth - playerWidth);
    player.style.left = playerX + 'px';
    if (gameMode === '2p') {
        player2.style.left = player2X + 'px';
    }
});

let score = 0;
let totalBubblesSpawned = 0;
const maxBubbles = 100;
let baseFallSpeed = 3;
let spawnInterval = 1000;
let gameActive = false;
let bubbleTimer;
let animationFrameId;

// Smooth movement variables
const keys = {
    ArrowLeft: false,
    ArrowRight: false,
    a: false,
    d: false,
    A: false,
    D: false
};

// Handle player input
document.addEventListener('keydown', (e) => {
    if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = false;
    }
});

function gameLoop() {
    if (!gameActive) return;

    // P1 Movement logic
    if (keys.ArrowLeft) {
        playerX = Math.max(0, playerX - playerSpeed);
    }
    if (keys.ArrowRight) {
        playerX = Math.min(gameWidth - playerWidth, playerX + playerSpeed);
    }
    player.style.left = playerX + 'px';

    // P2 Movement logic
    if (gameMode === '2p') {
        if (keys.a || keys.A) {
            player2X = Math.max(0, player2X - playerSpeed);
        }
        if (keys.d || keys.D) {
            player2X = Math.min(gameWidth - playerWidth, player2X + playerSpeed);
        }
        player2.style.left = player2X + 'px';
    }

    animationFrameId = requestAnimationFrame(gameLoop);
}

function startGame(mode) {
    gameMode = mode;
    introScreen.style.display = 'none';
    scoreBoard.style.display = 'block';
    gameArea.style.display = 'block';
    gameOverScreen.style.display = 'none';

    if (gameMode === '2p') {
        player2.style.display = 'block';
        playerX = (gameWidth / 3) - (playerWidth / 2);
        player2X = (gameWidth * 2 / 3) - (playerWidth / 2);
    } else {
        player2.style.display = 'none';
        playerX = (gameWidth / 2) - (playerWidth / 2);
    }
    
    player.style.left = playerX + 'px';
    player2.style.left = player2X + 'px';
    
    score = 0;
    totalBubblesSpawned = 0;
    baseFallSpeed = 3;
    spawnInterval = 1000;
    scoreElement.textContent = score;
    
    // Clean any remaining elements
    document.querySelectorAll('.bubble, .ball').forEach(b => b.remove());

    gameActive = true;
    bubbleTimer = setInterval(createBubble, spawnInterval);
    gameLoop();
}

btnClassic.addEventListener('click', () => startGame('classic'));
btn2p.addEventListener('click', () => startGame('2p'));
btnDodge.addEventListener('click', () => startGame('dodge'));

function createBubble() {
    if (!gameActive || totalBubblesSpawned >= maxBubbles) return;

    const obj = document.createElement('div');
    obj.classList.add(gameMode === 'dodge' ? 'ball' : 'bubble');
    
    const objWidth = 75;
    const objX = Math.random() * (gameWidth - objWidth); 
    obj.style.left = objX + 'px';
    obj.style.top = '-75px'; 
    
    gameArea.appendChild(obj);
    totalBubblesSpawned++;
    
    // Make game harder as it progresses
    if (totalBubblesSpawned % 10 === 0) {
        baseFallSpeed += 0.5; 
        clearInterval(bubbleTimer);
        spawnInterval = Math.max(200, spawnInterval - 100); 
        bubbleTimer = setInterval(createBubble, spawnInterval);
    }

    animateBubble(obj);
}

function animateBubble(obj) {
    let objY = -75;
    const fallSpeed = baseFallSpeed + Math.random() * 2;

    function fall() {
        if (!gameActive) {
            obj.remove();
            return;
        }

        objY += fallSpeed;
        obj.style.top = objY + 'px';

        // Check collision with Player 1
        let collided = checkCollision(obj, player);
        
        // Check collision with Player 2 if in 2p mode
        if (!collided && gameMode === '2p') {
            collided = checkCollision(obj, player2);
        }

        if (collided) {
            if (gameMode === 'dodge') {
                obj.remove();
                endGame("¡Te quemaste!");
                return;
            } else {
                obj.remove();
                score++;
                scoreElement.textContent = score;
                
                if (score >= maxBubbles) {
                    endGame("¡Ganaste! Explotaste todas las burbujas.");
                }
                return;
            }
        }

        // Check if object fell out of screen
        if (objY > gameHeight) {
            obj.remove();
            
            // In dodge mode, dodging adds to the score (survival)
            if (gameMode === 'dodge') {
                score++;
                scoreElement.textContent = score;
                if (score >= maxBubbles) {
                    endGame("¡Sobreviviste! Eres el maestro de esquivar.");
                }
            }
        } else {
            requestAnimationFrame(fall);
        }
    }

    requestAnimationFrame(fall);
}

function checkCollision(rect1Element, rect2Element) {
    const rect1 = rect1Element.getBoundingClientRect();
    const rect2 = rect2Element.getBoundingClientRect();

    const padding = 15;
    
    return !(
        rect1.top + padding > rect2.bottom || 
        rect1.right - padding < rect2.left ||
        rect1.bottom - padding < rect2.top ||
        rect1.left + padding > rect2.right
    );
}

function endGame(message) {
    gameActive = false;
    clearInterval(bubbleTimer);
    cancelAnimationFrame(animationFrameId);
    
    let finalMsg = message;
    if (finalMsg === "") {
        if (gameMode === 'dodge') {
            finalMsg = `Sobreviviste a ${score} de ${maxBubbles} pelotas.`;
        } else {
             finalMsg = `Explotaste ${score} de ${maxBubbles} burbujas.`;
        }
    }
    
    gameOverMsg.textContent = finalMsg;
    gameOverScreen.style.display = 'flex';
}

// Check if all objects finished falling
setInterval(() => {
    if (gameActive && totalBubblesSpawned >= maxBubbles && document.querySelectorAll('.bubble, .ball').length === 0) {
        endGame("");
    }
}, 1000);

// Retry logic
retryBtn.addEventListener('click', () => {
    startGame(gameMode);
});


// Return to menu logic
function returnToMenu() {
    gameActive = false;
    clearInterval(bubbleTimer);
    cancelAnimationFrame(animationFrameId);
    
    // Clean objects
    document.querySelectorAll('.bubble, .ball').forEach(b => b.remove());
    
    // Hide game interfaces
    gameArea.style.display = 'none';
    scoreBoard.style.display = 'none';
    gameOverScreen.style.display = 'none';
    
    // Show main menu
    introScreen.style.display = 'flex';
}

menuBtnIngame.addEventListener('click', returnToMenu);
menuBtnGameover.addEventListener('click', returnToMenu);
