const E=Matter.Engine
const W=Matter.World
const B=Matter.Bodies
var En
var Wo
var D
var R=[]
function preload() {
BW=loadImage("walking_1.png")    
}

function setup(){
createCanvas(600,800)
En=E.create()
Wo=En.world
console.log(En)    
var U={isStatic:true}
Man=B.rectangle(200,500,200,200,U)   
W.add(Wo,Man)    
}

function draw(){
background("black")
E.update(En)
if(frameCount%20===0){
D=new Drop(random(0,599),0)
R.push(D)
}
for(var I=0;I<R.length;I++){
R[I].Display()    
}
image(BW,this.Man.position.x,this.Man.position.y,200,200)
}   

