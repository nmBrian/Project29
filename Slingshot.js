class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

       
    }

    fly(){
        this.sling.bodyA = null;
    }

    attacher(bodyA)
    {
        this.sling.bodyA=bodyA;
    }

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(30, 63, 32);
            strokeWeight(10);          
            line(pointA.x,pointA.y,pointB.x,pointB.y);
      
        }
  
    }
    
}