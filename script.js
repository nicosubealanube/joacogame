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

// Elementos de Pausa
const pauseScreen = document.getElementById('pause-screen');
const pauseBtnIngame = document.getElementById('pause-btn-ingame');
const resumeBtn = document.getElementById('resume-btn');
const menuBtnPause = document.getElementById('menu-btn-pause');

// Elementos de Música
const bgMusic = document.getElementById('bg-music');
const btnMute = document.getElementById('btn-mute');
const iconSoundOn = document.getElementById('icon-sound-on');
const iconSoundOff = document.getElementById('icon-sound-off');

// Elementos de Perfil, Nombre y Monedas
const playerNameElement = document.getElementById('player-name');
const coinsCountElement = document.getElementById('coins-count');
const gemsCountElement = document.getElementById('gems-count');
const hudCoinsCountElement = document.getElementById('hud-coins-count');
const nameModal = document.getElementById('name-modal');
const nameInput = document.getElementById('name-input');
const nameConfirmBtn = document.getElementById('name-confirm-btn');
const nameCancelBtn = document.getElementById('name-cancel-btn');
const profileBadge = document.getElementById('profile-badge');
const playerImage = document.getElementById('player-image');
const mainEmblemJoaco = document.getElementById('main-emblem-joaco');
const profileAvatarImg = document.getElementById('profile-avatar-img');

// Elementos de la Tienda, Ruletas y Personalizar
const btnShop = document.getElementById('btn-shop');
const btnCustomize = document.getElementById('btn-customize');
const shopScreen = document.getElementById('shop-screen');
const shopBackBtn = document.getElementById('shop-back-btn');
const shopCoinsCount = document.getElementById('shop-coins-count');
const shopGemsCount = document.getElementById('shop-gems-count');
const rouletteBuyBtns = document.querySelectorAll('.roulette-buy-btn');

const skinWinModal = document.getElementById('skin-win-modal');
const skinWinHeader = document.getElementById('skin-win-header');
const skinWinImg = document.getElementById('skin-win-img');
const skinWinName = document.getElementById('skin-win-name');
const skinWinRarity = document.getElementById('skin-win-rarity');
const skinWinCloseBtn = document.getElementById('skin-win-close-btn');
const skinWinEquipBtn = document.getElementById('skin-win-equip-btn');

const customizeModal = document.getElementById('customize-modal');
const skinsGrid = document.getElementById('skins-grid');
const customizeCloseBtn = document.getElementById('customize-close-btn');

const tabRoulettes = document.getElementById('tab-roulettes');
const tabOffers = document.getElementById('tab-offers');
const tabFree = document.getElementById('tab-free');
const tabCoins = document.getElementById('tab-coins');

