class Ground{
    constructor(x, y, width, height){
        this.body = Bodies.rectangle(x, y, width, height , {isStatic:true, stiffness: 0.008} );
        this.width = width;
        this.height = height;
	    World.add(world, this.body);
        };

        display(){
            var pos = this.body.position;
            var angle = this.body.angle;
            
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            fill("red");
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            noFill();
            pop();
        }
    }