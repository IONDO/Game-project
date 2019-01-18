class Game {
    constructor(options) {
        this.updatesPerSecond = 45;
        this._interval = undefined;
        this.ball = options.ball;
        this.bar = options.bar;
        this.blocks = options.blocks
        this.blocks.onBlockDestroyed = this._pointAwarded.bind(this);
        this.playingArea = options.playingArea;
        this.context = options.context;
        this.score = 0;
        this.level = 1;
        this.onScoreChange = undefined;
        this.onWinningGame = undefined;
        this.winningSound = new Audio("Sounds/winning game/win.mp3");
        this.loosingSound = new Audio("Sounds/loosing game/gameover.wav");
    }

    _drawPlayingArea() {
        this.context.fillStyle = "#0094F3";
        this.context.fillRect(0, 0, this.playingArea.width, this.playingArea.height);
    }

    _draw() {
        this._drawPlayingArea(this.context);
        this.blocks.draw(this.context);
        this.ball.draw(this.context);
        this.bar.draw(this.context);
        requestAnimationFrame(this._draw.bind(this));
    }

    _pointAwarded() {
        this.score += 1;
        this.onScoreChange(this.score);
        if(this.blocks.length === 0) {
            this.onWinningGame(this.score);
            this.pause(pauseButton);
            this.winningSound.play();
        }
    }

    _update() {
        let boxes = [this.bar].concat(this.blocks.blocks);
        this.ball.update(this.playingArea, boxes);
        this.bar.update(this.playingArea);
        this.blocks.update(this.ball);
        if (this.ball.y >= this.playingArea.height) {
            this.onGameOver();
        } else if (this.score <= 15) {
            this.level = 1;
        } else if (this.score <= 30) {
            this.level = 2;
        } else {
            this.level = 3;
        }

    }

    start(onScoreChange) {
        this._interval = setInterval(this._update.bind(this), 1000 / this.updatesPerSecond);
        requestAnimationFrame(this._draw.bind(this));
        this.onScoreChange = onScoreChange;
        this.onScoreChange(this.score);
    }

    pause(pauseButton) {
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