// Catálogo de Skins / Personajes basados en Joaco
const SKINS_CATALOG = {
    default: {
        id: 'default',
        name: 'Joaco Clásico',
        rarity: 'Inicial',
        rarityClass: 'rarity-common',
        img: 'assets/joaco_ai.png'
    },
    cambiado: {
        id: 'cambiado',
        name: 'Joaco Cambiado',
        rarity: 'Común',
        rarityClass: 'rarity-common',
        img: 'assets/skin_cambiado.png'
    },
    balde: {
        id: 'balde',
        name: 'BaldeJoaco',
        rarity: 'Común',
        rarityClass: 'rarity-common',
        img: 'assets/skin_balde.png'
    },
    gatito: {
        id: 'gatito',
        name: 'GatitoJoaquito',
        rarity: 'Común',
        rarityClass: 'rarity-common',
        img: 'assets/skin_gatito.png'
    },
    pulpos: {
        id: 'pulpos',
        name: 'JoaPulpos',
        rarity: 'Común',
        rarityClass: 'rarity-common',
        img: 'assets/skin_pulpos.png'
    },
    rojo: {
        id: 'rojo',
        name: 'Joaco Urbano',
        rarity: 'Común',
        rarityClass: 'rarity-common',
        img: 'assets/skin_rojo.png'
    },
    planta: {
        id: 'planta',
        name: 'JoaPlanta',
        rarity: 'Raro',
        rarityClass: 'rarity-rare',
        img: 'assets/skin_planta.png'
    },
    colores: {
        id: 'colores',
        name: 'BrillaColores',
        rarity: 'Raro',
        rarityClass: 'rarity-rare',
        img: 'assets/skin_colores.png'
    },
    formas: {
        id: 'formas',
        name: 'JoaFormas',
        rarity: 'Raro',
        rarityClass: 'rarity-rare',
        img: 'assets/skin_formas.png'
    },
    maderino: {
        id: 'maderino',
        name: 'JoacoMaderino',
        rarity: 'Raro',
        rarityClass: 'rarity-rare',
        img: 'assets/skin_maderino.png'
    },
    hielo: {
        id: 'hielo',
        name: 'Joaco Ártico',
        rarity: 'Raro',
        rarityClass: 'rarity-rare',
        img: 'assets/skin_hielo.png'
    },
    fuego: {
        id: 'fuego',
        name: 'Joaco Volcánico',
        rarity: 'Épico',
        rarityClass: 'rarity-epic',
        img: 'assets/skin_fuego.png'
    },
    galaxias: {
        id: 'galaxias',
        name: 'JoaGalaxias',
        rarity: 'Mítico',
        rarityClass: 'rarity-mythic',
        img: 'assets/skin_galaxias.png'
    },
    demond_grama: {
        id: 'demond_grama',
        name: 'Demond Grama',
        rarity: 'Mítico',
        rarityClass: 'rarity-mythic',
        img: 'assets/skin_demond_grama.png'
    },
    hacker: {
        id: 'hacker',
        name: 'Cyber Hacker',
        rarity: 'Mítico',
        rarityClass: 'rarity-mythic',
        img: 'assets/skin_hacker.png'
    },
    diamond: {
        id: 'diamond',
        name: 'Gold Diamond Demond',
        rarity: 'Secreto',
        rarityClass: 'rarity-secret',
        img: 'assets/skin_diamond.png'
    }
};

// Probabilidades parejas de premios por cada ruleta
const ROULETTE_POOLS = {
    starter: [
        { skinId: 'pulpos', weight: 20 },
        { skinId: 'gatito', weight: 20 },
        { skinId: 'balde', weight: 20 },
        { skinId: 'cambiado', weight: 20 },
        { skinId: 'rojo', weight: 14 },
        { skinId: 'planta', weight: 6 }
    ],
    evolved: [
        { skinId: 'maderino', weight: 22 },
        { skinId: 'formas', weight: 22 },
        { skinId: 'colores', weight: 22 },
        { skinId: 'planta', weight: 16 },
        { skinId: 'hielo', weight: 10 },
        { skinId: 'fuego', weight: 8 }
    ],
    hacker: [
        { skinId: 'demond_grama', weight: 28 },
        { skinId: 'galaxias', weight: 28 },
        { skinId: 'diamond', weight: 24 },
        { skinId: 'hacker', weight: 20 }
    ]
};

// --- LÓGICA DE MÚSICA ---
let isMuted = localStorage.getItem('joaco_music_muted') === 'true';
bgMusic.volume = 0.6;
bgMusic.muted = isMuted;

function updateMuteUI() {
    if (isMuted) {
        iconSoundOn.style.display = 'none';
        iconSoundOff.style.display = 'block';
    } else {
        iconSoundOn.style.display = 'block';
        iconSoundOff.style.display = 'none';
    }
}

function tryPlayMusic() {
    if (bgMusic.paused) {
        bgMusic.play().catch(() => {
            // El navegador esperará la primera interacción del usuario
        });
    }
}

updateMuteUI();
tryPlayMusic();

// Desbloquear reproducción automática al hacer clic o presionar cualquier tecla
document.addEventListener('click', tryPlayMusic);
document.addEventListener('keydown', tryPlayMusic);

btnMute.addEventListener('click', (e) => {
    e.stopPropagation();
    isMuted = !isMuted;
    bgMusic.muted = isMuted;
    localStorage.setItem('joaco_music_muted', isMuted);
    updateMuteUI();
    tryPlayMusic();
});

