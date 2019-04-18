class Moon {
  constructor(planet, distanceFromPlanet, size, color, daysInYear, labelText = 'moon', eccentricity = 0){
    this.planet = planet;
    this.x = this.planet.x;
    this.y = this.planet.y;
    this.orbitX = distanceFromPlanet *(1 - eccentricity);
    this.orbitY = distanceFromPlanet *(1 + eccentricity);
    this.orbitX += planet.r/2;
    this.orbitY += planet.r/2;
    this.size = size;
    this.color = color;
    this.theta = 0;
    this.thetaChange = 360/daysInYear/50;
    this.labelText = labelText;

  }

  orbit(){
    this.x = this.orbitX * Math.cos(this.theta) + this.planet.x;
    this.y = this.orbitY * Math.sin(this.theta) + this.planet.y;
    this.theta += this.thetaChange;
    if(this.theta > 360){this.theta = 0;}
  }

  show(){
    //orbital path
    stroke(255);
    noFill();
    ellipse(this.planet.x, this.planet.y, this.orbitX *2, this.orbitY * 2);

    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
    this.orbit();

    textSize(Math.max(this.size * 2, 7));
    text(this.labelText, this.x, this.y - (this.size));
  }
}