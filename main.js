mouthx = 0;
mouthy = 0;

function preload() {
    mouth = loadImage('https: //i.postimg.cc/QxtZJTsV/images.jpg');

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mouth, mouthx, mouthy, 50, 20);
}

function takeSnapshot() {
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log("PoseNet is Initialized");

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        mouthx = results[0].pose.mouth.x - 25;
        mouthy = results[0].pose.mouth.y + 15;

    }
}