const gameContainer = document.getElementById('game-container');
let gameWidth = gameContainer ? gameContainer.clientWidth : window.innerWidth;
let gameHeight = gameContainer ? gameContainer.clientHeight : window.innerHeight;
const playerSpeed = 8; // Movement speed per frame
let playerWidth = 125;
let playerX = (gameWidth / 2) - (playerWidth / 2); // Initial X position
let player2X = (gameWidth / 2) + (playerWidth / 2);

function updateGameDimensions() {
    if (gameContainer) {
        gameWidth = gameContainer.clientWidth || window.innerWidth;
        gameHeight = gameContainer.clientHeight || window.innerHeight;
    } else {
        gameWidth = window.innerWidth;
        gameHeight = window.innerHeight;
    }
    if (player && player.offsetWidth > 0) {
        playerWidth = player.offsetWidth;
    }
}

let gameMode = 'classic'; // 'classic', '2p', 'dodge'
let pendingMode = null;

// Datos del jugador actual y persistencia por nombre
let currentPlayerName = localStorage.getItem('joaco_last_player') || '';
let playersData = JSON.parse(localStorage.getItem('joaco_players_data') || '{}');

function getPlayerRecord(name) {
    const key = (name || 'JUGADOR').trim().toUpperCase();
    if (!playersData[key]) {
        playersData[key] = {
            coins: 0,
            gems: 0,
            unlockedSkins: ['default'],
            equippedSkin: 'default'
        };
    }
    if (!Array.isArray(playersData[key].unlockedSkins)) {
        playersData[key].unlockedSkins = ['default'];
    }
    if (!playersData[key].equippedSkin || !SKINS_CATALOG[playersData[key].equippedSkin]) {
        playersData[key].equippedSkin = 'default';
    }
    return playersData[key];
}

function savePlayersData() {
    localStorage.setItem('joaco_players_data', JSON.stringify(playersData));
    if (currentPlayerName) {
        localStorage.setItem('joaco_last_player', currentPlayerName);
    }
}

function applyEquippedSkin() {
    const activeName = currentPlayerName || 'JUGADOR';
    const record = getPlayerRecord(activeName);
    const skin = SKINS_CATALOG[record.equippedSkin] || SKINS_CATALOG.default;

    if (playerImage) {
        playerImage.style.backgroundImage = `url('${skin.img}')`;
    }
    if (mainEmblemJoaco) {
        mainEmblemJoaco.src = skin.img;
    }
    if (profileAvatarImg) {
        profileAvatarImg.src = skin.img;
    }
}

function updateProfileUI() {
    if (currentPlayerName) {
        const record = getPlayerRecord(currentPlayerName);
        playerNameElement.textContent = currentPlayerName.toUpperCase();
        coinsCountElement.textContent = record.coins;
        gemsCountElement.textContent = record.gems;
        hudCoinsCountElement.textContent = record.coins;
        if (shopCoinsCount) shopCoinsCount.textContent = record.coins;
        if (shopGemsCount) shopGemsCount.textContent = record.gems;
    } else {
        const record = getPlayerRecord('JUGADOR');
        playerNameElement.textContent = 'JUGADOR';
        coinsCountElement.textContent = record.coins;
        gemsCountElement.textContent = record.gems;
        hudCoinsCountElement.textContent = record.coins;
        if (shopCoinsCount) shopCoinsCount.textContent = record.coins;
        if (shopGemsCount) shopGemsCount.textContent = record.gems;
    }
    applyEquippedSkin();
}

function addCoins(amount) {
    const activeName = currentPlayerName || 'JUGADOR';
    const record = getPlayerRecord(activeName);
    record.coins += amount;
    savePlayersData();
    coinsCountElement.textContent = record.coins;
    hudCoinsCountElement.textContent = record.coins;
    if (shopCoinsCount) shopCoinsCount.textContent = record.coins;
}

// --- LÓGICA DE TIENDA, RULETAS Y PERSONALIZAR ---
const wheelRotations = {
    starter: 0,
    evolved: 0,
    hacker: 0
};
let isSpinningRoulette = false;
let lastWonSkinId = null;
let shopShowcaseTimer = null;
let shopShowcaseTick = 0;

