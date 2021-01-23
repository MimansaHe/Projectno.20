var ground;

var cat;
var cati,cata;
var mouse;
var mousei,mousea;
var done;

function preload() {
    ground = loadImage("garden.png");
    cat1 = loadImage("tomOne.png");
    cat2 = loadAnimation("tomTwo.png","tomThree.png");
    mouse2 = loadImage("jerryTwo.png","jerryThree.png");
    mouse1 = loadImage("jerryOne.png");
    done = loadAnimation("tomFour.png");
    mouse3 =loadImage("jerryFour.png");

}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(750,700,10,10);
    cat.addImage("tom", cat1);
    cat.scale = 0.1;
    
    mouse = createSprite(100,700, 10,10);
    mouse.addImage("jerry",mouse1);
    mouse.scale = 0.1;
  

}

function draw() {

    background(ground);
    
    
        if(cat.x - mouse.x < (cat .width - mouse.width)/2)
        { 
            cat.velocityX=0;
            cat.addAnimation("lastImage",done);
            cat.x =300;
            cat .scale=0.2;
            cat.changeAnimation("lastImage");
            mouse.addAnimation("jerryLastImage", mouse2);
            mouse.scale=0.1;
            mouse.changeAnimation("jerryLastImage");
        }  
       
    

    
   
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        mouse.addImage("op",mouse3);
        cat.addAnimation("running",cat2);
        cat.changeAnimation("running",cat2);
        cat.velocityX = -2;
    }

}
