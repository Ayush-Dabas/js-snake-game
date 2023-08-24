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

document.body.addEventListener("keydown", function (event) {
  if (event.code == "KeyW" || event.code == 38) {
    if (yVel == 1) {
      return;
    }
    yVel = -1;
    xVel = 0;
  } else if (event.code == "KeyS" || event.code == 40) {
    if (yVel == -1) {
      return;
    }
    xVel = 0;
    yVel = 1;
  } else if (event.code == "KeyA" || event.code == 37) {
    if (xVel == 1) {
      return;
    }
    xVel = -1;
    yVel = 0;
  } else if (event.code == "KeyD" || event.code == 39) {
    if (xVel == -1) {
      return;
    }
    xVel = 1;
    yVel = 0;
  }
});

function changeSnakePosition() {
  headX = headX + xVel;
  headY = headY + yVel;
}

function drawGame() {
  let speed = 10;

  clearScreen();
  drawSnake();
  setTimeout(() => {
    changeSnakePosition();
    console.log("working");
  }, 1000 / speed);
}

drawGame();
