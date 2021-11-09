var bubbles = [];
let url = '';

function setup() {

   let key = '1LTLZCTRnC301s3Bv49vkiT3nMhortcgFDjzd-0Wnj9I'; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1" ;  // here I'm making the string for loadJSON.

  loadJSON(url, gotData);



  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects

function gotData(data) {

  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
     bubbles.push(new Bubble(data[i]["What's your Favorite day of the week?"], data[i]["What's your favorite sport?"], data[i]["What's your name?"])); // THESE NEED TO MATCH SPREADSHEET

  }

}


function draw() {
  background('blue');

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }

}


// my Bubble class
class Bubble {

  constructor(day, sport, name) { // only the order of these parameters matters!
    this.day = day;
    this.sport = sport;
    this.name = name;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);

  }


  display() {
    noFill();
ellipse(this.pos.x,this.pos.y+10,120,120);
    fill('white');
    text(this.day + "\n" + this.sport + "\n" + this.name, this.pos.x, this.pos.y);

    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0 ;
  }


}
