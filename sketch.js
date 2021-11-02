var bg;
var shooterAnimation; 

var shooter;
var city;
var zombie;
var zombieimg;
var zombieGroup;
var bullet;
var bulletGroup;



function preload(){
   bg = loadImage("images/city.jpg")
   shooterAnimation = loadAnimation("images/shooter1.png","images/shooter2.png","images/shooter3.png",
   "images/shooter4.png","images/shooter5.png","images/shooter6.png")
   bulletimg = loadImage("images/bullet.png")
   zombieimg = loadImage("images/zombie.png")

}

 
 function setup(){
    var canvas = createCanvas(1200,600);
    

    city = createSprite(600,300);
    city.addImage(bg)
    city.scale = 2.1
    city.velocityX = -2
    
    shooter = createSprite(100,450);
    shooter.addAnimation("shooter",shooterAnimation)
    shooter.scale=0.5;

    zombieGroup = createGroup();
    bulletGroup = createGroup();


 }

function draw(){
background("black")
//if(keyDown("w")){
//shooter.x = shooter.x+4
//}

if(city.x < 0){
city.x = width/2
}

 shooter.x = camera.position.x -500

 if(keyDown("space")){
 bullets();
 }
 
 if(zombieGroup.isTouching(bulletGroup)){
 zombieGroup.destroyEach();
 bulletGroup.destroyEach();
 }

spawnZombie();


 drawSprites();
}

 function spawnZombie()
{

   if (frameCount%150===0){
      zombie = createSprite(1000,440,50,50)
      zombie.scale=1.0;
      zombie.addImage(zombieimg)
      zombie.velocityX = -2;
   
      zombie.lifetime = 1300
      zombieGroup.add(zombie);
      
   }


}

function bullets(){

   bullet = createSprite(150,435,10,10)
   bullet.addImage(bulletimg)
   bullet.scale = 0.10;
   bullet.velocityX = 20;
   
   bulletGroup.add(bullet);
   
}

