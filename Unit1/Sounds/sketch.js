let state = 0
let song1, song2;

function preload() {
  song1 = loadSound("assets/jazz.mp3");
  song2 = loadSound("assets/ukulele.mp3");



  song1.loop();
  song2.loop();

  song1.pause();
  song2.pause();


}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {
    case 0:
      background('grey');
      song1.play();
      state = 1;
      break;

    case 1:
      background('grey');
      break;

    case 2:
      song2.play();
      state = 3;

      break;

    case 3:
      background("orange");
      break;


  }

  fill('Blue');
  rect(100, 100, 100, 100);


}

function mouseReleased() {
  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {


    song1.pause();
    song2.pause();
    state++;

    if (state > 4) {
      state = 0;
    }

  }
}
