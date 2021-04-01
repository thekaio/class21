var fixedRect, movingRect;
var rect1, rect2 ,rect3, rect4
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(100,300,50,50)
  rect2 = createSprite(300,300,50,50)
  rect3 = createSprite(500,300,50,50)
  rect4 = createSprite(700,300,50,50)
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, rect2)){
    movingRect.shapeColor = "red";
    rect2.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    rect2.shapeColor = "green";
  }
  drawSprites();
}

