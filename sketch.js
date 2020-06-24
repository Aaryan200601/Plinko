const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var borderTop, borderDown, borderLeft, borderRight;
var division, particles, plinkos;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  
  borderTop = new Border(width/2, 5, width, 10);
  borderDown = new Border(width/2, height-5, width, 10);
  borderRight = new Border(5, height/2, 10, height);
  borderLeft = new Border(width-5, height/2, 10, height);
}

function draw() {
  background(50); 
  for(var k = 0; k<=width; k= k+80)
  {
    divisions.push(new Division(k, height+divisionHeight/2, 10, divisionHeight))
  }

  for(var j =40; j<=width;j = j + 50)
  {
    plinkos.push(new Plinko(j, 75));
  }

  for(var j =15; j<=width-10; j = j + 50)
  {
    plinkos.push(new Plinko(j, 75));
  }

  if(frameCount%60 == 0)
  {
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }

  borderTop.display();
  borderDown.display();
  borderLeft.display();
  borderRight.display();

  drawSprites();
}

function newParticle()
{

}