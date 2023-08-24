var sPos_X = 0,
  sPos_Y = 0;
var fPos_X, fPos_Y;
var sVelocity_X = 10,
  sVelocity_Y = 10;
var canvas_left = 3,
  canvas_right = 96;
var canvas_top = 3,
  canvas_bottom = 46;
var interval = 500;

async function setFoodPos() {
  fPos_X =
    Math.floor(Math.random() * (canvas_right - canvas_left) + canvas_left) * 10;
  fPos_Y =
    Math.floor(Math.random() * (canvas_bottom - canvas_top) + canvas_top) * 10;
  // console.log(fPos_X, fPos_Y);
  let food = document.getElementById("food");
  food.style.top = fPos_Y + "px";
  food.style.left = fPos_X + "px";
}

function handler() {
  // setFoodPos();
  var i = 0;
  setInterval(() => {
    setFoodPos();
    console.log(i);
    var cnt = document.getElementById("count");
    cnt.innerHTML = i;
    i++;
  }, interval);
}
