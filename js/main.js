const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");
const updatesPerSecond = 45;
const playingArea = {
    width: 550,
    height: 560
} // This are the dimensions of the blue side

let ball = new Ball(canvas.width / 3, canvas.height - 12, 15, 5, -5);

let bar = new Bar(150, 500);

function drawPlayingArea() {
    context.fillStyle = "#0081D7";
    context.fillRect(0, 0, playingArea.width, playingArea.height);
}

function draw() {
    drawPlayingArea();
    bar.draw(context);
    ball.draw(context);
    requestAnimationFrame(draw);
}


function update() {
    bar.updateBar(playingArea);
    ball.update(playingArea, bar);
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