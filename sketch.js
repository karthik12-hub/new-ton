
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball1 = new Ball(10,20,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(267);
  Engine.update(engine)
  
  drawSprites();
 
}