const SHOP_FEATURED_ROTATION = {
    starter: ['cambiado', 'pulpos', 'gatito', 'balde', 'rojo'],
    evolved: ['planta', 'maderino', 'formas', 'colores', 'hielo', 'fuego'],
    hacker: ['diamond', 'demond_grama', 'galaxias', 'hacker']
};

function startShopShowcaseRotation() {
    clearInterval(shopShowcaseTimer);
    shopShowcaseTimer = setInterval(() => {
        if (isSpinningRoulette || shopScreen.style.display === 'none') return;
        shopShowcaseTick++;
        ['starter', 'evolved', 'hacker'].forEach(tier => {
            const list = SHOP_FEATURED_ROTATION[tier];
            const skinId = list[shopShowcaseTick % list.length];
            if (SKINS_CATALOG[skinId]) {
                updateCardShowcase(tier, SKINS_CATALOG[skinId]);
            }
        });
    }, 2800);
}

function openShop() {
    updateProfileUI();
    introScreen.style.display = 'none';
    shopScreen.style.display = 'flex';
    startShopShowcaseRotation();
}

function closeShop() {
    if (isSpinningRoulette) return;
    clearInterval(shopShowcaseTimer);
    shopScreen.style.display = 'none';
    introScreen.style.display = 'flex';
    updateProfileUI();
}

if (btnShop) btnShop.addEventListener('click', openShop);
if (shopBackBtn) shopBackBtn.addEventListener('click', closeShop);

const lastRolledByTier = {
    starter: null,
    evolved: null,
    hacker: null
};

function pickWeightedSkin(tier, unlockedSkins = []) {
    const fullPool = ROULETTE_POOLS[tier] || ROULETTE_POOLS.starter;

    // 1. Priorizar skins de esta ruleta que el jugador todavía NO tenga desbloqueadas
    const unownedPool = fullPool.filter(entry => !unlockedSkins.includes(entry.skinId));

    // 2. Si ya tiene todas las de esta ruleta, usar todo el pool pero sin repetir la última que salió
    let candidatePool = unownedPool.length > 0
        ? unownedPool
        : fullPool.filter(entry => entry.skinId !== lastRolledByTier[tier]);

    // Si hay más de 1 opción disponible y la última que salió está adentro, evitar repetirla seguida
    if (candidatePool.length > 1 && lastRolledByTier[tier]) {
        const withoutLast = candidatePool.filter(entry => entry.skinId !== lastRolledByTier[tier]);
        if (withoutLast.length > 0) {
            candidatePool = withoutLast;
        }
    }

    const totalWeight = candidatePool.reduce((sum, item) => sum + item.weight, 0);
    let rand = Math.random() * totalWeight;
    for (const entry of candidatePool) {
        if (rand < entry.weight) {
            lastRolledByTier[tier] = entry.skinId;
            return SKINS_CATALOG[entry.skinId];
        }
        rand -= entry.weight;
    }
    const chosen = candidatePool[Math.floor(Math.random() * candidatePool.length)];
    lastRolledByTier[tier] = chosen.skinId;
    return SKINS_CATALOG[chosen.skinId];
}

function updateCardShowcase(tier, skin) {
    const imgEl = document.getElementById(`preview-img-${tier}`);
    const nameEl = document.getElementById(`preview-name-${tier}`);
    const rarityEl = document.getElementById(`preview-rarity-${tier}`);
    if (imgEl) imgEl.src = skin.img;
    if (nameEl) nameEl.textContent = skin.name;
    if (rarityEl) {
        rarityEl.textContent = skin.rarity;
        rarityEl.className = `showcase-skin-rarity ${skin.rarityClass}`;
    }
}

function showSkinWinModal(skin, isNew, customTitle) {
    lastWonSkinId = skin.id;
    skinWinHeader.textContent = customTitle || (isNew ? '¡Nueva Skin!' : '¡Skin Obtenida!');
    skinWinImg.src = skin.img;
    skinWinName.textContent = skin.name;
    skinWinRarity.textContent = skin.rarity;
    skinWinRarity.className = `showcase-skin-rarity ${skin.rarityClass}`;
    skinWinEquipBtn.style.display = 'flex';
    skinWinModal.style.display = 'flex';
}

rouletteBuyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (isSpinningRoulette) return;

        const tier = btn.dataset.tier;
        const cost = parseInt(btn.dataset.cost, 10);
        const activeName = currentPlayerName || 'JUGADOR';
        const record = getPlayerRecord(activeName);

        if (record.coins < cost) {
            // Avisar que faltan monedas o invitar a tocar "Gratis!"
            skinWinHeader.textContent = '¡Faltan Monedas!';
            skinWinImg.src = 'assets/joaco_ai.png';
            skinWinName.textContent = `Necesitás ${cost} monedas`;
            skinWinRarity.textContent = `Tenés ${record.coins} (¡Jugá o tocá Gratis!)`;
            skinWinRarity.className = 'showcase-skin-rarity rarity-common';
            skinWinEquipBtn.style.display = 'none';
            skinWinModal.style.display = 'flex';
            return;
        }

        // Descontar monedas y girar la ruleta
        record.coins -= cost;
        savePlayersData();
        updateProfileUI();

        isSpinningRoulette = true;
        const wonSkin = pickWeightedSkin(tier, record.unlockedSkins);
        const wheelEl = document.getElementById(`wheel-${tier}`);

        // Girar entre 5 y 8 vueltas completas
        const extraSpins = (5 + Math.floor(Math.random() * 3)) * 360;
        const randomAngle = Math.floor(Math.random() * 360);
        wheelRotations[tier] += extraSpins + randomAngle;

        if (wheelEl) {
            wheelEl.style.transform = `rotate(${wheelRotations[tier]}deg)`;
        }

        // Alternar vista previa rápidamente por todas las skins mientras gira la rueda
        const pool = ROULETTE_POOLS[tier];
        let cycleIdx = Math.floor(Math.random() * pool.length);
        const previewInterval = setInterval(() => {
            const tempSkin = SKINS_CATALOG[pool[cycleIdx % pool.length].skinId];
            updateCardShowcase(tier, tempSkin);
            cycleIdx++;
        }, 130);

        setTimeout(() => {
            clearInterval(previewInterval);
            updateCardShowcase(tier, wonSkin);

            const isNew = !record.unlockedSkins.includes(wonSkin.id);
            if (isNew) {
                record.unlockedSkins.push(wonSkin.id);
            }
            // Equipar automáticamente la skin ganada
            record.equippedSkin = wonSkin.id;
            savePlayersData();
            applyEquippedSkin();

            isSpinningRoulette = false;
            showSkinWinModal(wonSkin, isNew);
        }, 2650);
    });
});

if (skinWinCloseBtn) {
    skinWinCloseBtn.addEventListener('click', () => {
        skinWinModal.style.display = 'none';
    });
}

if (skinWinEquipBtn) {
    skinWinEquipBtn.addEventListener('click', () => {
        if (lastWonSkinId) {
            const activeName = currentPlayerName || 'JUGADOR';
            const record = getPlayerRecord(activeName);
            record.equippedSkin = lastWonSkinId;
            savePlayersData();
            applyEquippedSkin();
        }
        skinWinModal.style.display = 'none';
    });
}

// Botones de la barra inferior de la Tienda (Ruletas, Ofertas, Gratis!, Monedas)
function setActiveShopTab(tabBtn) {
    document.querySelectorAll('.shop-tab').forEach(t => t.classList.remove('active'));
    if (tabBtn) tabBtn.classList.add('active');
}

if (tabRoulettes) {
    tabRoulettes.addEventListener('click', () => setActiveShopTab(tabRoulettes));
}

if (tabFree) {
    tabFree.addEventListener('click', () => {
        setActiveShopTab(tabFree);
        // Regalo gratis de monedas para probar las ruletas
        addCoins(1000);
        skinWinHeader.textContent = '¡Regalo Gratis!';
        skinWinImg.src = 'assets/joaco_ai.png';
        skinWinName.textContent = '+1000 Monedas';
        skinWinRarity.textContent = '¡Listas para girar la ruleta!';
        skinWinRarity.className = 'showcase-skin-rarity rarity-mythic';
        skinWinEquipBtn.style.display = 'none';
        skinWinModal.style.display = 'flex';
    });
}

