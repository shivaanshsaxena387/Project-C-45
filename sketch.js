var stone,snake,lion,rhino,pc,oro,trap,forest
var trapImage,oroImage,pcImage, forestImage,stoneImage,bg,lion,lionImage,rhino,rhinoImage

function preload(){
  trapImage=loadImage("beartrap.png")
  stoneImage=loadImage("stone.png")
  oroImage=loadImage("orochimaru.png")
  pcImage=loadImage("bravestone.png")
  forestImage=loadImage("forest.png")
  lionImage=loadAnimation("tile000.png","tile001.png","tile002.png","tile003.png","tile004.png","tile005.png","tile006.png",
                     "tile007.png")
  rhinoImage=loadAnimation("r1.png","r2.png","r3.png","r4.png","r5.png","r6.png","r7.png","r8.png","r9.png",
                       "r10.png","r11.png","r12.png",)
  
}




function setup() {
  createCanvas(800,550,200,200)
  bg = createSprite(500,300)
  bg.addImage(forestImage)
  bg.scale=1.77
  bg.velocityX=-10

  pc=createSprite(10,200)
  pc.shapeColor="red"
  pc.scale=0.5
    
 
}

function draw() {
  background("green");
  
    if(bg.x<0){
      bg.x=400
    }

    if(keyDown("space")){
      pc.velocityY=-3
    }

    pc.velocityY=pc.velocityY+0.5

   edges= createEdgeSprites()
    pc.collide(edges)

    obstacles();

  drawSprites()
}

function obstacles() {
  if(frameCount%150===0){
  obstacle=createSprite(800,530)
  obstacle.velocityX=-3
  obstacle.x=Math.round(random(780,540));
  var rand=Math.round(random(1,3));
  switch(rand){
    case 1:obstacle.addImage(trapImage);
    obstacle.scale=0.5
    break;

    case 2:obstacle.addAnimation("lion1",lionImage);
    obstacle.scale=2
    break;
    

    case 3:obstacle.addAnimation("rhino1",rhinoImage);
    obstacle.scale=2
    break;
  default:break;
  }
  
  
}
 }