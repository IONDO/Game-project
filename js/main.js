const canvas = document.getElementById("screen");
const game = new Game({
    ball: new Ball(225, 450, 10, 5, -5),
    bar: new Bar(425, 500),
    blocks: new Blocks(),
    playingArea: {
        width: 550,
        height: 560
    },
    context: canvas.getContext("2d")
});

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);

function keyDown(e) {
    if (e.keyCode == 39) {
        game.bar.right = true;
    } else if (e.keyCode == 37) {
        game.bar.left = true;
    }
}

function keyUp(e) {
    if (e.keyCode == 39) {
        game.bar.right = false;
    } else if (e.keyCode == 37) {
        game.bar.left = false;
    }
}

const startButton = document.getElementById("start-btn");
game.onScoreChange = (score) => {
    document.getElementById('score').innerHTML = "Score: " + score;
    document.getElementById('level').innerHTML = "Level: " + game.level;
};
startButton.onclick = () => {
    document.getElementById("initial-screen").style = "display: none";
    document.getElementById("game-screen").style = "display: ";
    game.start();
};

const pauseButton = document.getElementById("pause");
pauseButton.onclick = game.pause.bind(game, pauseButton);

game.onGameOver = () => {
        let gameOver = document.getElementById('gameover-screen');
        document.getElementById("game-screen").style  = "display: none";
        gameOver.style = "display: block";
}

game.onWinningGame = () => {
    document.getElementById("game-screen").style = "display: none";
    document.getElementById("winner-screen").style = "display: ";
}

const restartButton = document.getElementById("restart");
restartButton.onclick = function () {
    document.getElementById("gameover-screen").style = "display: none";
    document.getElementById("game-screen").style = "display: ";
    location.reload();
}

const reIniitateButton = document.getElementById("reinitate-game");
reIniitateButton.onclick = function () {
    document.getElementById("winner-screen").style = "display: none";
    document.getElementById("game-screen").style = "display: ";
    location.reload();
}

