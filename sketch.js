var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side1, side1Sprite;
var side2, side2Sprite;
var side3, side3Sprite;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1,density:2});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	packageSprite.position.x= packageBody.position.x 
	packageSprite.position.y= packageBody.position.y 


	side1Sprite =createSprite(400,650,400,20);
	side1Sprite.shapeColor=color("red");
	var side1_options ={
		isStatic:true
	  }
	  side1 = Bodies.rectangle(400,650,200,20, side1_options);
	  World.add(world,side1);
	  
	side2Sprite =createSprite(190,610,20,100);
	side2Sprite.shapeColor=color("red");
	var side2_options ={
		isStatic:true
	}
	side2 = Bodies.rectangle(190,610,20,100, side2_options);
	World.add(world,side2);

	side3Sprite =createSprite(610,610,20,100);
	side3Sprite.shapeColor=color("red");
	var side3_options ={
		isStatic:true
	}
	side3 = Bodies.rectangle(610,610,20,100, side3_options);
	World.add(world,side3);
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed(); 
 
  rectMode(CENTER); 
  rect(side1.position.x,side1.position.y,400,20);
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageSprite.x= packageBody.position.x 
  	packageSprite.y= packageBody.position.y 
  }
}



