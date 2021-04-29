var background,backgroundImage;
var coin,coinImage;
var gameover,gameoverImage;
var monster1,monster1Image;
var monster2,monster2Image;
var player,playerImage;
var restert,restartImage;
var score=0;
var lives=0;
var PLAY;
var END;
var gameState=PLAY;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var invisibleGround;

function preload(){
  backgroundImage=loadImage("Pictures/background.png");
  coinImage=loadImage("Pictures/coin.png");
  gameoverImage=loadImage("Pictures/gameover.png");
  monster1Image=loadImage("Pictures/monster1.png");
  monster2Image=loadImage("Pictures/monster2.png");
  playerImage=loadImage("Pictures/Player.png");
  restartImage=loadImage("Pictures/restart.png");
}

function setup() {
  createCanvas(1000,1000);
  engine=Engine.create();
  world=engine.world;
  player=createSprite(200,300,30,20);
  player.addImage(playerImage);
  gameover=createSprite(100,150,10,10);
  gameover.addImage(gameoverImage);
  invisibleGround=createSprite(0,1000,2000,10);
  invisibleGround.x=invisibleGroundwidth/2;
  invisibleGround.visible=false;
  coinGroup=new Group();
  monsterGroup=new Group();
}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);
  if(gameState === PLAY){
    player.x=mouse.x;
    player.y=mouse.y;
  }
  coin();
  monster();
  textSize(20);
  fill("white");
  text("Score:"+score,500,500);
  text("Lives:"+lives,600,500);
  drawSprites();
}

function coin(){
  if(frameCount%50 === 0){
    coin=createSprite(400,500,20,20);
    coin.y=Math.round(random(30,800));
    coin.x=Math.round(random(30,800));
    coin.addImage(coinImage);
    coin.velocityY=5;
    coin.velocityX=5;
    coin.lifetime=200;
    coinGroup.add(coin);
  }
}

function monster(){
  if(frameCount%70 === 0){
    monster1=createSprite(500,600,20,20);
    var Monster=math.round(random(1,2));
    switch(Monster){
      case 1 : 
      monster1.addImage(monster1Image);
      break;

      case 2 :
      monster2.addImage(monster2Image);
      break;
    }
    monster1.velocityX=5;
    monster1.velocityY=5;
    monster1.lifetime=200;
    monsterGroup.add(monster1);
  }
}

function score(){
  if(coinGroup.isTouching(player)){
    score=score+1;
  }
}