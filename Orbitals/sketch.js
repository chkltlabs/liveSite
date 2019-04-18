let sun,
mercury,
venus,
earth,
mun,
mars,
jupiter,
io,
europa,
ganymede,
callisto,
saturn,
satRings;
const mid = window.innerWidth/2;
const scale = 6000;
let stuff = [];
function setup() {
  createCanvas(mid*2, 4500);
  stuff.push(sun = new Sun(1392684, 'yellow'));
  stuff.push(mercury = new Planet(sun,57909000,  4880, 'brown', 88, 'Mercury', 0.2056));
  stuff.push(venus = new Planet(sun,108160000,  12104, 'orange', 224, "Venus", 0.006772));
  stuff.push(earth = new Planet(sun,149600000, 12756, 'blue', 365, 'Earth', 0.0167086));
  stuff.push(mun = new Moon(earth, 2, 1, 'white', 30, 'The Moon', 0.05));
  stuff.push(mars = new Planet(sun,227990000,  6792, 'red', 687, 'Mars', 0.0934));
  stuff.push(jupiter = new Planet(sun,778360000, 142984, 'red', 4332, "Jupiter", 0.0489));
  stuff.push(io = new Moon(jupiter, 2, 3.5, 'white', 1.77, "Io"));
  stuff.push(europa = new Moon(jupiter, 3.5, 3.5, 'white', 3.5, "Europa"));
  stuff.push(ganymede = new Moon(jupiter, 5.3, 5.2, 'white', 7.15, "Ganymede"));
  stuff.push(callisto = new Moon(jupiter, 9.4, 5.5, 'white', 16.7, "Callisto"));
  stuff.push(saturn = new Planet(sun,1433500000, 120536, 'yellow', 10759, 'Saturn', 0.0565));
  stuff.push(satRings = new Rings(saturn, -2, -8, 24, 10));

}



function draw() {
  background(0);
  stuff.forEach(thing => thing.show());
  textSize(50);
  fill(255);
  text("Erik's Final", 20, 50);
  textSize(18);
  text("A scale model of our solar system. \n 1 pixel = 10000km scale, \n and orbital distances have been further divided by 60. \n Orbital eccentricities are normalized along the vertical axis for viewability, \n and orbital periods have been accelerated equally", 20, 68);
  text(Math.floor(frameRate()), 20, window.innerHeight + window.scrollY - 20);

}

