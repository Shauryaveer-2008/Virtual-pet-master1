var dog, database, foodS, foodStock;
var dogimg, hdogimg, foodimg;

function preload()
{
  //load images here
  dogimg=loadImage("images/dogImg1.png");
  hdogimg=loadImage("images/dogImg.png");
}

function setup() {
  database=firebase.database();
  createCanvas(800, 700);
  dog=createSprite(400,400);
  
  dog.scale=0.4;
foodStock=database.ref('Food');
foodStock.on('value', readStock);
}


function draw() {  
background(120,140, 160)
  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage( hdogimg)
    
    
  }else{
 dog.addImage( dogimg);
  }
drawSprites();
textSize(25);
    stroke("yellow");
    text("remaining food = "+foodS,400, 20);
  }

function readStock(data){
foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x-=1;
  }
  database.ref('/').update({
    Food:x
  })
}