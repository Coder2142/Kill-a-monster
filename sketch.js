const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var Heropos;
var hero, platform;
var fly;


function preload() {
//preload the images here
 backgroundImg = loadImage("background.png");
}

function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    platform = new Ground(width/2,height/2,300,10);
    hero = new Hero(200,100,50);
    fly = new Fly(hero.body,{x:200,y:100});
    monster = new Monster(650,100,100);
    block = new Block(500,160,40,40);
    block2 = new Block(500,120,40,40);
    block3 = new Block(500,80,40,40);
    block4 = new Block(500,40,40,40);

    block5 = new Block(540,160,40,40);
    block6 = new Block(540,120,40,40);
    block7 = new Block(540,80,40,40);
    block8 = new Block(540,40,40,40);
  
  // create sprites here

}

function draw() {
  background("white");
  Engine.update(engine);
  if(backgroundImg){
    background(backgroundImg);
}
  platform.display();
  hero.display();
  fly.display();
  monster.display();
  block.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  //drawSprites();
}

function mouseDragged(){
 Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

