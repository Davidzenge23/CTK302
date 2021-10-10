let state = 0; //For state
let timer = 0; //For the timer

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch(state){

    case 0://This is
      background("red");
      text("This is the for state 0",100,100)
      break;

      case 1://This is
      background("yellow");
      text("This is the for state 1",100,100)
      break;

      case 2://This is
      background("blue");
      text("This is the for state 2",100,100)
      break;

         case 3://This is
      background("orange");
      text("This is the for state 3",100,100)
      break;

         case 4://This is
      background("pink");
      text("This is the for state 4",100,100)
      fill(random(100));
        for (var j = 0 ; j <= width ; j+=20) {
    for(var i =0; i <= width; i +=20){
      rect(i,j,5,15);
    }
  }
      break;

}
    timer++;
  if (timer > 5 * 60 ){
    timer =0;

    state++;
    if(state > 4){
      state = 0;
    }
  }




}

function mouseReleased(){
  state= state +1;

  if (state >4){
    state = 0;
  }
}
