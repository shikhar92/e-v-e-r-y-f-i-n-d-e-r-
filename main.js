status1="";
objects=[];

function setup(){

c1=createCanvas(500,300);
c1.center();
v1=createCapture(VIDEO);
v1.hide();

}

function draw(){

image(v1,0,0,500,300)

if(status1 != "")
{
    myModel.detect(v1,gotResult)
for(i=0;i<objects.length;i++)
{

document.getElementById("status").innerHTML="Object Detected"
percent=floor(objects[i].confidence*100);
fill("yellow")
text(objects[i].label+" "+percent+" %",objects[i].x+15,objects[i].y+15 )
noFill();
rect (objects[i].x,objects[i].y,objects[i].width,objects[i].height)

if(objects[i].label==on)
{

v1.stop()
myModel.detect(gotResult)
document.getElementById("status").innerHTML=on+" Found"
sp=window.speechSynthesis;
utterThis=new SpeechSynthesisUtterance(on+"Found");
sp.speak(utterThis);

}

else{

document.getElementById("status").innerHTML=on+" Not Found"

}

}

}


}

function Start(){

myModel=ml5.objectDetector("cocossd",modelLoaded)
document.getElementById("status").innerHTML="Status : Detecting Objects"
on=document.getElementById("objname").value

}

function modelLoaded(){

console.log("Model is Loaded")
status1=true;

}

function gotResult(error,results){
    if(error){

console.log(error);

    }
else{

console.log(results);
objects=results;

}
}