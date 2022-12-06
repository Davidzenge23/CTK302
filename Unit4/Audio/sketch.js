var song

function preload() {
  song = loadSound('stromae.mp3')

}

function setup() {
  createCanvas(500, 500);
}

function draw() {

  background(0)

}

function mouseClicked() {
    if (song.isPlaying()){
      song.pause()
    } else{
      song.play()
    }
}
