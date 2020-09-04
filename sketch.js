var car, wall;
var speed, weight

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed = random(55, 90);
  weight = random(400, 1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  car.velocityzx = speed;
}

function draw() {
  background(255,255,255);  
  if (car.x - wall.x < wall.width/2 + car.width/2 
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y - fixedRect.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2){
      if (0.5 * weight * speed * speed < 100){
        car.shapeColor = 'green';
        wall.shapeColor = 'green';
      }else if (0.5 * weight * speed * speed > 180){
        car.shapeColor = 'red';
        wall.shapeColor = 'red';
      }else if (0.5 * weight * speed * speed < 100 && 0.5 * weight * speed * speed > 180){
        car.shapeColor = 'yellow';
        wall.shapeColor = 'yellow';
      }
  }else{
    car.shapeColor = 'green';
    wall.shapeColor = 'green';
  }

  drawSprites();

}