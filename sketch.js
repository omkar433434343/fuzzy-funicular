var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var wall11,wall12,wall13,wall14,wall15;
var player;
var bg;
var wall;
var wallImg;
var playerImg;
var key;
var keyImg;



function preload(){
    bg = loadImage("images/bg.png");
    wall = loadImage("images/wall1.png");
    wallImg = loadImage("images/wall.png");
   playerImg = loadImage("images/gb.png")
    keyImg = loadImage("images/key.png");

}





function setup(){
            createCanvas(displayWidth, displayHeight)   
            
        

            wall1=createSprite(85,150,100,10);
        
            wall2=createSprite(40,100,10,100);

            wall3=createSprite(250,50,500,10);

            wall4=createSprite(135,245,10,200);

            wall5=createSprite(90,350,100,10);

            wall6=createSprite(300,200,10,300);

            wall7=createSprite(500,450,900,10);

            wall8=createSprite(500,195,10,300);

            wall9=createSprite(430,350,150,10);

            wall10=createSprite(700,50,250,10);
            
            wall11 = createSprite(870,200,50,250);

            wall12 = createSprite(715,590,50,50)

            wall13 = createSprite(450,590,50,50)

            wall14 = createSprite(620,700,50,50);

            player = createSprite(10,90,10,10);

            key = createSprite(620,550,50,50)
          

            wall2.addImage(wallImg)
            wall2.scale = 0.4

            wall1.addImage(wall)
            wall1.scale=0.4

            wall3.addImage(wall)
            wall3.scale = 2

            
            wall4.addImage(wallImg)
            wall4.scale = 1

            
            wall5.addImage(wall)
            wall5.scale = 0.6
            
            wall6.addImage(wallImg)
            wall6.scale = 1.5   

            
            wall7.addImage(wall)
            wall7.scale = 4

            
            wall8.addImage(wallImg)
            wall8.scale = 1.5

            
            wall9.addImage(wall)
            wall9.scale = 0.8

            
            wall10.addImage(wall)
            wall10.scale = 1.5

            wall11.addImage(wallImg)
            wall11.scale =1.7

            wall12.addImage(wallImg)

            wall13.addImage(wallImg)

            wall14.addImage(wall)

            key.addImage(keyImg);
            key.scale = 0.06
            
        player.addImage(playerImg)
        player.scale = 0.4
 }


function draw(){
    background(bg);

   

if(keyDown("RIGHT_ARROW")){
        player.x=player.x+2



}
if(keyDown("LEFT_ARROW")){
    player.x=player.x-2



}
if(keyDown("UP_ARROW")){
    player.y=player.y-  2



}
if(keyDown("DOWN_ARROW")){
    player.y=player.y+2

    



}



     




            drawSprites();
}
