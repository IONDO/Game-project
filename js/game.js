class Game {
    constructor(options) {
        this.updatesPerSecond = 45;
        this._interval = undefined;
        this.ball = options.ball;
        this.bar = options.bar;
        this.playingArea = options.playingArea;
        this.context = options.context;
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
        this.ball.update(this.playingArea, this.bar);
    }

    start() {
        this._interval = setInterval(this._update.bind(this), 1000 / this.updatesPerSecond);
        requestAnimationFrame(this._draw.bind(this));
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