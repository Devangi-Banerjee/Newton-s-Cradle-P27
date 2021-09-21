
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var  bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1;
var roofObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	Engine = Engine.create();
	World = Engine.world;

	//Create the Bodies Here.
    roofObject = new Roof(600,500,30,100);

    bobObject1 = new Bob(200,200,7);
    bobObject2 = new Bob(207,200,7);
    bobObject3 = new Bob(214,200,7);
    bobObject4 = new Bob(221,200,7);
    bobObject5 = new Bob(228,200,7);
    
	  rope1=new Rope(bobObject1.body , roofObject.body, -bobDiameter*2,0)
    
	Engine.run(Engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bobObject1.display();
  bobObject2.displa();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();

  roofObject.display();


  drawSprites();
 
}



