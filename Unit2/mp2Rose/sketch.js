let state = 0;
let timer = 0;
let mic;
let vol;
let cake;

function setup() {
  createCanvas(500, 500);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();

  cake = loadImage("assets/cake.jpg");
}

function draw() {

  switch (state) {
    case 0:
      background('white');
      image(cake, 200, 200, 150, 150);
      text("welcome, please click", 100, 100);
      break;

    case 1:
      background('yellow');
      text("listening", 100, 100);
      break;

    case 2:
      background('red');
      text("state 2", 100, 100);
      break;

  }

}

function mouseReleased() {
  if (state == 0) {
    state = 1;
  }

}

function touchStarted() {
  getAudioContext().resume();
}
