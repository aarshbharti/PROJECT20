 var bgimage
 var mouse
 var tom
 var jerry
 var mouse1

function preload() {
bgimage=loadImage("images/garden.png");
jerry1=loadImage("images/mouse1.png");
jerry2=loadAnimation("images/mouse2.png","images/mouse3.png");
jerry3=loadImage("images/mouse4.png");
tom1=loadImage("images/cat1.png")
tom2=loadAnimation("images/cat2.png","images/cat3.png");
tom3=loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
tom=createSprite(870,600);
tom.addImage(tom1);
tom.scale=0.2


jerry=createSprite(200,600);
jerry.addImage(jerry1);
jerry.scale=0.15
}

function draw() {

    background(bgimage);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
tom.velocityX=0;
tom.addAnimation("tom_lastimage",tom3);
tom.x=300
tom.scale=0.2
tom.changeAnimation("tom_lastimage");

jerry.addAnimation("jerry_lastimage",jerry3)
jerry.scale=0.15;
jerry.changeAnimation("jerry_lastimage");
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
tom.velocityX=-5
tom.addAnimation("tom_running",tom2);
tom.changeAnimation("tom_running");

jerry.addAnimation("jerry_teasing",jerry2)
jerry.frameDelay=25;
jerry.changeAnimation("jerry_teasing");

}

}
