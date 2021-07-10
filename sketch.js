var  austronaunt,bathimg,brushimg,drinkimg,eatimg,gymimg,sleppingimg,gyy;
var backgroundimg,zzz;


function preload() {
bathimg = loadAnimation("bath1.png","bath2.png")
brushimg = loadImage("brush.png")
drinkimg  = loadAnimation("drink1.png","drink2.png")
eatimg = loadAnimation("eat1.png","eat2.png")
gymimg = loadAnimation("gym1.png","gym2.png")
backgroundimg = loadImage("iss.png")
 zzz= loadAnimation("move1.png","move.png")
sleppingimg = loadImage("sleep.png")
gyy = loadAnimation("gym11.png","gym12.png")
}



function setup() {
  createCanvas(800,400);
  austronaunt = createSprite(400,200)
  austronaunt.scale=0.1
  austronaunt.addAnimation("running",sleppingimg)

}

function draw() {
  background(backgroundimg);  

  if (keyDown("left")) {
    austronaunt.addAnimation("running",bathimg)
    austronaunt.velocityY=0
    austronaunt.velocityX=0
    austronaunt.x=400
    austronaunt.y=200
  }
  

  if (keyDown("down")) {
    austronaunt.addAnimation("running",gymimg)
    austronaunt.velocityY=0
    austronaunt.velocityX=0
    austronaunt.x=400
    austronaunt.y=200
  }
  if (keyDown("up")) {
    austronaunt.addAnimation("running",gyy) 
    austronaunt.velocityY=0
    austronaunt.velocityX=0
    austronaunt.x=400
    austronaunt.y=200
  }
  if (keyDown("x")) {
  austronaunt.addAnimation("running",sleppingimg)
    austronaunt.velocityY=0
    austronaunt.velocityX=0
    austronaunt.x=400
    austronaunt.y=200
  }
  if (keyDown("b")) {
    austronaunt.addAnimation("running",brushimg)
    austronaunt.velocityY=0
    austronaunt.velocityX=0
    austronaunt.x=400
    austronaunt.y=200
  }

  if (keyDown("z")) {
    austronaunt.addAnimation("running",drinkimg)
    austronaunt.velocityY=0
    austronaunt.velocityX=0
    austronaunt.x=400
    austronaunt.y=200
  }

  if (keyDown("right")) {
    austronaunt.addAnimation("running",eatimg)
    austronaunt.velocityY=0
    austronaunt.velocityX=0
    austronaunt.x=400
    austronaunt.y=200
  }

  if (keyDown("m")) {
    austronaunt.addAnimation("running",eatimg) 
    austronaunt.velocityY=-3
    austronaunt.velocityX=-3
    austronaunt.x=400
    austronaunt.y=200
  }
  
  
  
  
  drawSprites();
}