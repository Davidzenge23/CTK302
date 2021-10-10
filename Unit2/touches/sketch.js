let numberOfTouches ;
let image1;
let image2;
let image3;
let image4;

function setup() {
  createCanvas(700, 500);
  image1 = loadImage("assets/image-1.png");
  image2 = loadImage("assets/image-2.png");
  image3 = loadImage("assets/image-3.png");
  image4 = loadImage("assets/image-4.png");
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("no one is touching the screen", 5, 22) ;
      image(image1,0,0);
      break ;

      case 1:
       text("it's kind of lonely here", 5, 22) ;
       image(image2,0,0);
      // put a picture here
      break ;

      case 2:
      text("two fingers are touching the screen", 5, 22) ;
      image(image3,0,0);
            // put a picture here
      break ;

      case 3:

     text("three are touching the screen", 5, 22) ;
            // put a picture here
            image(image4,0,0);
      break ;


  }

}
