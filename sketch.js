
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

ball = new Paper(100,100,20);
ball.shapeColor=color("blue");

box1 = new Box(600,645,180,20);
box2 = new Line(490,600,30,130);
box3 = new Long(705,600,30,130);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
Engine . update(engine)

  background(0);
  
  drawSprites();
 
ball.display();

box1.display();
box2.display();
box3.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW ){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

