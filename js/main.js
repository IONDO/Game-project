const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");
context.fillStyle = "#0081D7";
context.fillRect(0, 0, 680, 560);
context.beginPath();
context.fillStyle = "white";
context.arc(200, 100, 15, 0, Math.PI * 2);
context.fill();
context.closePath();
context.fillStyle = "white";
context.fillRect(100, 300, 100, 20);
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
