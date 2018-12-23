const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");
context.beginPath();
context.rect(0, 0, 680, 560);
context.fillStyle = "green";
context.fill();
context.closePath();
const button = document.getElementById("start-btn");
button.onclick = function () {
    document.getElementById("initial-screen").style = "display: none",
        document.getElementById("game-screen").style = "display: "
    const game = document.getElementById("game-screen");
    let timeout = window.setTimeout(() => {
        game.style = "display: none";
        document.getElementById("winner-screen").style = "display: "
    }, 3000);
    const winnerScreen = document.getElementById("winner-screen")
    window.setTimeout(() => {
        winnerScreen.style = "display: none";
        document.getElementById("loser-screen").style = "display: "
    }, 6000);
}