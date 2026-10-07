const player = document.getElementById('player');
const gameArea = document.getElementById('game-area');
const scoreElement = document.getElementById('score');
const messageElement = document.getElementById('message');
const introScreen = document.getElementById('intro-screen');
const startBtn = document.getElementById('start-btn');
const scoreBoard = document.getElementById('score-board');
const gameOverScreen = document.getElementById('game-over-screen');
const retryBtn = document.getElementById('retry-btn');
const gameOverMsg = document.getElementById('game-over-msg');

let gameWidth = window.innerWidth;
let gameHeight = window.innerHeight;
const playerSpeed = 8; // Movement speed per frame
const playerWidth = 125;
let playerX = (gameWidth / 2) - (playerWidth / 2); // Initial X position centered

window.addEventListener('resize', () => {
    gameWidth = window.innerWidth;
    gameHeight = window.innerHeight;
    playerX = Math.min(playerX, gameWidth - playerWidth);
    player.style.left = playerX + 'px';
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
    ArrowRight: false
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

    // Movement logic
    if (keys.ArrowLeft) {
        playerX = Math.max(0, playerX - playerSpeed);
    }
    if (keys.ArrowRight) {
        playerX = Math.min(gameWidth - playerWidth, playerX + playerSpeed);
    }
    
    player.style.left = playerX + 'px';

    animationFrameId = requestAnimationFrame(gameLoop);
}

// Start button logic
startBtn.addEventListener('click', () => {
    introScreen.style.display = 'none';
    scoreBoard.style.display = 'block';
    gameArea.style.display = 'block';
    
    gameActive = true;
    bubbleTimer = setInterval(createBubble, spawnInterval);
    gameLoop();
});

function createBubble() {
    if (!gameActive || totalBubblesSpawned >= maxBubbles) return;

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Random X position for the bubble
    const bubbleX = Math.random() * (gameWidth - 40); // 40 is bubble width
    bubble.style.left = bubbleX + 'px';
    bubble.style.top = '-40px'; // Start above screen
    
    gameArea.appendChild(bubble);
    totalBubblesSpawned++;
    
    // Make game harder as it progresses
    if (totalBubblesSpawned % 10 === 0) {
        baseFallSpeed += 0.5; // Bubbles fall faster
        clearInterval(bubbleTimer);
        spawnInterval = Math.max(200, spawnInterval - 100); // Spawn faster, min 200ms
        bubbleTimer = setInterval(createBubble, spawnInterval);
    }

    animateBubble(bubble);
}

function animateBubble(bubble) {
    let bubbleY = -40;
    const fallSpeed = baseFallSpeed + Math.random() * 2; // Add some randomness

    function fall() {
        if (!gameActive) {
            bubble.remove();
            return;
        }

        bubbleY += fallSpeed;
        bubble.style.top = bubbleY + 'px';

        // Check collision
        if (checkCollision(bubble, player)) {
            bubble.remove();
            score++;
            scoreElement.textContent = score;
            
            if (score >= maxBubbles) {
                endGame("¡Ganaste! Explotaste todas las burbujas.");
            }
            return;
        }

        // Check if bubble fell out of screen
        if (bubbleY > gameHeight) {
            bubble.remove();
        } else {
            requestAnimationFrame(fall);
        }
    }

    requestAnimationFrame(fall);
}

function checkCollision(rect1Element, rect2Element) {
    const rect1 = rect1Element.getBoundingClientRect();
    const rect2 = rect2Element.getBoundingClientRect();

    // Make the collision area a bit smaller than the actual visual for better feel
    // Specifically target the upper part of the player where the arm/finger is
    const padding = 15;
    
    // The player's bounding rect includes the image, but we only really want to pop
    // if the bubble touches the top area (where the finger is)
    // The finger is around rect2.top, and extends slightly above the main body in our CSS
    // actually, let's just use simple AABB with padding for now, but weighted towards the top half
    return !(
        rect1.top + padding > rect2.bottom || // this handles the bottom limit
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
    if (score < maxBubbles && finalMsg === "") {
         finalMsg = `Explotaste ${score} de ${maxBubbles} burbujas.`;
    }
    
    gameOverMsg.textContent = finalMsg;
    gameOverScreen.style.display = 'flex';
}

// Check if all bubbles finished falling
setInterval(() => {
    if (gameActive && totalBubblesSpawned >= maxBubbles && document.querySelectorAll('.bubble').length === 0) {
        endGame(""); // The specific message logic is handled inside endGame based on score
    }
}, 1000);

// Retry logic
retryBtn.addEventListener('click', () => {
    // Reset variables
    score = 0;
    totalBubblesSpawned = 0;
    baseFallSpeed = 3;
    spawnInterval = 1000;
    playerX = (gameWidth / 2) - (playerWidth / 2);
    player.style.left = playerX + 'px';
    scoreElement.textContent = score;
    
    // Clean remaining bubbles
    document.querySelectorAll('.bubble').forEach(b => b.remove());
    
    // Hide game over screen
    gameOverScreen.style.display = 'none';
    
    // Start game again
    gameActive = true;
    bubbleTimer = setInterval(createBubble, spawnInterval);
    gameLoop();
});
