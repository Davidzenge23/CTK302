let timer = 0
let state = 0
let vel =0
let x = 0
var taxi;
var titlescreen;
var city;
var citynight;
var citysunset;

function setup() {
  createCanvas(700, 500);

titlescreen = loadImage("assets/titlescreens.jpg");
taxi = loadImage("assets/car.png");
city = loadImage("assets/city4.png");
citysunset = loadImage("assets/cityO.png");
citynight = loadImage("assets/city6.png");
}

function draw() {



  switch (state) {


    case 0:
      image(titlescreen, 0, 0);
      vel = 0;
      break;

    case 1:

      image(city,0,0);

      vel= 10;
    image(taxi, x, height-100,100,100);
      x = x+vel;
      if (x>width){
        x= 0;
      }

      break;

  case 2:

image(citynight,0,0);
    vel= 3;
     image(taxi, x, height-100,100,100);

   x = x+vel;
  if (x>width){
     x= 0;
    }
    break;

    //  case 3:

    //    image(citysunset,0,0);
    //    vel= 3;
    //    image(taxi, x, height-100,100,100);

    //    x = x+vel;
      //  if (x>width){
    //      x= 0;
        //}
      //  break;


  }
  timer++;
  if (timer > 8 * 60) {
    timer = 0;

    state++;
    if (state > 3) {
      state = 0;
    }
  }



}

function mouseReleased() {
  //could have a switch thing here too
if (state ==0) { //== means check to see if its equal to 0 ; = means equal to 1
  state = 1 ;


  }

}
