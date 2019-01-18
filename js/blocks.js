class Block extends BouncingBox {
    constructor(x, y, width, height) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(context) {
        context.beginPath();
        let img = document.getElementById("block")
        context.drawImage(img,this.minX(), this.minY(), this.width, this.height);
        context.fill();
        context.closePath();
    }
}

class Blocks {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 30;
        this.height = 30;
        this.padding = 25;
        this.left = 80;
        this.top = 40;
        this.columns = 8;
        this.rows = 6;
        this.blocks = [];
        for (let i = 0; i < this.columns; i++) {
            for (let j = 0; j < this.rows; j++) {
                let brickX = (i * (this.width + this.padding)) + this.left;
                let brickY = (j * (this.height + this.padding)) + this.top;
                this.blocks.push(new Block(brickX, brickY, this.width,this.height));
            }
        }
    }

    draw(context) {
        this.blocks.forEach(block => block.draw(context));
    }

    update(ball) {
        this.blocks
            .filter(block => ball.bouncesAgainst(block) !== 'none')
            .forEach(block => this.onBlockDestroyed(block));
        this.blocks = this.blocks.filter(block => ball.bouncesAgainst(block) === 'none');
    }
}