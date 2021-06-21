const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

function preload()
{
  backgroundImg=loadImage("snow3.jpg");

}


function setup() {
  createCanvas(1200,800);  
  
  
  engine = Engine.create();
  world = engine.world;


  ground=Bodies.rectangle(0,700,1200,50);
  World.add(world,ground);
 //character=createSprite(400, 200, 50, 50,PI/2);
 
 character = new Snow(70, 100, 200,200,PI/2);
 var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1600,
    height: 700,
    wireframes: false
  }
});
//we have not displayed the ground 
}



function draw() {
  background(backgroundImg); 
  Engine.update(engine); 
  
  character.display();

   Matter.Body.setPosition(character.body, {x: 70 , y: 600});

  //character.velocityY=character.velocityY+0.8;
 //Matter.Body.setVelocity(character.body,{x:-2,y:0})
 rect(0,700,1200,50)

 
  // drawSprites();
}

function keyPressed(){
 
   
     if(   === 37){
    
      Matter.Body.setVelocity(character.body, {x: -50 , y: 0});
    
    }


    else if(keyCode === 39){
      
      Matter.Body.setVelocity(character.body, {x: 50 , y: 0});
    
    }


    else if(keyCode === 38){
      
      Matter.Body.setVelocity(character.body, {x: 0 , y: -50});
    
    }

    else if(keyCode === 40){
     
      Matter.Body.setVelocity(character.body, {x: 0 , y: 50});
    
    }

   

  }
//yes I can create world engin 