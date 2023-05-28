leftwristX=0;
rightwristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(600,500);

    canvas=createCanvas(600,500);
    canvas.position( 580,115);

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);

}
 function modelloaded(){
    console.log("Model is intialized!!!");
 }
 function gotPoses(results){
     if(results.length>0){
      console.log(results);
 leftwristX=results[0].pose.leftWrist.x;
 rightwristX=results[0].pose.rightWrist.x;
 difference=floor(leftwristX-rightwristX);
 console.log("leftwristX="+leftwristX+"rightwristX="+rightwristX+"difference="+difference);
     }
 }
 function draw(){
    background("#cfdfee");
   text("Shreejita",40,400);
   textSize(difference);

 }
 