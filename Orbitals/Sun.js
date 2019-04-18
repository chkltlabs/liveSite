class Sun {
  constructor(size, color){
    this.x = mid;
    this.y = 0;
    this.r = size/scale;
    this.color = color;

  }


  show(){
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.r);

  }

}