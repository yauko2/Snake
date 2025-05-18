let gameState = 'game';
let headX = 0, headY = 0;
let moveX = 0, moveY = 0;

function setup() {
  createCanvas(400, 400);
}


function draw() {
  if (gameState == 'game')
    {
      background(50, 200, 40);
      
      fill(157, 157, 255);
      stroke(0);
      rect(headX, headY, 20, 20);
      
      if (frameCount % 5 == 0)
        {
          headX += moveX
          headY += moveY
        }
    }
  
  
}