var redKey,blueKey,greenKey;
var diamonds;
var chor,police;
var chorImg;
var onButton,onButtonImg,offButtonImg;
var wall1,wall2,wall3,wall4, wall5,wall6,wall7,wall8,wall9, wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17;
var wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32;
var wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40,wall41,wall42,wall43,wall44,wall45,wall46,wall47;

function preload(){

chorImg = loadImage("images/chor.png")
redKey= loadImage("images/redKey.png")
greenKey= loadImage("images/greenKey.png")
blueKey= loadImage("images/blueKey.png")
diamonds= loadImage("images/diamond.png")
police= loadImage("images/police.png")
onButtonImg= loadImage("images/onButton.png")
offButtonImg= loadImage("images/offButton.png")
}


function setup() {

  wall1=createSprite(50,500,500,10);
  wall2=createSprite(100,575,10,50);
  wall3=createSprite(700,500,650,10);
  wall4=createSprite(200,530,10,50);
  wall5=createSprite(300,575,10,50);
  wall6=createSprite(400,530,10,50);
  wall7=createSprite(500,575,10,50);
  wall8=createSprite(600,530,10,50);
  wall9=createSprite(700,575,10,50);
  wall10=createSprite(800,530,10,50);
  wall11=createSprite(900,575,10,50);
  wall12=createSprite(340,500,100,10);
  wall13=createSprite(800,530,10,50);
  wall14=createSprite(50,420,100,10);
  wall15=createSprite(100,455,10,80);
  wall16=createSprite(200,370,10,100);
  wall17=createSprite(100,320,200,10);
  wall18=createSprite(300,420,210,10);
  wall19=createSprite(405,375,10,100);
  wall20=createSprite(500,440,10,110);
  wall21=createSprite(500,330,200,10);
  wall22=createSprite(600,380,10,110);
  wall23=createSprite(800,440,410,10);
  wall24=createSprite(200,250,10,200);
  wall25=createSprite(150,320,110,10);
  wall26=createSprite(100,255,10,120);
  wall27=createSprite(200,30,10,110);
  wall28=createSprite(300,250,10,350);
  wall29=createSprite(300,10,10,30);
  wall30=createSprite(950,470,10,50);
  wall31=createSprite(60,36,10,70);
  wall32=createSprite(30,75,70,10);
  wall33=createSprite(405,300,10,270);
  wall34=createSprite(405,50,10,100);
  wall35=createSprite(505,300,10,50);
  wall36=createSprite(450,100,100,10);
  wall37=createSprite(500,150,10,109);
  wall38=createSprite(680,204,370,10);
  wall39=createSprite(680,270,370,10);
  wall40=createSprite(865,240,10,150);
  wall41=createSprite(905,240,10,150);
  wall42=createSprite(960,240,10,150);
  wall43=createSprite(915,320,100,10);
  wall44=createSprite(935,160,150,10);
  wall45=createSprite(935,320,150,10);
 
 
 onButton=createSprite(950,550,30,30);
onButton.addImage("off",offButtonImg);
onButton.addImage("on",onButtonImg);
chor=createSprite(50,550,30,30);
 chor.addImage(chorImg);
 chor.scale=0.07;
 onButton.scale=0.1
 
  wall1.shapeColor=color('green');
  wall2.shapeColor=color('green');
  wall3.shapeColor=color('green');
  wall4.shapeColor=color('green');
  wall5.shapeColor=color('green');
  wall6.shapeColor=color('green');
  wall7.shapeColor=color('green');
  wall8.shapeColor=color('green');
  wall9.shapeColor=color('green');
  wall10.shapeColor=color('green');
  wall11.shapeColor=color('green');
  wall12.shapeColor=color('green');
  wall13.shapeColor=color('green');
  wall14.shapeColor=color('green');
  wall15.shapeColor=color('green');
  wall16.shapeColor=color('green');
  wall17.shapeColor=color('green');
  wall18.shapeColor=color('green');
  wall19.shapeColor=color('green');
  wall20.shapeColor=color('green');
  wall21.shapeColor=color('green');
  wall22.shapeColor=color('green');
  wall23.shapeColor=color('green');
  wall24.shapeColor=color('green');
  wall25.shapeColor=color('green');
  wall26.shapeColor=color('green');
  wall27.shapeColor=color('green');
  wall28.shapeColor=color('green');
  wall29.shapeColor=color('green');
  wall30.shapeColor=color('green');
  wall31.shapeColor=color('green');
  wall32.shapeColor=color('green');
  wall33.shapeColor=color('green');
  wall34.shapeColor=color('green');
  wall35.shapeColor=color('green');
  wall36.shapeColor=color('green');
  wall37.shapeColor=color('green');
  wall38.shapeColor=color('green');
  wall39.shapeColor=color('green');
  wall40.shapeColor=color('green');
  wall41.shapeColor=color('green');
  wall42.shapeColor=color('green');
  wall43.shapeColor=color('green');
  wall44.shapeColor=color('green');
  wall45.shapeColor=color('green');
 



  createCanvas(1000,600);
  
}

