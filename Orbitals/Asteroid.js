class Asteroid {
  constructor(sun, distanceFromSun, size, color, daysInYear, labelText = 'planet', eccentricity = 0){
    this.sun = sun;
    this.x = mid - distanceFromSun - this.sun.r;
    this.y = 0;
    this.r = size;
    this.color = color;
    //eccentricity is defined as the percentage difference between the highest(and lowest) point in an orbit and the average height of that orbit. If it is 0, that orbit is circular.
    this.orbitX = this.sun.r + distanceFromSun *(1 - eccentricity);
    this.orbitY = this.sun.r + distanceFromSun *(1 + eccentricity);
    this.theta = 0;
    this.thetaChange = 360/daysInYear/50; //this calculation allows year to be set to the number of earth days in that planet's year, and then scaled for viewability
    this.labelText = labelText;
  }

  orbit(){
    this.x = this.orbitX * Math.cos(this.theta) + mid;
    this.y = this.orbitY * Math.sin(this.theta);
    this.theta += this.thetaChange;
    if(this.theta > 6){this.theta = 0;}
  }
  show(){


    //orbital path
    stroke(255);
    noFill();
    ellipse(mid, 0, this.orbitX *2, this.orbitY * 2);

    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.r);
    this.orbit();

    textSize(Math.max(this.r * 2, 15));
    text(this.labelText, this.x, this.y - (this.r));
  }

}