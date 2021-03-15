class Fly {
    constructor(myBodyA, myPointB){
        var options={
            bodyA:myBodyA,
            pointB: myPointB,
            length:350,
            stiffness: 1,
        }    
        
        this.fly=Constraint.create(options);
        this.pointB = myPointB;
        World.add(world, this.fly);
    }
    
    display(){
        var posA = this.fly.bodyA.position;
        var posB = this.pointB;
         //stroke(0)
        //line(posA.x, posA.y, posB.x, posB.y);
        push();
        pop();
    }
  
}