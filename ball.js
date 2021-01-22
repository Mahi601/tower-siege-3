class ball{
    constructor(x,y){
this.some=Bodies.circle(x,y,30)
World.add(world,this.some)
    }
display(){
ellipseMode(RADIUS)
ellipse(this.some.position.x,this.some.position.y,30,30)
}


}