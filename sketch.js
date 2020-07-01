const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var dateTime2;
var score = 0;

function setup() {
  IMG3 = loadImage("sprites/images.jpeg");
  IMG = loadImage("sprites/Cannon.png");
IMG2 = loadImage("sprites/CannonBall.png");
sound = loadSound("sounds/Canoon+4.mp3")
IMG4 = loadImage("sprites/night.jpg");
  engine = Engine.create();
  world = engine.world;
  createCanvas(1600,400);
  stand = new Ground(790,300, 400, 20);
  ground = new Ground(800,399, 1600, 20);

  block1 = new Box(730, 275, 30,40);
  block2 = new Box(760, 275, 30,40);
  block3 = new Box(790, 275, 30,40);
  block4 = new Box(820, 275, 30,40);
  block5 = new Box(850, 275, 30,40);

  block6 = new Box(700, 275, 30,40);
  block7 = new Box(880, 275, 30,40);
  

  block8 = new Box(730, 235, 30,40);
  block9 = new Box(760, 235, 30,40);
  block10 = new Box(790, 235, 30,40);
  block11 = new Box(820, 235, 30,40);
  block12 = new Box(850, 235, 30,40);

  block13 = new Box(760, 195, 30,40);
  block14 = new Box(790, 195, 30,40);
  block15 = new Box(820, 195, 30,40);

  block16 = new Box(790, 155, 30,40);



 polygon = Bodies.circle(50, 200, 20);
 World.add(world, polygon);


 //image(this.img, pos.x, pos.y, this.width, this.height);
 //image(IMG, polygon.position.x, polygon.position.x, polygon.width, polygon.height);
 
 sling = new SlingShot(polygon, {x: 200, y: 180});

 imageMode(CENTER);




}

function draw() {
    Engine.update(engine); 
GetBackground();
    if (backgroundImg){
        
      image(backgroundImg, 800,200,1600,400);
      fill(0, 102, 153);
      textSize(40);
      
      text("Time:  " + dateTime2, 1000,50);
    
  }
  image(IMG2, polygon.position.x, polygon.position.y, 40, 40);
  image(IMG, 200, 200, 200, 200);

  text("Score:  " + score, 100,50);
  
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();



 
//text("Score: " + score);
  

  ground.display();

  sling.display();

  
  //Matter.Body.setPosition(block.body, {x: mouseX , y: mouseY});

  
  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
  sound.play();
}

function keyPressed(){
if (keyCode === 32){
  //bird.body.position.x = 200;
  //bird.body.position.y = 50;
  Matter.Body.setPosition(polygon,{ x: 200, y: 50})

  sling.attach(polygon);


}

}


async function GetBackground (){
  var response = await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles")
  var time = await response.json();
   var dateTime = time.datetime
    dateTime2 =  dateTime.slice(11,22);
 var hour = dateTime.slice(11,13);
var bg
  if (hour >= 6 && hour <= 17){
    //background(255,200,20);
   bg = "sprites/images.jpeg"
  }
  else{
    
    bg = "sprites/night.jpg"

  }

  backgroundImg = loadImage(bg);
}
