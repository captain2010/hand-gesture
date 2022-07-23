noseX = 0;
noseY = 0;
difference = 0;
rightwristX = 0;
leftwristY  = 0;

function setup(){
    video  = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.X;
        noseY = results[0].pose.nose.Y;
        console.log("noseX = " +noseX+ "noseY = "+noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);
        console.log("leftwristX ="+leftwristX+"rightwristX = "+rightwristX+"difference = "+difference);

    }
}

function draw(){
    background('#252625');
    document.getElementById("square_side").innerHTML = "width and height of a square will be = "+difference+"px";
    fill('#F90093');
    stroke('#F90093');
    sqaure(noseX,noseY,difference);
}