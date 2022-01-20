function preload(){

}

function draw(){
    image(video, 0, 0, 300, 300);
    circle(noseX, noseY, 20);
    fill(225, 0, 0);
    stroke(225,0,0);

}

noseX=0;
noseY=0;

function setup(){
   canvas= createCanvas(300,300);
   canvas.center();

   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();

   poseNet= ml5.poseNet(video, modelLoded);

   poseNet.on('pose', gotPoses);
}

function modelLoded(){
    console.log("poseNet is initialised");
}


function Take_snapshot(){
    save('image.png');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("nose x= "+ noseX );
        console.log("nose y= "+noseY );
    }
}