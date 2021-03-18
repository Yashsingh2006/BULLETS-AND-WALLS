var wall,bullet;
var speed,weight;
function setup() {
  createCanvas(800,400);
  
  thickness=random(22,83);
  bullet = createSprite(50,200,50,10)
  wall=createSprite(750,200,60,height/2);

  speed=random(55,90);
  weight=random(400,1500);
 bullet.velocityX=speed
}


function draw() {
  background("black");  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0
    var deformation=0.5 * weight * speed * speed/22500
  
    if(deformation>180){
    bullet.shapeColor = "red"
    bullet.collide=(wall)
    bullet.velocityX=0
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor = "yellow"
      bullet.collide=(wall)
      bullet.velocityX=0
}
if(deformation<100){
  bullet.shapeColor = "green"
  bullet.collide=(wall)
  bullet.velocityX=0
}
  }

  

  drawSprites();
}

