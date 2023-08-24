const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
let tileCount = 25;
let tileSize = 18;
let headX = 10;
let headY = 10;
let xVel = 0,
  yVel = 0;

function clearScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}

function drawSnake() {
  ctx.fillStyle = "white";
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

document.body.addEventListener("keydown", keyDown);

function keyDown(event) {
  if (event.keyCode == "keyW" || event.keyCode == 38) {
    if (yVel == 1) {
      return;
    }
    yVel = -1;
    xVel = 0;
  } else if (event.keyCode == "keyS" || event.keyCode == 40) {
    if (yVel == -1) {
      return;
    }
    xVel = 0;
    yVel = 1;
  } else if (event.keyCode == "keyA" || event.keyCode == 37) {
    if (xVel == 1) {
      return;
    }
    xVel = -1;
    yVel = 0;
  } else if (event.keyCode == "keyD" || event.keyCode == 39) {
    if (xVel == -1) {
      return;
    }
    xVel = 1;
    yVel = 0;
  }
}

function changeSnakePosition() {
  headX = headX + xVel;
  headY = headY + yVel;
}

function drawGame() {
  clearScreen();
  drawSnake();
  changeSnakePosition();
}

drawGame();
