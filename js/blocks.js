class Block extends BouncingBox {
    constructor(x, y, width, height) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this._img = document.getElementById("block")
    }

    draw(context) {
        context.beginPath();
        context.drawImage(this._img, this.minX(), this.minY(), this.width, this.height);
        context.fill();
        context.closePath();
    }
}

class Blocks {
    constructor() {
        const width = 30;
        const height = 30;
        const padding = 25;
        const left = 80;
        const top = 40;
        const columns = 8;
        const rows = 6;
        this.blocks = [];
        for (let i = 0; i < columns; i++) {
            for (let j = 0; j < rows; j++) {
                let brickX = (i * (width + padding)) + left;
                let brickY = (j * (height + padding)) + top;
                this.blocks.push(new Block(brickX, brickY, width, height));
            }
        }
        this.onBlockDestroyed = undefined;
    }

    draw(context) {
        this.blocks.forEach(block => block.draw(context));
    }

    update(ball) {

        // Call back to be called when a block has been hitted by the ball and update socore
        this.blocks
            .filter(block => ball.bouncesAgainst(block) !== 'none')
            .forEach(block => this.onBlockDestroyed(block));

        // This deletes the blocks that have been hitted by the ball    
        this.blocks = this.blocks.filter(block => ball.bouncesAgainst(block) === 'none');
    }
}