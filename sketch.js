const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;



var world,engine,amazingness,ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world;

  amazingness = Bodies.rectangle(200,100,80,80,{restitution:5});
  World.add(world,amazingness);

  //var options={isStatic:false}
  
  ground = Bodies.rectangle(200, 390, 400,20,{isStatic:true});
  World.add(world,ground);
  

}

function draw() {
  background(0);
  Engine.update(engine);  
 rectMode(CENTER);
 rect(amazingness.position.x,amazingness.position.y,50,50)
 rect(ground.position.x, ground.position.y, 400, 20)
}











