function setup() {
  createCanvas(800, 400);
}

function draw() {

  background(3, 15, 51);

//Wall
 fill(89, 60, 6) ;
  rect(0,290,800);

  //Ground
  fill(135, 88, 1);
  rect(0,370,1033,1033);


 //Electricity Windmill

 fill(247, 249, 252);
     push();
  translate(width * 0.4, height * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 5, 40, 3);
  pop();

   fill(247, 249, 252);
     push();
  translate(width * 0.4, height * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 5, 0, 3);
  pop();




   fill(247, 249, 252);
     push();
  translate(width * 0.1, height * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 5, 40, 3);
  pop();
rect(80,205,2,85);



  //Moon
  //fill(247, 249, 252)
  //ellipse(70,50,50,50);

 //Glass of the car
  fill(217, 215, 210);
  rect(20,320,70,10);

  //middle body
  fill(247, 25, 0);
   rect(10,330,90,10);

   //lower body
  fill(250, 64, 7);
   rect(20,340,70,15);

  //Headlight left
  fill(247, 247, 245);
  ellipse(30,340,21,21);

  //headlight right
    ellipse(80,340,21,21);

  // Right Wheel
  fill(74, 69, 69);
  rect(78,355,8,20);

  // left wheel
  rect(22,355,8,20);

  //Inerlight
  fill(247, 249, 252);
 // ellipse(30,340,10,10);
  //ellipse(80,340,10,10);


 //Auto Shop
  fill(74, 69, 69);
  rect(480,240,180,140);



  fill(247, 247, 245)
  rect(480,250,180,10);

  //Window
  fill(217, 215, 210);
  rect(520,300,100,50);

 //Star
  fill(247, 249, 252);



   push();
  translate(width * 0.2, height * 0.2);
  rotate(frameCount / 50.0);
  star(0, 0, 40, 7, 20);
  pop();

 fill(247, 249, 252);
noStroke();
  rect(315,205,2,85);


  //Stars: Small
  ellipse(200,140,3,3)
   ellipse(80,160,3,3)
  ellipse(350,90,3,3)
   //ellipse(350,10,3,3)
   ellipse(370,100,3,3)
   //ellipse(200,20,3,3)
   ellipse(50,1030,3,3)
   ellipse(300,100,3,3)

    ellipse(700,140,3,3)
   ellipse(760,160,3,3)
   ellipse(750,10,3,3)
 ellipse(350,90,3,3)
   ellipse(470,100,3,3)
   ellipse(600,20,3,3)
   ellipse(50,100,3,3)
   ellipse(580,150,3,3)


textSize(17.5);
text('AUTO SHOP', 519, 290);








  // When you press in the picture

  if (mouseIsPressed) {

    background( 126, 191, 217);


  fill(89, 60, 6) ;
  rect(0,290,2000);

  //Ground
  fill(135, 88, 1);
  rect(0,370,1033,1033);



     //Electricity Windmill

 fill(247, 249, 252);
     push();
  translate(width * 0.4, height * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 5, 40, 3);
  pop();

   fill(247, 249, 252);
     push();
  translate(width * 0.4, height * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 5, 0, 3);
  pop();


   fill(247, 249, 252);
     push();
  translate(width * 0.1, height * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 5, 40, 3);
  pop();
rect(80,205,2,85);

  //Moon
  //fill(247, 249, 252)
  //ellipse(70,50,50,50);

 //Glass of the car
  fill(217, 215, 210);
  rect(20,320,70,10);

  //middle body
  fill(247, 25, 0);
   rect(10,330,90,10);

   //lower body
  fill(250, 64, 7);

   rect(20,340,70,15);

  //Headlight left
  fill(247, 247, 245);
  ellipse(30,340,21,21);

  //headlight right
    ellipse(80,340,21,21);

  // Right Wheel
  fill(74, 69, 69);
  rect(78,355,8,20);

  // left wheel
  rect(22,355,8,20);

  //Inerlight
  fill(2, 3, 3);
  ellipse(30,340,10,10);
  ellipse(80,340,10,10);



   //Other Car

    //Glass of the car
  fill(217, 215, 210);
  rect(200,320,70,20);


  //middle body
  fill(176, 149, 222);
   rect(190,330,90,10);

   //lower body
  fill(101, 79, 140);
   rect(200,340,70,15);

  //Headlight left
  fill(247, 247, 245);
  ellipse(210,340,21,21);

  //headlight right
    ellipse(260,340,21,21);

  // Right Wheel
  fill(74, 69, 69);
  rect(200,355,8,20);

  // left wheel
  rect(262,355,8,20);

  //Inerlight
  fill(2, 3, 3);
  ellipse(210,340,10,10);
  ellipse(260,340,10,10);

 //Auto Shop
  fill(74, 69, 69);
  rect(480,240,180,140);



  fill(247, 247, 245)
  rect(480,250,180,10);

  //Window
  fill(217, 215, 210);
  rect(520,300,100,50);


  fill(247, 247, 245);
  textSize(17.5);
  text('AUTO SHOP', 519, 290);


 //Star/ Sun
  fill(249, 237, 141);

   push();
  translate(width * 0.2, height * 0.2);
  rotate(frameCount / 20.0);
  star(0, 0, 40, 9, 15);
  pop();

  fill(247, 247, 245);
rect(315,205,2,85);

  }

}
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 9.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);

}
// record the mouse location in console when clicked

function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
