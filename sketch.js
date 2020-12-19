
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() 
{createCanvas(500,500);
  
monkey = createSprite(80,315,20,20); monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1

ground=createSprite(400,350,900,10)


  
}


function draw() 
{background(280);
 
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;}
 
  
 monkey.velocityY = monkey.velocityY + 0.8
 monkey.collide(ground);
 
 stroke("white");
 textSize(20);
 fill("white");
 text("score"+score,500,50)
 
 stroke("black");
 textSize(20);
 fill("black");
 survivalTime=Math.ceil(frameCount/frameRate())
 text("survivalTime:"+survivalTime,100,50)
 


 
 food();
 obstacle();

 drawSprites(); 
}

function food()
{
  if (frameCount % 80 === 0){
   var banana = createSprite(600,165,10,40);
    banana.addImage(bananaImage);
    banana.scale = 0.1   
banana.y = Math.round(random(120,200));
banana.velocityX=-4
banana.lifetime = 135;
  }
}

function obstacle()
{
  if (frameCount % 300 === 0){
   var obstacle = createSprite(500,328,10,40);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1   
  var rand = Math.round(random(120,200));
obstacle.velocityX=-4
    obstacle.lifetime=280;
  }
}




