//const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, 
block13, block14, block15, block16; 
var polygon,polygonImg;

function preload(){
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
   // engine = Engine.create();
    //orld = engine.world;
    
    //level one
    block1 = new Block(300,430,30,40);
    block2 = new Block(330,435,30,40);

    block3 = new Block(360,435,30,40);
    block4 = new Block(390,435,30,40);
    
    block5 = new Block(420,435,30,40);
    block6 = new Block(450,435,30,40);
    
    block7 = new Block(480,435,30,40);

    //level two
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
   
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
   
    block12 = new Block(450,235,30,40);
   
    //level three
    block13 = new Block(360,195,30,40);
   
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
   
    //top
    block16 = new Block(390,155,30,40);

    //polygon
    polygon = Bodies.circle(50,200,20);
    World.add(world, polygon);
    
    slingShot = new SlingShot(this.polygon,{x:100,y:200});

}

function draw(){
     background(0);
     Engine.update(engine);
    
     block1.display();
     block2.display();
     block3.display();
     block4.display();
     block5.display();
     block6.display();
     block7.display();
     block8.display();
     block9.display();
     block10.display();
     block11.display();
     block12.display();
     block13.display();
     block14.display();
     block15.display();
     block16.display();

     imageMode(CENETER);
     image(polygon_img,polygon.positionX, polygon.positionY, 40,40);s
     polygon.display();

     slingShot.display();
 }
 

function mouseDragged() {
    Matter.Body.setPosition(bodyA,{x:mouseX,y:mouseY})
}

function mouseReleased() {
slingShot.fly();
}
