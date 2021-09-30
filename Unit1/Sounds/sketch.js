let song1 ;
function preload() {
  song1 = loadSound("assets/jazz1.mp3");
}
function setup() {
  createCanvas(500, 500);
  song1.loop();
}

function draw() {
  createCanvas(500, 500);
  background('orange')

  }


function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();} else {
      song1.loop();
    }

  }
