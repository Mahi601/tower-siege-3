const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var r1;
var object;
var engine,world;
var holder,ground;
var stand1,stand2;
var slingShot;
var polygon_img;
var score=0;
function preload(){
    polygon_img=loadImage("polygon.png")
}
function setup(){
    createCanvas(900,400)
    engine=Engine.create();
    world=engine.world;
    Engine.run(engine);
    object=new ball(50,200)
    //ground = new Ground();
    //stand1 = new Stand(390,300,250,10)
    //stand2 = new Stand(700,200,200,10)

    r1=new rope (object.some,{x:250,y:100})
    stand1=new Ground(400,350)
    stand2=new Ground(700,210)

   

    //level one
  //  block1 = new Block(300,275,30,40);
   // console.log(block1);
    block2 = new Block(330,275,30,40)
    block3 = new Block(360,275,30,40)
    block4 = new Block(390,275,30,40)
    block5 = new Block(420,275,30,40)
    block6 = new Block(450,275,30,40)  
    block7 = new Block(480,275,30,40)
    //level two
    block8 = new Block(360,235,30,40)
     block9 = new  Block(390,235,30,40)
     block10 =new Block(420,235,30,40)
     block11 = new Block(450,235,30,40)
     block12 =new Block(390,195,30,40)
   
     block13 =new Block(420,195,30,40)
     block14 =new Block(405,155,30,40)

}
function draw(){
    Engine.update(engine)
    background("red")
  //  block1.display()
  text("Score = "+score ,200,20)
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()

    block2.score()
    block3.score()
    block4.score()
    block5.score()
    block6.score()
    block7.score()
    block8.score()
    block9.score()
    block10.score()
    block11.score()
    block12.score()
    block13.score()
    block14.score()

    stand1.display()
    stand2.display()
    object.display()
    r1.display()
}

function mouseDragged(){
    Matter.Body.setPosition(object.some, {x:mouseX,y:mouseY})
}

function mouseReleased(){
r1.fly()
}