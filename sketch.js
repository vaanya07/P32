const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg="sunrise1.png";

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
    background(backgroundImg)
    }

    Engine.update(engine);




}

async function getBackgroundImg(){


    var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
   
        var responseJson= await response.json()
    console.log("Time",responseJson)

    var datetime= responseJson.datetime
    var hour=datetime.slice(11,13)

    console.log(hour)


 
    if(hour>=04&&hour<=20){
        bg="sunrise.png"
    }else if(hour>=00&&hour<=03){
        bg="sunset.png"
    }


    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
   

}
