class Monster {
  constructor(x,y,radius){
    var options={
      isStatic:true,
      resitution:5,
      friction:1,
      density:1,
    }
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.image = loadImage("monster-130x130.png");
    this.body=Bodies.circle(this.x,this.y,this.radius/2)
    World.add(world,this.body);
  }

  display(){
    var Monsterpos = this.body.position
    push()
	translate(Monsterpos.x, Monsterpos.y);
    imageMode(CENTER);
	image(this.image, 0,0,this.r, this.r)
	pop()
  }
}