class Game {
    constructor(options) {
        this.updatesPerSecond = 45;
        this._interval = undefined;
        this.ball = options.ball;
        this.bar = options.bar;
        this.playingArea = options.playingArea;
        this.context = options.context;
        this.score = 29;
        this.level = 1;
        this.onScoreChange = undefined;
        this.onWinningGame = undefined;
        this.winningSound = new Audio("Sounds/winning game/win.mp3");
        this.loosingSound = new Audio("Sounds/loosing game/gameover.wav");
    }

    _drawPlayingArea() {
        this.context.fillStyle = "#0081D7";
        this.context.fillRect(0, 0, this.playingArea.width, this.playingArea.height);
    }

    _draw() {
        this._drawPlayingArea(this.context);
        this.bar.draw(this.context);
        this.ball.draw(this.context);
        requestAnimationFrame(this._draw.bind(this));
    }

    _update() {
        this.bar.updateBar(this.playingArea);
        this.ball.update(this.playingArea, this.bar, this.score);
        if(this.ball._collides(this.ball, this.bar)) {
            this.score += 1;
            this.onScoreChange(this.score);
            this.onWinningGame(this.score);
        }
        if (this.ball.y >= this.playingArea.height) {
            this.onGameOver();
        } else if(this.score >= 0 && this.score <= 20) {
            this.level = 1;
        } else if (this.score > 20 && this.score <= 25) {
            this.level = 2;
            /* this.ball.speedX += 0.10;
            this.ball.speedY -= 0.10; */
        } else if(this.score <= 30) {
            this.level = 3;
            /* this.ball.speedX += 0.05;
            this.ball.speedY -= 0.05; */
        }       
    }

    start(onScoreChange, onWinningGame) {
        this._interval = setInterval(this._update.bind(this), 1000 / this.updatesPerSecond);
        requestAnimationFrame(this._draw.bind(this));
        this.onScoreChange = onScoreChange;
        this.onScoreChange(this.score);
        this.onWinningGame(this.score);
    }

    pause (pauseButton) {
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = undefined;
            pauseButton.innerText = "Resume"
        } else {
            this._interval = setInterval(this._update.bind(this), 1000 / this.updatesPerSecond);
            pauseButton.innerText = "Pause"
        }
    }
}