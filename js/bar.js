class Bar {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 20;
        this.speed = 4;
        this.right  = false;
        this.left = false;
    }

    draw(context) {
        context.fillStyle = "yellow";
        context.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    }

    updateBar(playingArea) {
        if (this.right && this.x < playingArea.width - this.width / 2) {
            this.x += this.speed;
        } else if (this.left && this.x - this.width / 2 > 0) {
            this.x -= this.speed;
        }
    }
}