if (tabOffers) {
    tabOffers.addEventListener('click', () => {
        setActiveShopTab(tabOffers);
        skinWinHeader.textContent = '¡Oferta Especial!';
        skinWinImg.src = 'assets/skin_fuego.png';
        skinWinName.textContent = 'Joaco Volcánico';
        skinWinRarity.textContent = 'Disponible en la Ruleta Evolucionada';
        skinWinRarity.className = 'showcase-skin-rarity rarity-epic';
        skinWinEquipBtn.style.display = 'none';
        skinWinModal.style.display = 'flex';
    });
}

if (tabCoins) {
    tabCoins.addEventListener('click', () => {
        setActiveShopTab(tabCoins);
        addCoins(2500);
        skinWinHeader.textContent = '¡Cofre de Monedas!';
        skinWinImg.src = 'assets/skin_diamond.png';
        skinWinName.textContent = '+2500 Monedas';
        skinWinRarity.textContent = '¡A girar las ruletas!';
        skinWinRarity.className = 'showcase-skin-rarity rarity-rare';
        skinWinEquipBtn.style.display = 'none';
        skinWinModal.style.display = 'flex';
    });
}

// Armario / Personalizar para elegir cualquiera de las skins desbloqueadas
function renderCustomizeGrid() {
    if (!skinsGrid) return;
    skinsGrid.innerHTML = '';
    const activeName = currentPlayerName || 'JUGADOR';
    const record = getPlayerRecord(activeName);

    Object.values(SKINS_CATALOG).forEach(skin => {
        const isUnlocked = record.unlockedSkins.includes(skin.id);
        const isEquipped = record.equippedSkin === skin.id;

        const card = document.createElement('div');
        card.className = `skin-item-card ${isEquipped ? 'equipped' : ''} ${!isUnlocked ? 'locked' : ''}`;

        let badgeText = 'Bloqueado 🔒';
        if (isEquipped) badgeText = 'En uso ✓';
        else if (isUnlocked) badgeText = 'Elegir';

        card.innerHTML = `
            <img src="${skin.img}" alt="${skin.name}" class="skin-item-thumb">
            <span class="skin-item-title">${skin.name}</span>
            <span class="showcase-skin-rarity ${skin.rarityClass}" style="font-size:15px;">${skin.rarity}</span>
            <span class="skin-item-badge">${badgeText}</span>
        `;

        if (isUnlocked) {
            card.addEventListener('click', () => {
                record.equippedSkin = skin.id;
                savePlayersData();
                applyEquippedSkin();
                renderCustomizeGrid();
            });
        }

        skinsGrid.appendChild(card);
    });
}

if (btnCustomize) {
    btnCustomize.addEventListener('click', () => {
        renderCustomizeGrid();
        customizeModal.style.display = 'flex';
    });
}

if (customizeCloseBtn) {
    customizeCloseBtn.addEventListener('click', () => {
        customizeModal.style.display = 'none';
    });
}

// Inicializar UI con el último jugador si existe
updateProfileUI();

function handleViewportChange() {
    updateGameDimensions();
    playerX = Math.max(0, Math.min(playerX, gameWidth - playerWidth));
    player2X = Math.max(0, Math.min(player2X, gameWidth - playerWidth));
    player.style.left = playerX + 'px';
    if (gameMode === '2p') {
        player2.style.left = player2X + 'px';
    }
}

window.addEventListener('resize', handleViewportChange);
window.addEventListener('orientationchange', () => {
    setTimeout(handleViewportChange, 120);
});

let score = 0;
let totalBubblesSpawned = 0;
const maxBubbles = 100;
let baseFallSpeed = 3;
let spawnInterval = 1000;
let gameActive = false;
let isPaused = false;
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

// --- CONTROLES TÁCTILES PARA CELULAR / TABLET ---
const touchLeftBtn = document.getElementById('touch-left-btn');
const touchRightBtn = document.getElementById('touch-right-btn');

