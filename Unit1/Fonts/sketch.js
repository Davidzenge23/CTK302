var f1 , f2;


function setup() {
  createCanvas(500, 500);
  f1= loadFont("assets/Beatrica.otf");
  f2= loadFont("assets/Bertha.ttf");
}

function draw() {
  background("yellow");
  textFont(f1);
  textSize(48);
  text("hello world",100,100);

  textFont(f2);
  textSize(24);
  text("Redbird", 200,200);
}
