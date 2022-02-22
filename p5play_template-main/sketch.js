var caixa;


function setup() {
  createCanvas(400,400);
  caixa = createSprite(200,200,20,20);
  caixa.shapeColor = "blue";
}

function draw() 
{
  background("red");
  if(keyIsDown(LEFT_ARROW)){
    caixa.position.x -= 2
  }
  if(keyIsDown(RIGHT_ARROW)){
    caixa.position.x += 2
  }
  if(keyIsDown(UP_ARROW)){
    caixa.position.y -= 2
  }
  if(keyIsDown(DOWN_ARROW)){
    caixa.position.y += 2
  }

  drawSprites();
}



