let camera, soccer, videogame;

function setup() {
  createCanvas(500, 500);
  camera = loadImage("assets/Camera.jpg");
  soccer = loadImage("assets/Soccer.jpg");
  videogame = loadImage("assets/videogames.jpg");
  imageMode(CENTER);
}

function draw() {
  background("black");
  image(camera,width / 2, height/ 2, 100, 100);
  image(soccer,width / 2, height/ 2 -120, 100,100);
  image(videogame,width / 2, height/ 2 + 150, 100,100);
}
