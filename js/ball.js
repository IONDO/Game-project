class Ball extends BouncingBox {
    constructor(x, y, radius, speedX, speedY) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.width = radius * 2;
        this.height = radius * 2;
        this.speedX = speedX;
        this.speedY = speedY;
        this.increaseSpeed = 0.2;
        this.collisionSound = new Audio("Sounds/Collision/collision.wav");
    }

    draw(context) {
        context.beginPath();
        context.fillStyle = "green";
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
        context.closePath();
    }
    
    // call back function to update score
    onScore(event) {
        return event;
    }

    // checking collison against bar
    _collides(circle, rect) {
        return circle.maxX() >= rect.minX() &&
            circle.minX() <= rect.maxX() &&
            circle.maxY() >= rect.minY() &&
            circle.minY() <= rect.maxY();
    }

    update(playingArea, rect) {
        // checking collision against left/right side of the playing area
        if (this.x - this.radius <= 0 || this.x + this.radius >= playingArea.width) {
            this.collisionSound.play();
            this.speedX = -this.speedX - this.increaseSpeed;
        }
        // checking collision against the top of the playing area
        if (this.y - this.radius <= 0) {
            this.collisionSound.play();
            this.speedY = -this.speedY + this.increaseSpeed;
            //this.x = Math.random() * 550
            console.log("hit me");
        }
        if (this._collides(this, rect)) {
            this.collisionSound.play();
            this.speedY = -this.speedY - this.increaseSpeed;
        }

        this.x += this.speedX;
        this.y += this.speedY;
    }

}