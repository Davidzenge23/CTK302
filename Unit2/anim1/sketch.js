let x= 0 ;
let airplane;

function setup() {
  createCanvas(500, 500);
  airplane = loadImage("assets/airplane.png");
}

function draw() {
  background("grey");
image(airplane, x ,200,200,200);


x = x +3;
if (x >= width) {
  x = 0 ;

}

}
