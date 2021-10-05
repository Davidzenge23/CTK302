let timer = 0
let state = 0
let vel =0
let x = 0
var taxi;
var titlescreen;
var city;

function setup() {
  createCanvas(700, 500);

titlescreen = loadImage("assets/titlescreens.jpg");
taxi = loadImage("assets/car.png");
city = loadImage("assets/city.png");
}

function draw() {



  switch (state) {


    case 0:
      image(titlescreen, 0, 0);
      vel = 0;
      break;

    case 1:
      background('red')
      image(city,0,0);
      vel = 10;
      break;

    case 2:
      background('orange')
      image(city,0,0);
      vel= 3;
      break;


  }
  timer++;
  if (timer > 3 * 60) {
    timer = 0;

    state++;
    if (state > 2) {
      state = 0;
    }
  }

// the car

image(taxi, x, height-100,100,50);

x = x+vel;
if (x>width){
  x= 0;
}

function mouseReleased(){
  if state == 0
}



}
