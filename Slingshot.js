class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        //this.sling1 = loadImage("sprites/sling1.png");
        //this.sling2 = loadImage("sprites/sling2.png");
       // this.sling3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
        score = score-25;
    }
    attach(body){
        this.sling.bodyA = body;

    }

    display(){
      
        if(this.sling.bodyA){
            strokeWeight(10);
            stroke(48,22,8);
  var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            /*if (pointA.x < 200){
                line(pointA.x - 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 25, pointA.y, pointB.x + 30, pointB.y);
                image(this.sling3, pointA.x - 25, pointA.y-15, 15, 30);
            }
            else{
                line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y);
                image(this.sling3, pointA.x + 25, pointA.y-15, 15, 30);
            }*/
            
        
        }
       // image(this.sling1, 200, 20);
        //image(this.sling2, 170, 20);
        
        
    }
    
}