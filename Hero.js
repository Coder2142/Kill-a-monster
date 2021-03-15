class Hero {
  constructor(x,y,radius){
    var options = {
      isStatic: true,
    }
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.image = loadImage("superhero-170x170.png");
    this.body=Bodies.circle(this.x,this.y,this.radius/2,options)
    World.add(world,this.body);
  }

  display(){
    var Heropos = this.body.position
    push()
	translate(Heropos.x, Heropos.y);
    imageMode(CENTER);
	image(this.image, 0,0,this.r, this.r)
	pop()
  }
}