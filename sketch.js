
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var paper, ground;
var leftSide, rightSide, bottom;
var dustbinImg, paperImg;

function preload(){

  dustbinImg = loadImage("dustbingreen.png");

}
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//creating the paper
  paper = new Paper(100, 400, 60);

  //creating the ground
  ground = new Ground(400, 680, 800, 50);
  
	//creating the dustbin
  bottom = new Dustbin(630, 660, 160, 20);
  leftSide = new Dustbin(550, 580, 25, 150);
  rightSide = new Dustbin(700, 580, 25, 150);

	Engine.run(engine);
  
}

function draw() {
  background("cyan");
  
  Engine.update(engine);

  paper.display();

  ground.display();

  bottom.display();
  leftSide.display();
  rightSide.display();

  imageMode(CENTER);
  image(dustbinImg,630,570,200,200);

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:550, y: -600})
  }
}


