var banana,bananaImg,stone,stoneImg,bground,bgroundImg, monkey, moneyImg, stoneGroup, bananaGroup, ground, score;

function preload() {
    bananaImg=loadImage("banana.png");
    stoneImg=loadImage("stone.png");
    bgroundImg=loadImage("jungle.jpg");
    monkeyImg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
}

function setup() {
  createCanvas(400, 400);
  
  bground= createSprite(200,75);
  bground.addImage("bground",bgroundImg);
  bground.velocityX = -3;
  bground.scale = 1;
  bground.x = bground.width/2;  
  
  monkey=createSprite(60,50,10,60);
  monkey.addAnimation("monkey",monkeyImg);
  monkey.scale=0.12;

  ground=createSprite(0,400,400,10);

  stoneGroup = new Group();
  bananaGroup = new Group();
  
score=0;
}


function draw() {
  
if(bground.x<0){
  bground.x = bground.width/2;
}
  
if(stoneGroup.isTouching(monkey))
{
monkey.scale=0.1
}
  
if(bananaGroup.isTouching(monkey))
{
score=score+1;
bananaGroup.destroyEach();
}
  
     //jump when the space key is pressed
    if(keyDown("space")){
      monkey.velocityY = -20 ;
    }

    //add gravity
    monkey.velocityY = monkey.velocityY + 1.2;

monkey.collide(ground)
  
stroke("white");
textSize(20);
fill("white");
text("Score: "+ score, 10,10);

spawnStones();
spawnBanana();


switch(score)
{
  case 10:monkey.scale=0.14;
  break;
  case 20:monkey.scale=0.16;
  break;
  case 30:monkey.scale=0.18;
  break;
  case 40:monkey.scale=0.2;
  break;
}
  
drawSprites();
}

function spawnBanana() 
{
    //write code here to spawn the banana
    if (World.frameCount % 110 === 0) 
    {
    //create banana sprite
  banana=createSprite(370,200,10,60);
  banana.addImage("banana",bananaImg);
  banana.scale=0.05;
  banana.velocityX = -3;
    banana.lifetime = 134;
    bananaGroup.add(banana);
  }
}

function spawnStones() 
{
  //write code here to spawn the Stones
  if (World.frameCount % 130 === 0) 
  {
  //create Stone sprite
  stone=createSprite(400,380,10,60);
  stone.addImage("stone",stoneImg);
  stone.scale=0.15;
  stone.velocityX = -14;
  stone.lifetime = 50;
  stoneGroup.add(stone);
  }
}