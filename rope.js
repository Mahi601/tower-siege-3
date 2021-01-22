class rope{
    constructor(b, p){
        //bodyA, bodyB/pointB, length, stiffness
        var o={
            bodyA: b,
            pointB: p,
            length:200,
            stiffness: 0.2
        }

        this.abc=Matter.Constraint.create(o)
        World.add(world,this.abc)
        this.p=p
    }

     fly(){
       this.abc.bodyA=null
    }

    display(){
    if(this.abc.bodyA){
        strokeWeight(4)
        line(this.abc.bodyA.position.x,this.abc.bodyA.position.y,this.p.x,this.p.y)
    }
}
} 