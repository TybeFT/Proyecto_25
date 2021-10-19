const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper1,image1;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper1 = new Paper(40,210,50);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	image1 = new Canasta(100,1000);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightgray");
 
  controls();

  paper1.display();
  groundObject.display();
  dustbinObj.display();
  image1.display();

  if(keyDown("UP"))
  {
	image1.body.position.y = 50;
  }
}

function controls()
{
	if(keyDown("UP"))
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80,y:-40});
	}
}
