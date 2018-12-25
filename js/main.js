const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");
context.fillStyle = "#0081D7";
context.fillRect(0, 0, 580, 560);
const updatesPerSecond = 35;
const playingArea = {
    width: 580,
    height: 560
}
let x = canvas.width / 4
let y = canvas.height - 10;
let speedX = 4;
let speedY = -4;

function drawBall() {
    context.beginPath();
    context.fillStyle = "white";
    context.arc(x, y, 15, 0, Math.PI * 2);
    context.fill();
    context.closePath();
}

function draw() {
    context.fillStyle = "#0081D7";
    context.fillRect(0, 0, 580, 560);
    drawBall();
    context.fillStyle = "white";
    context.fillRect(250, 500, 90, 20);
    requestAnimationFrame(draw);
}

function update() {
    if (x <= 0 || x >= playingArea.width) {
        console.log("plonch!")
        speedX = -speedX;
    }
    if (y <= 0 || y >= playingArea.height) {
        console.log("plonch!")
        speedY = -speedY;
    }
    x += speedX;
    y += speedY;
}

context.fillStyle = "white";
context.fillRect(250, 500, 100, 20);
const startButton = document.getElementById("start-btn");
let interval = undefined;
startButton.onclick = function () {
    document.getElementById("initial-screen").style = "display: none";
    document.getElementById("game-screen").style = "display: ";
    interval = setInterval(update, 1000 / updatesPerSecond);
    requestAnimationFrame(draw);

    /* const game = document.getElementById("game-screen");
    let timeout = window.setTimeout(() => {
        game.style = "display: none";
        document.getElementById("winner-screen").style = "display: "
    }, 3000);
    const winnerScreen = document.getElementById("winner-screen")
    window.setTimeout(() => {
        winnerScreen.style = "display: none";
        document.getElementById("loser-screen").style = "display: "
    }, 6000); */
}

const pauseButton = document.getElementById("pause");
pauseButton.onclick = function () {
    if (interval) {
        clearInterval(interval);
        interval = undefined;
        pauseButton.innerText = "Resume"
    } else {
        interval = setInterval(update, 1000 / updatesPerSecond);
        pauseButton.innerText = "Pause"
    }
}