  var background, backgroundImage;
  var redballoons, redballonImage, greenballoon, greenballoonImage,   blueballon, blueballoonImage, pinkballoon, pinkballoonImage;
  var bow, bowImage, arrow, arrowImage, temp_arrow;
  var score;
  var arrowGroup;
  var redGroup;
  var blueGroup;
  var greenGroup;
  var pinkGroup;



  function preload(){
   //load your images here 
   backgroundImage = loadImage("background0.png");
   redballonImage =  loadImage("red_balloon0.png")  ;            bowImage = loadImage("bow0.png"); 
   blueballoonImage = loadImage("blue_balloon0.png");
   pinkballoonImage = loadImage("pink_balloon0.png");
   greenballoonImage = loadImage("green_balloon0.png");
   arrowImage = loadImage("arrow0.png")
  
  } 
  function setup() {
    createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600, 600);
  background.addImage("back", backgroundImage);
  background.scale = 3;

  //creating a bow
  bow = createSprite (550,300,40,40);
  bow.addImage("bow", bowImage);

    //creating groupds
  arrowGroup = createGroup();
  redGroup = createGroup();
  blueGroup = createGroup();
  pinkGroup = createGroup();
  greenGroup = createGroup();
    
 score = 0;
 }

function draw() {

  
  
  //infinite background
  background.velocityX = -2;
  if(background.x <0) {
  background.x = background.width / 2;
  }
 
 //adding score
  text("Score:" + score, 270,30);
  textSize = 20;
  stroke = "black";
  
  //controlling the bow
  bow.y = World.mouseY;
  
  //releasing of arrow when space key is pressed
  if(keyDown("space")) {
   createArrow();
  }
  
  var select_balloon = Math.round(random(1,4));
   console.log(select_balloon)
    
    if(World.frameCount % 80 == 0){
     if (select_balloon == 1) {
       redBalloon();
     } else if (select_balloon == 2) {
       greenBalloon();
     } else if (select_balloon == 3) {
       blueBalloon();       
     } else if (select_balloon == 4) {
       pinkBalloon();
     }
      
    }
    
  //destroying of balloons
  if(arrowGroup.isTouching(redGroup)) {
    redGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  
  }
  
   if(arrowGroup.isTouching(greenGroup)) {
    greenGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 4;
  
  }
  
   if(arrowGroup.isTouching(blueGroup)) {
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 2;
  
  }
  
   if(arrowGroup.isTouching(pinkGroup)) {
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 3;
  
  }
  
  
  
  
  drawSprites();
  
  
  
  //adding score
  text("Score:" + score, 270,30);
  textSize = 20;
  stroke = "black";
}

function createArrow() {
 arrow = createSprite(500,300,50,50);
 arrow.velocityX = -4;
  arrow.addImage("arrow", arrowImage);
  arrow.scale = 0.5;
  arrow.y = bow.y;
 arrow.lifetime = 150;
 arrowGroup.add(arrow);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20,370)), 10, 10);
  red.addImage(redballonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redGroup.add(red);
}


function greenBalloon() {
  var green = createSprite(0,Math.round(random(20,370)), 10, 10);
  green.addImage(greenballoonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenGroup.add(green);
}


function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20,370)), 10, 10);
  blue.addImage(blueballoonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueGroup.add(blue);
}


function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20,370)), 10, 10);
  pink.addImage(pinkballoonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.3;
  pinkGroup.add(pink);
}
