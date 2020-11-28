var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score, survivalTime;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
}

function draw() {
  
  background(255);

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,150,50);
  
  if(keyDown("space") && monkey.y >=220){
    
    monkey.velocityY = -12;
    
    }
  
    monkey.velocityY = monkey.velocityY + 0.8;
  
  if(ground.x < 0){
    
    ground.x = ground.width/2;
    
  }

  monkey.collide(ground);
  
  banana();
  obstacle();
  drawSprites();
  
}
          
function banana(){
  
  if(frameCount % 80 === 0){
    
    var banana = createSprite(200,200,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 40;
    foodGroup.add(banana);
  
  }
  
}

function obstacle(){
  
  if(frameCount % 100 === 0){
    
    var obstacle = createSprite(400,327,20,20);
    obstacle.velocityX = -6;
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 75;
    obstacleGroup.add(obstacle);
    
  }
  
}