let state = 0

function setup() {
  createCanvas(500, 500);
}

function draw() {

switch(state){

  case 0:
    background('grey');
    text("What falls in winter \n but never get hurt?", 180, height/2);
    break;

    case 1:
      background('green');
      text("SNOW", width/2, height/2);
      break;
}
}
function mouseReleased(){
  state= state+1 /// or state++

  if (state>1){
    state = 0 ;
  }

}
