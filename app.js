var sPos_X = 0,
  sPos_Y = 0;
var fPos_X = 0,
  fPos_Y = 0;
var sVelocity_X = 10,
  sVelocity_Y = 10;
var canvas_left = 10,
  canvas_right = 990;
var canvas_top = 10,
  canvas_bottom = 490;

function setFoodPos() {
  fPos_X = Math.random(canvas_left, canvas_right);
  fPos_Y = Math.random(canvas_top, canvas_bottom);
}
