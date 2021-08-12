
  //Running game

  var path, boy, lb, rb;
  var pathImg, boyImg

  function preload(){
    //pre-load images

    pathImg = loadImage("path.png")
    boyImg = loadImage("Runner-1.png")

  }

  function setup(){
    createCanvas(400,400);
    //create sprites here

    path = createSprite(200, 200)
    path.addImage(pathImg)
    path.scale = 1

    boy = createSprite(200, 200)
    boy.addImage(boyImg)
    boy.scale = 0.08
  }

  function draw() {
  
    background(0);
    
    path.velocityY = 15

    if(path.y > 440){

      path.y = height/2

    }

    drawSprites();
  }
