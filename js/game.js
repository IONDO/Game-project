class Game {
    constructor(options) {
        this.updatesPerSecond = 45;
        this._interval = undefined;
        this.ball = options.ball;
        this.bar = options.bar;
        this.playingArea = options.playingArea;
        this.context = options.context;
        this.score = 0;
        this.points = undefined;
    }

    _drawPlayingArea() {
        this.context.fillStyle = "#0081D7";
        this.context.fillRect(0, 0, this.playingArea.width, this.playingArea.height);
    }
    points() {
        if(this.ball._collides()) {
            this.score += 1;
        }
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
            this.points(this.score);
        }
        if (this.ball.y >= this.playingArea.height) {
            this.onGameOver();
        }
    }

    start(points) {
        this._interval = setInterval(this._update.bind(this), 1000 / this.updatesPerSecond);
        requestAnimationFrame(this._draw.bind(this));
        this.points = points;
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