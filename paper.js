class Paper {
    constructor(x, y, radius) {
      var options = {
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2

    }
      this.body = Bodies.circle(x, y, radius, options);
      this.r= radius
      
      World.add(world, this.body);
}
display(){
    		
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
		
			strokeWeight(3);
      fill("white")
      ellipseMode(RADIUS)
			ellipse(0,0,this.r, this.r);
			pop()
}
}
