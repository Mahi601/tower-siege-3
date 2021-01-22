
class Ground{
    constructor(x,y){
        var thing={isStatic:true}
this.some=Bodies.rectangle(x,y,200,20,thing)
World.add(world,this.some)
    }
display(){
rectMode(CENTER) 
rect(this.some.position.x,this.some.position.y,200,20)




}


}