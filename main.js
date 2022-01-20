function preload(){
    clown_nose= loadImage('https://i.postimg.cc/VNmk7RM4/clown-nosee.png')
}

function draw(){
    image(video, 0, 0, 300, 300);
    
    image(clown_nose, noseX, noseY, 30, 30);

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
        noseX=results[0].pose.nose.x- 13;
        noseY= results[0].pose.nose.y-13;
        console.log("nose x= "+ noseX );
        console.log("nose y= "+noseY );
    }
}