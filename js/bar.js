class Bar extends BouncingBox {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 20;
        this.speed = 6;
        this.right = false;
        this.left = false;
        this._img = document.getElementById("bar");
    }

    draw(context) {
        context.fillStyle = "black";
        context.drawImage(this._img, this.minX(), this.minY(), this.width, this.height);
    }

    // Boundaries set on the left and right of the playing area
    update(playingArea) {
        if (this.right && this.maxX() < playingArea.width) {
            this.x += this.speed;
        } else if (this.left && this.minX() > 0) {
            this.x -= this.speed;
        }
    }
}