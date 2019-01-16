class BouncingBox {
    minX() {
        return this.x - this.width/2;
    }

    maxX() {
        return this.x + this.width/2;
    }

    minY() {
        return this.y - this.height/2;
    }

    maxY() {
        return this.y + this.height/2;
    }
}