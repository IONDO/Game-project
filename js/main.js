const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");
const updatesPerSecond = 45;
const playingArea = {
    width: 550,
    height: 560
} // This are the dimensions of the blue side
let ball = {
    x: canvas.width / 2,
    y: canvas.height - 10,
    radius: 15
}
let speedX = 5;
let speedY = -5;

function drawBall() {
    context.beginPath();
    context.fillStyle = "white";
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    context.fill();
    context.closePath();
}

let bar = new Bar(150, 500)

function drawPlayingArea() {
    context.fillStyle = "#0081D7";
    context.fillRect(0, 0, playingArea.width, playingArea.height);
}

function draw() {
    drawPlayingArea();
    drawBall();
    bar.draw(context);
    requestAnimationFrame(draw);
}

function collides(circle, rect) {
    return circle.x + circle.radius >= rect.x - rect.width / 2 &&
        circle.x - circle.radius <= rect.x + rect.width / 2 &&
        circle.y + circle.radius >= rect.y - rect.height / 2 &&
        circle.y - circle.radius <= rect.y + rect.height / 2;
}

function updateBall() {
    if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= playingArea.width) {
        console.log("plonch!")
        speedX = -speedX;
    }
    if (ball.y - ball.radius <= 0) {
        console.log("plonch!")
        speedY = -speedY;

    }
    if (collides(ball, bar)) {
        //speedX = -speedX;
        speedY = -speedY;
    }
    
    ball.x += speedX;
    ball.y += speedY;
}

function update() {
    bar.updateBar(playingArea);
    updateBall();
}

context.fillStyle = "white";
context.fillRect(250, 500, 100, 20);
const startButton = document.getElementById("start-btn");
let interval = undefined;
startButton.onclick = function () {
    document.getElementById("initial-screen").style = "display: none";
    document.getElementById("game-screen").style = "display: ";
    document.addEventListener("keydown", keyDown, false);
    document.addEventListener("keyup", keyUp, false);

    function keyDown(e) {
        if (e.keyCode == 39) {
            bar.right = true;
        } else if (e.keyCode == 37) {
            bar.left = true;
        }
    }

    function keyUp(e) {
        if (e.keyCode == 39) {
            bar.right = false;
        } else if (e.keyCode == 37) {
            bar.left = false;
        }
    }
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