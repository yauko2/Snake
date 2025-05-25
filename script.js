
let gameState = 'game';
let headX = 0, headY = 0;
let moveX = 0, moveY = 0;
let foodX = Math.floor(Math.random()*20)*20;
let foodY = Math.floor(Math.random()*20)*20;
let tail = []

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
      
      fill(255, 0, 0);
      rect(foodX, foodY, 20, 20);
      
      if (headX == foodX && headY ==foodY)
        {
          foodX = Math.floor(Math.random()*20)*20;
          foodY = Math.floor(Math.random()*20)*20;
          add_tail();
        }
      
      if (frameCount % 10 == 0)
        {
          update_tail(headX, headY);
          headX += moveX;
          headY += moveY;
          
          if (headX >= 400)
            {
              headX = 0;
            }
          else if (headX <= 0)
            {
              headX = 380;
            }
          
          if (headY >= 400)
            {
              headY = 0;
            }
          else if (headY <= 0)
            {
              headY = 380;
            }
        }
    }
  
  
}


function keyPressed()
{
 if (keyCode == 83 && moveY != -20)
  {
    moveX = 0;
    moveY = 20;
  }
  
    else if (keyCode == 87 && moveY != 20)
  {
    moveX = 0;
    moveY = -20;
  }
  
  else if (keyCode == 65 && moveX != 20)
  {
    moveX = -20;
    moveY = 0;
  }
  
  else if (keyCode == 68 && moveX != -20)
  {
    moveX = 20;
    moveY = 0;
  }
  
  
}

function add_tail()
{
  tail.push({
    x: headX,
    y: headY
  })
}

function update_tail(targetX, targetY)
{
  if (tail.length > 0)
    {
      for (let i = 0; i < tail.length()-1; i++)
        {
          tail[i].x = tail[i-1].x;
          tail[i].y = tail[i-1].y;
        }
      tail[0].x = targetX;
      tail[0].y = targetY;
    }
}