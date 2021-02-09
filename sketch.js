
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world;
var stand1, stand2;

var polygon;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10,
    block11, block12, block13, block14, block15, block16, block17, block18, block19, block20,
    block21, block22, block23, block24, block25, block26, block27, block28, block29, block30;

//var Slingshot;

function preload(){

}

function setup(){
    createCanvas(1350, 800);

    engine = Engine.create();
    world = engine.world;

    //Engine.create(engine);
    stand1 = new Ground(700, 700, 400, 10);
    stand2 = new Ground(1040, 400, 300, 10);

    polygon = new Polygon(100, 100, 50);

    //of lower stand.
    //i will writing row no. from downwards.
    //1st row.
    fill("pink");
    block1 = new Block(590, 670, 50, 50);
    block2 = new Block(650, 670, 50, 50);
    block3 = new Block(710, 670, 50, 50);
    block4 = new Block(770, 670, 50, 50);
    block5 = new Block(830, 670, 50, 50);
    //2nd row.
    block6 = new Block(620, 620, 50, 50);
    block7 = new Block(680, 620, 50, 50);
    block8 = new Block(740, 620, 50, 50);
    block9 = new Block(800, 620, 50, 50);
    //3rd row.
    block10 = new Block(650, 570, 50, 50);
    block11 = new Block(710, 570, 50, 50);
    block12 = new Block(770, 570, 50, 50);
    //4th row.
    block13 = new Block(680, 520, 50, 50);
    block14 = new Block(740, 520, 50, 50);
    //5th row.
    block15 = new Block(710, 470, 50, 50);
   // noFill();

    //of upper stand.
    //i will writing row no. from downwards.
    //1st row.
    block16 = new Block(950, 370, 50, 50);
    block17 = new Block(1010, 370, 50, 50);
    block18 = new Block(1070, 370, 50, 50);
    block19 = new Block(1130, 370, 50, 50);
    //2nd row.
    block20 = new Block(980, 320, 50, 50);
    block21 = new Block(1040, 320, 50, 50);
    block22 = new Block(1100, 320, 50, 50);
    //3rd row.
    block23 = new Block(1010, 270, 50, 50);
    block24 = new Block(1070, 270, 50, 50);
    //4th row.
    block25 = new Block(1040, 220, 50, 50);

    Slingshot = new Slingshot(polygon.Body, {x: 100, y: 200});
}

function draw(){
    background("black");
    Engine.update(engine);
    stand1.display();
    stand2.display();
    polygon.display();
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
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    Slingshot.Body();
    drawSprites();
}
