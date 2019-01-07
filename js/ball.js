class Ball {
    constructor(x, y, radius, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
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

    _collides(circle, rect) {
        return circle.x + circle.radius >= rect.x - rect.width / 2 &&
        circle.x - circle.radius <= rect.x + rect.width / 2 &&
        circle.y + circle.radius >= rect.y - rect.height / 2 &&
        circle.y - circle.radius <= rect.y + rect.height / 2;
    }

    update(playingArea, rect) {
        if (this.x - this.radius <= 0 || this.x + this.radius >= playingArea.width) {
            console.log("plonch!")
            this.collisionSound.play();
            this.speedX = -this.speedX;
            
        }
        if (this.y - this.radius <= 0) {
            console.log("plonch!")
            this.collisionSound.play();
            this.speedY = -this.speedY;
    
        }
        
        if (this._collides(this, rect)) {
            //this.speedX = -this.speedX;
            this.collisionSound.play();
            this.speedY = -this.speedY - this.increaseSpeed;
            
        }

        this.x += this.speedX;
        this.y += this.speedY;
    }
    
}