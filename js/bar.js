class Bar extends BouncingBox {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 20;
        this.speed = 6;
        this.right  = false;
        this.left = false;
    }

    draw(context) {
        context.fillStyle = "yellow";
        context.fillRect(this.minX(), this.minY(), this.width, this.height);
    }

    // Boundaries set on the left and right of the playing area
    updateBar(playingArea) {
        if (this.right && this.maxX() < playingArea.width) {
            this.x += this.speed;
        } else if (this.left && this.minX() > 0) {
            this.x -= this.speed;
        }
    }
}