var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock,score=0;
var gameState = "play"

function preload  (){
 towerImg = loadImage("tower.png")
 climberImg =loadImage("climber.png")
 doorImg= loadImage("door.png") 
ghostImg=loadImage("ghost-standing.png") 

}
function setup (){
 createCanvas(600,600) 
 tower= createSprite(300,300) 
  tower.addImage(towerImg)
  tower.velocityY=1;
  
  doorsGroup = new Group();
  invisibleBlockGroup = new Group();
  climbersGroup = new Group();
  
  ghost= createSprite(300,300) 
  ghost.addImage(ghostImg)
  ghost.velocityY=+ 5 
  ghost.scale= 0.4
  
  
  
  
  
  
  
  
}
function draw (){
  
  fill("yellow");
    textSize (30)
    score = score + Math.round(getFrameRate()/60);
    text("Score: "+ score, 50,50);
 
  if(gameState=== "play"){
    
    
if(tower.y>600) {
 tower.y = 300 ;
  
}
  
  if(keyDown("left_arrow")){
   ghost.x = ghost.x-3;
    
    
  }
  
 if(keyDown("right_arrow")){
   ghost.x = ghost.x+3;
    
    
  } 
  
if(keyDown("space")){
 ghost.velocityY = -5;
    
    
  }   
  
 ghost.velocityY=ghost.velocityY+0.8; 
 if (climbersGroup.isTouching(ghost)){
 ghost.velocityY=0;  
   
   
 } 
 if (invisibleBlockGroup.isTouching(ghost) || ghost.y > 
     600){
 ghost.destroy();
 gameState= "end";
 }
  
  
  
  
  
  
  spawnDoors ();
 drawSprites(); 
}
if ( gameState === "end")  {
 fill("yellow");
  textSize (30)
  text ("GameOver", 230,250);
  
  
  
}
  
  
  
  
}
function spawnDoors (){
if (frameCount === 20)  {
door= createSprite(random(200,400),-50) 
  door.addImage(doorImg)
  door.velocityY=1;
  door.lifetime = 800; 
doorsGroup.add(door)
ghost.depth = door.depth+1
  climber= createSprite(door.x,25) 
  climber.addImage(climberImg)
  climber.velocityY=1;
  climber.lifetime = 800; 
  climbersGroup.add(climber)
 ghost.depth = climber .depth+1
  
  invisibleBlock= createSprite(door.x,27,climber.width,1) 
  invisibleBlock.velocityY=1;
  invisibleBlock.lifetime = 800; 
  invisibleBlockGroup.add(invisibleBlock)
  invisibleBlock.visble = false;
  
  
  
  
  
  
}  
}












