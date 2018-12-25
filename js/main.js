const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");
context.fillStyle = "#0081D7";
context.fillRect(0, 0, 580, 560);
const updatesPerSecond = 35;
let row = canvas.width / 4
let column = canvas.height - 10;
let addRow = 4;
let addColumn = -4;

function drawBall() {
    context.beginPath();
    context.fillStyle = "white";
    context.arc(row, column, 15, 0, Math.PI * 2);
    context.fill();
    context.closePath();
}

function draw() {
    context.fillStyle = "#0081D7";
    context.fillRect(0, 0, 580, 560);
    drawBall();
    context.fillStyle = "white";
    context.fillRect(250, 500, 100, 20);
    requestAnimationFrame(draw);
}
function update() {
    row += addRow;
    column += addColumn;
}
setInterval(update, 1000/updatesPerSecond);
requestAnimationFrame(draw);
context.fillStyle = "white";
context.fillRect(250, 500, 100, 20);
const button = document.getElementById("start-btn");
button.onclick = function () {
    document.getElementById("initial-screen").style = "display: none",
        document.getElementById("game-screen").style = "display: "
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