function bindTouchDirectionButton(btn, keyName) {
    if (!btn) return;
    const press = (e) => {
        e.preventDefault();
        e.stopPropagation();
        tryPlayMusic();
        keys[keyName] = true;
        btn.classList.add('pressed');
    };
    const release = (e) => {
        e.preventDefault();
        e.stopPropagation();
        keys[keyName] = false;
        btn.classList.remove('pressed');
    };
    btn.addEventListener('touchstart', press, { passive: false });
    btn.addEventListener('touchend', release, { passive: false });
    btn.addEventListener('touchcancel', release, { passive: false });
    btn.addEventListener('mousedown', press);
    btn.addEventListener('mouseup', release);
    btn.addEventListener('mouseleave', release);
}

bindTouchDirectionButton(touchLeftBtn, 'ArrowLeft');
bindTouchDirectionButton(touchRightBtn, 'ArrowRight');

// Convierte la posición del dedo en la coordenada X horizontal del juego (incluso si está rotado 90° en portrait)
function getLocalGameX(touch) {
    const isPortraitRotated = window.innerWidth <= 950 && window.innerHeight > window.innerWidth;
    if (isPortraitRotated) {
        return (touch.clientY / window.innerHeight) * gameWidth;
    }
    return (touch.clientX / window.innerWidth) * gameWidth;
}

function handleGameAreaTouch(e) {
    if (!gameActive || isPaused) return;
    // Ignorar si el toque fue sobre los botones de flecha
    if (e.target && e.target.closest && e.target.closest('.touch-dir-btn')) return;

    e.preventDefault();
    tryPlayMusic();
    updateGameDimensions();

    for (let i = 0; i < e.touches.length; i++) {
        const t = e.touches[i];
        if (t.target && t.target.closest && t.target.closest('.touch-dir-btn')) continue;

        const localX = getLocalGameX(t);
        const targetX = Math.max(0, Math.min(gameWidth - playerWidth, localX - (playerWidth / 2)));

        if (gameMode === '2p') {
            // En modo 2 jugadores: mitad izquierda controla J1, mitad derecha controla J2
            if (localX < gameWidth / 2) {
                playerX = targetX;
                player.style.left = playerX + 'px';
            } else {
                player2X = targetX;
                player2.style.left = player2X + 'px';
            }
        } else {
            playerX = targetX;
            player.style.left = playerX + 'px';
        }
    }
}

if (gameArea) {
    gameArea.addEventListener('touchstart', handleGameAreaTouch, { passive: false });
    gameArea.addEventListener('touchmove', handleGameAreaTouch, { passive: false });
}

function tryLockLandscape() {
    if (screen.orientation && typeof screen.orientation.lock === 'function') {
        screen.orientation.lock('landscape').catch(() => {});
    }
}

// Handle player input
document.addEventListener('keydown', (e) => {
    if (nameModal.style.display === 'flex') {
        if (e.key === 'Enter') {
            confirmNameAndProceed();
        } else if (e.key === 'Escape') {
            closeNameModal();
        }
        return;
    }

    // Atajo de teclado para pausar/reanudar durante la partida (P o Escape)
    if (gameActive && (e.key === 'p' || e.key === 'P' || e.key === 'Escape')) {
        togglePause();
        return;
    }

    if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = false;
    }
});

function togglePause() {
    if (!gameActive) return;
    isPaused = !isPaused;
    if (isPaused) {
        pauseScreen.style.display = 'flex';
    } else {
        pauseScreen.style.display = 'none';
    }
}

pauseBtnIngame.addEventListener('click', togglePause);
resumeBtn.addEventListener('click', () => {
    if (isPaused) togglePause();
});

function gameLoop() {
    if (!gameActive) return;

    if (!isPaused) {
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
    }

    animationFrameId = requestAnimationFrame(gameLoop);
}

// Si ya sabemos el nombre del jugador, arrancamos directo; si no (o si tocó el perfil), abrimos el modal
function askNameForMode(mode) {
    if (mode && currentPlayerName) {
        startGame(mode);
        return;
    }
    pendingMode = mode;
    nameInput.value = currentPlayerName;
    nameModal.style.display = 'flex';
    setTimeout(() => {
        nameInput.focus();
        nameInput.select();
    }, 30);
}

function closeNameModal() {
    nameModal.style.display = 'none';
    pendingMode = null;
}

