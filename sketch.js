var man ,manImg, corona,coronaImg,corona2
var Invisibleman
var bg,bgImg
var wear,wearImg,notwear,notwearImg
var redS,redsImg
var GameOver,GameOverImg
var sanitizer,sanitizerImg
var No,NoImg


function preload()  {
manImg=loadImage("download.png")
coronaImg=loadImage("23312.png")
bgImg=loadImage("cityBg.png")
wearImg=loadImage("Masks.jpg")
notwearImg=loadImage("notWear.jpg")
redsImg=loadImage("right.png")
GameOverImg=loadImage("Game OVER.jpg");
sanitizerImg=loadImage("yes.png")
NoImg=loadImage("no.png");

} 

function setup() {
   createCanvas(windowWidth,windowHeight);

   bg=createSprite(200,200,0,0)
   bg.addImage(bgImg)
   bg.scale=1.5
   man=createSprite(500, 400, 30, 70);
   man.addImage(manImg);
   man.scale = 1;
 
   corona=createSprite(50, 400, 70, 30);
   corona.addImage(coronaImg);
   corona.scale=0.1
   corona.velocityX=corona.velocityX + 3;

   corona2=createSprite(880, 400, 70, 30);
   corona2.addImage(coronaImg);
   corona2.scale=0.1
   corona2.velocityX=corona2.velocityX - 2;

   Invisibleman=createSprite(400,400)
   Invisibleman.visible=false;
}

function draw() {
  background(255);  
  
  if(corona.isTouching(Invisibleman)){
   corona.velocityX=0;
   
   text("Quiz Time",650,100)
   text("what should we  do before going out",600,300);

   man.visible=false
   bg.visible=false
   corona.visible=false
  corona2.visible=false

   wear=createSprite(600,400,0,0);
  wear.addImage(wearImg);
  wear.scale=0.1;

  notwear=createSprite(770,400,0,0);
  notwear.addImage(notwearImg);
 notwear.scale=0.1;


  notwear.depth=bg.depth;
  notwear.depth +=1;

  wear.depth=bg.depth;
  wear.depth =+1

  sanitizer=createSprite(1000,400,0,0);
  sanitizer.addImage(sanitizerImg)
  sanitizer.scale=0.1

  No=createSprite(1155,400,0,0)
  No.addImage(NoImg);
  No.scale=0.5
  text("should we quartine thing brought from outside",945,300)
   
 }
 if(mousePressedOver(sanitizer)){
  redS=createSprite(1070,250,0,0);
  redS.addImage(redsImg);
  
  }

  if(mousePressedOver(No)){
  
    GameOver=createSprite(1000,100,0,0);
    GameOver.addImage(GameOverImg);
   
    sanitizer.visible=false;
    No.visible=false;
    }

 if(mousePressedOver(wear)){
 redS=createSprite(730,250,0,0);
 redS.addImage(redsImg);
 
 }
 if(mousePressedOver(notwear)){
  
  
 GameOver=createSprite(700,400,0,0);
 GameOver.addImage(GameOverImg);

 wear.visible=false
 notwear.visible=false
 }
  drawSprites();

}