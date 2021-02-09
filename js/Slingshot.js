class Slingshot{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.005,
            length: 1
        };
        console.log(options);
        this.rope = Constraint.create(options);
        this.bodyA = bodyA;
        this.pointB = pointB;
        World.add(world, this.rope);
    }
      attach(bodyA){
          this.rope.bodyA = bodyA;
      }

      fly(){
          this.rope.bodyA = null;
      }

    display(){
        console.log("one");
    if(this.rope.bodyA){
        console.log("two");
        var PointA = this.bodyA;
        var PointB = this.pointB;
        strokeWeight(5);
        stroke("red");
        line(PointA.x, PointA.y, PointB.x, PointB.y);
        noStroke();
        }
    }
}