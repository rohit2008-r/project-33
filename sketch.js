var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var  particles = [];
var plinkos = [];
var divisions = [];
var particle
var gameState=PLAY;
var PLAY=1;
var END=0;
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    
    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 textSize(30)
 text("500 ",20,550);
 text("500 ",100,550);
 text("500 ",170,550);
 text("500 ",260,550);
 text("100 ",340,550);
 text("100 ",420,550);
 text("100 ",500,550);
 text("200 ",570,550);
 text("200 ",650,550);
 text("200 ",730,550);
 
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
}
function mousePressed(){
 
    
    particle=new Particle(mouseX,10,10,10)
 
  if(particle!==null){
    particle.display();
    if(particle.body.position.Y > 760){
    
      if(particle.body.position.X < 360){
        score=score+500;
        particle=null;
       
  
      }
    }
  }
}