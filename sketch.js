var bullet,wall,speed,weight,thickness,deform;

function setup() {
  createCanvas(1400,400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50,50);
  wall = createSprite(1300,200,thickness,height/2);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  wall.shapeColor="black";
}

function draw() {
  background(255,255,255);
  //if(bullet.x+0.5*(bullet.width)>wall.x-1*(wall.width)){
  if(wall.x-bullet.x<0.5*(wall.width+bullet.width)){
    bullet.velocityX=0;
    deform=(0.5*weight*speed*speed)/thickness*thickness*thickness;
  } 

if(deform<=10){
  wall.shapeColor="green";
}
if(deform>10){
  wall.shapeColor="red";
}
  drawSprites();
}