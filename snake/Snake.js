function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.eat = function (pos) {
        let d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1){
            this.total++;
            return true;
        } else {
            return false;
        }
    };

    /**
     * sets the direction of the snake's movement
     * @param x
     * @param y
     */
    this.dir = function (x, y) {
        this.xspeed = x;
        this.yspeed = y;
    };

    this.reset = function () {
        this.x = 0;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;
        this.total = 0;
        this.tail = [];
        food = null;
        pickLocation();
    };

    this.death = function () {
        for (let i = 0; i < this.tail.length; i++) {
            let pos = this.tail[i];
            let d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                this.reset();
            }
        }

        if(this.y === height-scl && this.yspeed === 1 ||
            this.x === width-scl && this.xspeed === 1 ||
            this.y === 0 && this.yspeed === -1 ||
            this.x === 0 && this.xspeed === -1){
            this.reset();
        }
    };

    /**
     * Moves snake head and governs the tail array, is called every frame by the draw() function in sketch.js
     */
    this.update = function () {
        //creating the tail array and filling it with vectors
        if (this.total === this.tail.length) {
            for (let i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }

        }
        this.tail[this.total - 1] = createVector(this.x, this.y);

        //moving the head of the snake to the next position
        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;
        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl)
    };

    this.show = function () {
        //drawing the tail from the tail array
        fill(255);
        for (let i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        fill(255);
        rect(this.x, this.y, scl, scl);
    };

    this.currentDir = function () {
        if(this.xspeed === 0){return 'vertical';}
        if(this.yspeed === 0){return 'horizontal';}
    }

}