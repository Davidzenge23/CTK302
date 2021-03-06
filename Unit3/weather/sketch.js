// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var temp = 0;
var humid = 0;
let plane
function setup() {
  createCanvas(400, 400);

  // HERE is the call to get the weather.
plane = loadImage("assets/airplane.png");

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Champaign,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=bd1506ffc523b60864a2431bf8af2cff'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  humid = weather. main.humidity;


}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(200);
      fill('black');
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("temperature is " +  temp, 20, 60);

     text("Humidity is " +  humid, 20, 80 );


      // cloud
    //  fill('white');
      //noStroke();
  //  ellipse(x, 300, 200, 100);
      image(plane,x, 300, 200, 100);
      //plane(x, 100);
      // move the cloud's x position
      x = x + windspeed;
      if (x > width) x = 0;

      break;

  }
}
