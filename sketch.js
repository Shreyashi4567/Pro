const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles=[];
var plinkos=[];
var divisions=[];
var DivisionHeight = 300;
function setup(){
    var canvas = createCanvas(800,480);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,470,1200,20);
    //To create the divisions:-
    for (var k = 0; k<=width; k = k + 150)
    {
        divisions.push(new Division(k,height-DivisionHeight/2,10,DivisionHeight));
    }
    //To create the plinkos:-
    for(var j = 40; j<=width; j = j + 50)
    {
        plinkos.push(new Plinko(j,75,20));
    }
    Engine.run(engine);
}
function draw()
{
    background('Fuchsia');
    Engine.update(engine);
    for(var k=0;k<divisions.length;k++)
    {
        divisions[k].display(); 
    }
    for(var j=40;j<plinkos.length;j++)
    {
        plinkos[j].display();
    }
    ground.display();
}