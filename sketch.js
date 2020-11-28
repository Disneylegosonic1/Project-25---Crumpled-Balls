
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	binimage = loadImage('dustbingreen.png');
}

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

  paper = new Paper(100,200);
  
  ground = new Ground(750,690,1500,10)

  dustbin1 = new Dustbin (600,625,20,120)
  dustbin2 = new Dustbin (720, 625, 20, 120)
  dustbin3 = new Dustbin (660, 675, 120, 20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  image(binimage, 560,485,200,200);
  paper.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
	}
}


