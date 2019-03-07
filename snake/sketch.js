let s;
let scl = 20;

let food;

function setup(){
    createCanvas(600, 600);
    s = new Snake();
    frameRate(10);
    pickLocation();
}

function pickLocation(){
    let cols = floor(width/scl);
    let rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
    for (let i = 0; i < s.tail.length; i++) {
        if(food.x === s.tail[i].x && food.y === s.tail[i].y){
            pickLocation();
        }
    }
}

function draw() {
   background(51);

   s.death();
   s.update();
   s.show();

   if(s.eat(food)){
    pickLocation();
   }

   fill(255, 0, 100);
   rect(food.x, food.y, scl, scl);
}

function keyPressed(){
    switch (keyCode) {
        case UP_ARROW:
            if(s.currentDir() !== 'vertical') {
                s.dir(0, -1);
            }
            break;
        case DOWN_ARROW:
            if(s.currentDir() !== 'vertical') {
                s.dir(0, 1);
            }
            break;
        case LEFT_ARROW:
            if(s.currentDir() !== 'horizontal') {
                s.dir(-1, 0);
            }
            break;
        case RIGHT_ARROW:
            if(s.currentDir() !== 'horizontal') {
                s.dir(1, 0);
            }
            break;
        default:
            break;
    }
}

