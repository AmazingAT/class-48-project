var bgImg
var johnImg
var tommyImg
var ballImg
var pinImg

var john
var tommy
var ball
var pin1
var pin2
var pin3
var pin4
var pin5
var score
var gamestate ="play"
var resetButton
var resetImg






function preload(){
  bgImg=loadImage("lane.jpg")
  johnImg=loadImage("john.png")
  tommyImg=loadImage("tommy.png")
  ballImg=loadImage("ball.png")
  pinImg=loadImage("pin.png")
  resetImg=loadImage("reset.png")


  





}


function setup() {
  createCanvas(windowWidth, windowHeight);
  score=0

  
  

   john=createSprite(width/2-100,height-50)
   john.addImage(johnImg)
   john.scale=0.33

   tommy=createSprite(width/2+125,height-50)
   tommy.addImage(tommyImg)
   tommy.scale=0.8

   pin1=createSprite(width/2, height/2-150)
   pin1.addImage(pinImg)
   pin1.scale=0.2
   pin1.velocityX=3

   pin2=createSprite(width/2+30, height/2-150)
   pin2.addImage(pinImg)
   pin2.scale=0.2
   pin2.velocityX=3

   pin3=createSprite(width/2-30, height/2-150)
   pin3.addImage(pinImg)
   pin3.scale=0.2
   pin3.velocityX=3

   pin4=createSprite(width/2+40, height/2-150)
   pin4.addImage(pinImg)
   pin4.scale=0.2
   pin4.velocityX=3

   pin5=createSprite(width/2-40, height/2-150)
   pin5.addImage(pinImg)
   pin5.scale=0.2
   pin5.velocityX=3

   ball=createSprite(width/2+30,height-135)
   ball.addImage(ballImg)
   ball.scale=0.15

   resetButton=createImg("reset.png")
   resetButton.position(width/2+450,40)
   resetButton.size(70,70)
   resetButton.mousePressed(resetGame)







}



function draw() {
  background(bgImg);  
  drawSprites();


  textSize(25)
   fill("white")
  text("Score: "+score,400,121)

  if(gamestate==="play"){

  
  

  
 

  if(keyDown("LEFT_ARROW")){
    ball.x-=6



  }
  if(keyDown("RIGHT_ARROW")){
    ball.x+=6

  }
  if(keyDown("UP_ARROW")){
    ball.y-=6

  }

  if(pin1.x>width/2+80){
    pin1.velocityX=-3
  }

  if(pin2.x>width/2+80){
    pin2.velocityX=-3
  }
  if(pin3.x>width/2+80){
    pin3.velocityX=-3
  }
  if(pin4.x>width/2+80){
    pin4.velocityX=-3

  }
  if(pin5.x>width/2+80){
    pin5.velocityX=-3
  }


  
  if(pin1.x<width/2-40){
    pin1.velocityX=3
  }
  if(pin2.x<width/2-40){
    pin2.velocityX=3
  }
  if(pin3.x<width/2-40){
    pin3.velocityX=3
  }
  if(pin4.x<width/2-40){
    pin4.velocityX=3
  }
  if(pin5.x<width/2-40){
    pin5.velocityX=3
  }

  camera.position.x=width/2
  camera.position.y=height/2-100-ball.positionY


   

  if(ball.isTouching(pin1)){
    score=score+2
    pin1.velocityX=0
    pin1.destroy();

  }

  if(ball.isTouching(pin2)){
    score=score+2
    pin2.velocityX=0
    pin2.destroy();

  }
  if(ball.isTouching(pin3)){
    score=score+2
    pin3.velocityX=0
    pin3.destroy();

  }
  if(ball.isTouching(pin4)){

    score=score+2
    pin4.velocityX=0
    pin4.destroy();
    
  }
  }
  if(ball.isTouching(pin5)){
    score=score+2

    pin5.velocityX=0
    pin5.destroy();
  
   

  }

  if(mousePressedOver(resetButton)){
    
  }

  
  
}


  

function resetGame(){

 




}
 


  


  



