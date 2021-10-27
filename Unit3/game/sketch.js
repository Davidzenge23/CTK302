var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var yoda, yodaL, yodaR;
var bird;
var birds = [];
var splashBG, losepic, winpic, playpic;
var paint;
var lostsound;
var hound1, hound2;
var player;
var song1;
var fanfare;
var x = 0;
var bottlesLeft = 0;

function preload() {
//  lostsound = loadSound('assets/hit-crunch-distortion-reverb-trail-off_MJxR43Ed.mp3');
//  lostsound.stop();

  //song1 = loadSound("assets/ForATK302_mixdown.mp3");
  //song1.loop();
  //song1.stop();

  //fanfare.loop();
  //fanfare.stop();
}


function setup() {



  createCanvas(800, 800);

//  paint = loadFont('assets/FingerPaint-Regular.ttf');

  splashBG = loadImage("assets/splashbg.png");
  losepic = loadImage("assets/gamelost.png");
  winpic = loadImage("assets/splashbg.png")
  playpic = loadImage("assets/game.png");

  // yodaL = loadImage("assets/yodaLeft.gif");
  // yodaR = loadImage("assets/yodaRight.gif");
  // yoda = yodaL;

  player = loadImage("assets/Plane2.png");


  bird = loadImage("assets/package.png");
  birds[0] = loadImage("assets/package.png");
  birds[1] = loadImage("assets/package.png");
  birds[2] = loadImage("assets/package.png");

  //fanfare = loadSound("assets/hit-crunch-distortion-reverb-trail-off_MJxR43Ed.mp3");
  // Short_triumphal_fanfare-John_Stracke-815794903.mp3

  // hound = loadImage("assets/hound1.png");
  hound1= loadImage("assets/bomb.png");
  hound2 = loadImage("assets/bomb.png");

  //spawn cars
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }

  // for (var i = 0; i < 1; i++){
  //   hounds.push(new Enemy());
  // }

  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {

  //game();
  switch (myState) {

    // case 0:
    // lostsound.stop();
    // myState=1;
    // break;

    case 0:
      song1.play();
      myState = 1
      break;

    case 1: // splash screen
      image(splashBG, width / 2, height / 2);
      fill('red');
      textFont(paint, 20);
      text('Grab the package or get destroy', 60, 60);
      textSize(35);
      text('Or Explode', 300, 300);
      textSize(50);
      text('Click to Begin', x, height / 2);
      x +=5;
        if (x > 800) {
          x = 0;
        }
      break;

    case 2: // the game state
      game();
      timer++;
      if (timer > 600) {
        myState = 5;
        timer = 0;
      }
      break;

      // case 3:
      // cheersound.play();
      // myState = 4;
      // break;

    case 3:
      song1.stop();
      fanfare.play();
      myState = 4
      break;

      // case 4:
      // song1.stop();
      // myState=5
      // break;

    case 4: // the win state
      image(winpic, width / 2, height / 2);
      fill('red');
      //textFont(paint, 20);
      text('You got all the package', 450, 300);
      // song1.stop();
      break;

    case 5:
    //  song1.stop();
      myState = 6
      break;

    case 6:
  //    lostsound.play();
  //    song1.stop();
      myState = 7
      break;

    case 7: // the lose state
      // if (myState == 6){
      //   song1.pause();
      //   lostsound.play();
      // }
      image(losepic, width / 2, height / 2);
      fill('white');
    //  textFont(paint, 20);
      text('You Lost', 60, 700);
      break;

      // case 5:
      // lostsound.pause();
      // myState = 0;
      // break;
  }


}

function mouseReleased() {
  switch (myState) {
    case 1:
      myState = 2;
      break;

    case 4: //the win state
      resetTheGame();
      // cheer.stop();
      myState = 0;
      break;

    case 7: //the lose state
      resetTheGame();
      lostsound.stop();
      myState = 0;
      break;
  }

  // if (myState <= 0) {
  //   myState = 1;
  // }
}

// function Enemy(){
//   //attributes
//   this.pos = createVector(100,100);
//   this.vel = createVector(random -5, 5), random(-5,5));
//   this.houndNum = floor(random(hounds.length));
//   this.timer = 0;
//   this.maxTimer = random(10);
//
//   //methods
//   this.display = function() {
//     // fill(this.r, this.g, this.b);
//     // rect(this.pos.x, this.pos.y, 100, 50);
//     // ellipse(this.pos.x-45, this.pos.y+25, 50, 50);
//     // ellipse(this.pos.x+45, this.pos.y+25, 50, 50);
//     //image(bird, this.pos.x, this.pos.y, 100, 100);
//
//     image(hounds[this.houndNum], this.pos.x, this.pos.y, 100, 100);
//
//
//   this.timer++;
//   if (this.timer > 20){
//     this.birdNum = this.birdNum + 1;
//     this.timer = 0;
//
//   }
//   //dont go past the array
//   if (this.houndNum > 1){
//     this.houndNum = 0;
//   }
//
//   this.drive = function() {
//     this.pos.add(this.vel);
//
//     if (this.pos.x > width) this.pos.x = 0;
//     if (this.pos.x < 0) this.pos.x = width;
//     if (this.pos.y > height) this.pos.y = 0;
//     if (this.pos.y < 0) this.pos.y = height;
//
//   }
// }
// }

// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = floor(random(birds.length - 1));
  this.timer = 0;
  this.maxTimer = random(10, 30);
  this.type = random(1);
  if (this.type < 0.5){
    bottlesLeft++;
  }

  // methods
  this.display = function() {
    // fill(this.r, this.g, this.b);
    // rect(this.pos.x, this.pos.y, 100, 50);
    // ellipse(this.pos.x-45, this.pos.y+25, 50, 50);
    // ellipse(this.pos.x+45, this.pos.y+25, 50, 50);
    //image(bird, this.pos.x, this.pos.y, 100, 100);

    if (this.type > 0.5){
    image(hound1, this.pos.x, this.pos.y, 100, 100) ;
  } else {
    image(birds[this.birdNum], this.pos.x, this.pos.y, 100, 100);
  }



    this.timer++;
    if (this.timer > 20) {
      this.birdNum = this.birdNum + 1;
      this.timer = 0;

    }

    //dont go past the array
    if (this.birdNum > 2) {
      this.birdNum = 0;
    }

  }



  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) yoda = yodaL;
  if (keyCode === RIGHT_ARROW) yoda = yodaR;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;
}

function game() {
  image(playpic, width / 2, height / 2);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      if (cars[i].type > 0.5){
        myState = 5;
      } else{
          cars.splice(i, 1);
          bottlesLeft--;
      }

    }
    //   hounds[i].display();
    //   hounds[i].drive();
  }

//  if (cars.length == 0) {
if (bottlesLeft ==0) {
    myState = 3;
  }
  //
  // if(hounds[i].pos.dist(frogPos)<30){
  //   myState =2;
  // }

  // draw the frog

  // fill('green') ;
  // ellipse(frogPos.x, frogPos.y, 60, 60) ;

  // image(yoda, frogPos.x, frogPos.y, 120, 120);
  image(player, frogPos.x, frogPos.y, 120, 120);
  textSize(20);
  text("Package Left = "+bottlesLeft, 30, 50);
  checkForKeys();
}

function resetTheGame() {
  cars = [];
  bottlesLeft = 0;
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }
  // cars = [];
  // for (var i = 0; i < 1; i++){
  //   cars.push(new Car());
  // }
  timer = 0;
}