function draw() {

  background(150);  

  if (keyDown('w')){
    chor.y-=5;
  }
  else if (keyDown('a')){
    chor.x-=5;
  }
  else if (keyDown('s')){
    chor.y+=5;
  }
  else if (keyDown('d')){
    chor.x+=5;
  }


if(chor.isTouching(wall1)||chor.isTouching(wall2)||chor.isTouching(wall3)||chor.isTouching(wall4)||
chor.isTouching(wall5)||chor.isTouching(wall6)||chor.isTouching(wall7)||
chor.isTouching(wall8)||chor.isTouching(wall9)||chor.isTouching(wall10)||
chor.isTouching(wall11)||chor.isTouching(wall12)||chor.isTouching(wall13)||
chor.isTouching(wall14)||chor.isTouching(wall15)||chor.isTouching(wall16)||
chor.isTouching(wall17)||chor.isTouching(wall18)||chor.isTouching(wall19)||
chor.isTouching(wall20)||chor.isTouching(wall21)|chor.isTouching(wall22)||
chor.isTouching(wall23)||chor.isTouching(wall24)||
chor.isTouching(wall25)||chor.isTouching(wall26)||chor.isTouching(wall27)||chor.isTouching(wall28)||
chor.isTouching(wall29)||chor.isTouching(wall30)||chor.isTouching(wall31)||chor.isTouching(wall32)||
chor.isTouching(wall33)||chor.isTouching(wall34)||chor.isTouching(wall35)||chor.isTouching(wall36)||
chor.isTouching(wall37)||chor.isTouching(wall38)||chor.isTouching(wall39)||chor.isTouching(wall40)||
chor.isTouching(wall41)||chor.isTouching(wall42)||chor.isTouching(wall43)||chor.isTouching(wall44)||
chor.isTouching(wall45))
{
  chor.collide(wall1);
  chor.collide(wall2);
  chor.collide(wall3);
  chor.collide(wall4);
  chor.collide(wall5);
  chor.collide(wall6);
  chor.collide(wall7);
  chor.collide(wall8);
  chor.collide(wall9);
  chor.collide(wall10);
  chor.collide(wall11);
  chor.collide(wall12);
  chor.collide(wall13);
  chor.collide(wall14);
  chor.collide(wall15);
  chor.collide(wall16);
  chor.collide(wall17);
  chor.collide(wall18);
  chor.collide(wall19);
  chor.collide(wall20);
  chor.collide(wall21);
  chor.collide(wall22);
  chor.collide(wall23);
  chor.collide(wall24);
  chor.collide(wall25);
  chor.collide(wall26);
  chor.collide(wall27);
  chor.collide(wall28);
  chor.collide(wall29);
  chor.collide(wall30);
  chor.collide(wall31);
  chor.collide(wall32);
  chor.collide(wall33);
  chor.collide(wall34);
  chor.collide(wall35);
  chor.collide(wall36);
  chor.collide(wall37);
  chor.collide(wall38);
  chor.collide(wall39);
  chor.collide(wall40);
  chor.collide(wall41);
  chor.collide(wall42);
  chor.collide(wall43);
  chor.collide(wall44);
  chor.collide(wall45);
  
}
if(chor.isTouching(onButton)){
  onButton.changeAnimation("on",onButtonImg)
  wall12.velocityX=-3
}

edges=createEdgeSprites();
chor.collide(edges[0]);
chor.collide(edges[1])
chor.collide(edges[2])
chor.collide(edges[3])
  drawSprites();
}







