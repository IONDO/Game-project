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
        this.collisionSound = new Audio("Sounds/collision/bip.mpeg");
        this.increaseSpeed = 0.2;
    }

    draw(context) {
        context.beginPath();
        context.fillStyle = "#006bb5";
        context.arc(this.x, this.y + 5, this.radius, 0, Math.PI * 2);
        context.fill();
        context.closePath();
        context.beginPath();
        context.fillStyle = "white";
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
        context.closePath();
    }

    update(playingArea, boxes) {
        this.x += this.speedX;
        this.y += this.speedY;

        // checking collision against left/right side of the playing area
        if (this.x - this.radius <= 0 || this.x + this.radius >= playingArea.width) {
            this.collisionSound.play();
            this.speedX = -this.speedX - this.increaseSpeed;
        }
        // checking collision against the top of the playing area
        if (this.y - this.radius <= 0) {
            this.collisionSound.play();
            this.speedY = -this.speedY ;
            //this.x += 20;
            //this.x = Math.random() * 550
            console.log("hit me");
        }

        boxes.forEach(box => {
            switch(this.bouncesAgainst(box)) {
                case 'vertical':
                    this.collisionSound.play();
                    console.log("Vertical")
                    this.speedX = -this.speedX;
                    break;
                case 'horizontal':
                    this.collisionSound.play();
                    console.log("Horizontal")
                    this.speedY = -this.speedY;
                    break;
                case 'none':
                    console.log("None");
            }                
        });


    }

}