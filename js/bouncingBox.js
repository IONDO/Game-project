class BouncingBox {
    minX() {
        return this.x - this.width / 2;
    }

    maxX() {
        return this.x + this.width / 2;
    }

    minY() {
        return this.y - this.height / 2;
    }

    maxY() {
        return this.y + this.height / 2;
    }

    // checking collison against any box
    // returns either 'none', 'horizontal' or 'vertical'
    bouncesAgainst(box) {
        let bounces = this.maxX() >= box.minX() &&
            this.minX() <= box.maxX() &&
            this.maxY() >= box.minY() &&
            this.minY() <= box.maxY();

        if (!bounces) {
            return 'none';
        }

        let depthX = Math.min(
            (this.maxX() - box.minX()),
            (box.maxX() - this.minX())
        )
        let depthY = Math.min(
            (this.maxY() - box.minY()),
            (box.maxY() - this.minY())
        )

        return (depthY < depthX) ? 'horizontal' : 'vertical';
    }
}