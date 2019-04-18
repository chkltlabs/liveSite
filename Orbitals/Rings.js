class Rings {

 constructor(planet, maxWidth, minWidth,maxHeight, minHeight){
   this.planet = planet;
   this.maxWidth = this.planet.r + maxWidth;
   this.minWidth = this.planet.r + minWidth;
   this.maxHeight = this.planet.r + maxHeight;
   this.minHeight = this.planet.r + minHeight;
 }

 show(){
   for(let i = this.minHeight,
         j = this.minWidth;
       i < this.maxHeight;
       i += (this.maxHeight - this.minHeight) / 5,
         j += (this.maxWidth - this.minWidth) / 5){
     stroke(255);
     noFill();
     ellipse(this.planet.x, this.planet.y, j, i);
   }

 }


}