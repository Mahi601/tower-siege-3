class Block{
    constructor(x,y){
this.some=Bodies.rectangle(x,y,30,40)
World.add(world,this.some)
this.visi=255
this.mg=loadImage("sq.jpg")
    }

display(){

//console.log(this.some.speed)

if(this.some.speed<6){
    imageMode(CENTER) 
    image(this.mg,this.some.position.x,this.some.position.y,30,40)    
}

else{
    World.remove(world,this.some)
  tint(255,this.visi)  
  this.visi=this.visi-5
 // imageMode(CENTER)
  //image(this.mg,this.some.position.x,this.some.position.y,30,40)    

}


}

score(){
    console.log(score)
  if(this.visi<50 && this.visi>-100){
      score=score+10
  }  
}

}