function confirmNameAndProceed() {
    const enteredName = nameInput.value.trim().toUpperCase();
    currentPlayerName = enteredName || 'JUAN';
    getPlayerRecord(currentPlayerName);
    savePlayersData();
    updateProfileUI();

    const modeToStart = pendingMode;
    closeNameModal();

    if (modeToStart) {
        startGame(modeToStart);
    }
}

nameConfirmBtn.addEventListener('click', confirmNameAndProceed);
nameCancelBtn.addEventListener('click', closeNameModal);

// También permitir cambiar de usuario tocando el perfil arriba a la izquierda
profileBadge.addEventListener('click', () => {
    askNameForMode(null);
});

function startGame(mode) {
    gameMode = mode;
    tryLockLandscape();
    introScreen.style.display = 'none';
    scoreBoard.style.display = 'block';
    gameArea.style.display = 'block';
    gameOverScreen.style.display = 'none';
    pauseScreen.style.display = 'none';

    updateGameDimensions();

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
    isPaused = false;
    scoreElement.textContent = score;
    updateProfileUI();
    
    // Clean any remaining elements
    document.querySelectorAll('.bubble, .ball').forEach(b => b.remove());

    gameActive = true;
    clearInterval(bubbleTimer);
    bubbleTimer = setInterval(createBubble, spawnInterval);
    cancelAnimationFrame(animationFrameId);
    gameLoop();
}

btnClassic.addEventListener('click', () => askNameForMode('classic'));
btn2p.addEventListener('click', () => askNameForMode('2p'));
btnDodge.addEventListener('click', () => askNameForMode('dodge'));

function createBubble() {
    if (!gameActive || isPaused || totalBubblesSpawned >= maxBubbles) return;

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

        if (isPaused) {
            requestAnimationFrame(fall);
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
                // Cada burbuja que tocas suma 1 moneda
                addCoins(1);
                
                if (score >= maxBubbles) {
                    endGame("¡Ganaste! Explotaste todas las burbujas.");
                }
                return;
            }
        }

        // Check if object fell out of screen
        if (objY > gameHeight) {
            obj.remove();
            
            // In dodge mode, dodging adds to the score and gives 1 coin
            if (gameMode === 'dodge') {
                score++;
                scoreElement.textContent = score;
                addCoins(1);
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
    isPaused = false;
    clearInterval(bubbleTimer);
    cancelAnimationFrame(animationFrameId);
    pauseScreen.style.display = 'none';
    
    let finalMsg = message;
    if (finalMsg === "") {
        if (gameMode === 'dodge') {
            finalMsg = `Sobreviviste a ${score} de ${maxBubbles} pelotas.`;
        } else {
             finalMsg = `Explotaste ${score} de ${maxBubbles} burbujas (+${score} monedas).`;
        }
    }
    
    gameOverMsg.textContent = finalMsg;
    gameOverScreen.style.display = 'flex';
}

// Check if all objects finished falling
setInterval(() => {
    if (gameActive && !isPaused && totalBubblesSpawned >= maxBubbles && document.querySelectorAll('.bubble, .ball').length === 0) {
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
    isPaused = false;
    clearInterval(bubbleTimer);
    cancelAnimationFrame(animationFrameId);
    
    // Clean objects
    document.querySelectorAll('.bubble, .ball').forEach(b => b.remove());
    
    // Hide game interfaces
    gameArea.style.display = 'none';
    scoreBoard.style.display = 'none';
    gameOverScreen.style.display = 'none';
    pauseScreen.style.display = 'none';
    
    // Actualizar monedas y nombre en pantalla principal
    updateProfileUI();

    // Show main menu
    introScreen.style.display = 'flex';
}

menuBtnIngame.addEventListener('click', returnToMenu);
menuBtnGameover.addEventListener('click', returnToMenu);
menuBtnPause.addEventListener('click', returnToMenu);

// Level selector nodes (1 - 2 - 3)
const levelNodes = document.querySelectorAll('.level-node');
levelNodes.forEach(node => {
    node.addEventListener('click', () => {
        levelNodes.forEach(n => n.classList.remove('active'));
        node.classList.add('active');
    });
});
