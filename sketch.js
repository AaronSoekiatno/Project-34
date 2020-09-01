//Create variables here
var dog, happyDog, hungryDog, database, foodS, foodStock
function preload()
{
  //load images here
  hungryDog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/doImg1.png");
}

function setup() {
  database = database.firebase();
  createCanvas(500, 500);
  dog = createSprite(250,250,30,30);
  dog.addImage(hungryDog);
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyImage);
}

  drawSprites();
  //add styles here
  textSize(48);
  text("Food remaining:"+foodStock,250,200);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x = x-1;
  }
  database.ref('/').update({
    Food:x,
  })


}

//<script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>


