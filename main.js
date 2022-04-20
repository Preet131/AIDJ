var music_selected;
music1 = "";
music2 = "";
music3 = "";
music4 = "";
music5 = "";

var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;
var scoreleftWrist = 0;
var scoreRightWrist = 0;


function preload() {
    music1 = loadSound('music1.mp3');
    music2 = loadSound('music2.mp3');
    music3 = loadSound('music3.mp3');
    music4 = loadSound('music4.mp3');
    music5 = loadSound('music5.mp3');
}

function setup() {
    canvas = createCanvas(900, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);

}


function modelLoaded() {
    console.log("PoseNet is Initialized");

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log("score left wrist - " + scoreleftWrist);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("score right wrist -" + scoreRightWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + ", Left Wrist Y = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rightWristX + ", Right Wrist Y = " + rightWristY);

    }

}

function draw() {
    image(video, 0, 0, 900, 600);
    if (scoreRightWrist > 0.2) {
        fill('green');
        stroke('green');
        circle(rightWristX, rightWristY, 80);
        if (rightWristY > 0 && rightWristY < 100) {
            document.getElementById("speed").innerHTML = "Speed - 0.5x";
            music1.rate(0.5);
            music2.rate(0.5);
            music3.rate(0.5);
            music4.rate(0.5);
            music5.rate(0.5);
        } else if (rightWristY > 100 && rightWristY < 200) {
            document.getElementById("speed").innerHTML = "Speed - 1x";
            music1.rate(1);
            music2.rate(1);
            music3.rate(1);
            music4.rate(1);
            music5.rate(1);
        } else if (rightWristY > 200 && rightWristY < 300) {
            document.getElementById("speed").innerHTML = "Speed - 1.5x";
            music1.rate(1.5);
            music2.rate(1.5);
            music3.rate(1.5);
            music4.rate(1.5);
            music5.rate(1.5);
        } else if (rightWristY > 300 && rightWristY < 400) {
            document.getElementById("speed").innerHTML = "Speed - 2x";
            music1.rate(2);
            music2.rate(2);
            music3.rate(2);
            music4.rate(2);
            music5.rate(2);
        } else {
            document.getElementById("speed").innerHTML = "Speed - 2.5x";
            music1.rate(2.5);
            music2.rate(2.5);
            music3.rate(2.5);
            music4.rate(2.5);
            music5.rate(2.5);
        }
    }
    if (scoreleftWrist > 0.2) {
        fill('red');
        stroke('red');
        circle(leftWristX, leftWristY, 80);
        var volume = Number(leftWristY);
        var removeDecimals = floor(volume);
        setVolume = (removeDecimals / 600);
        volumeFixed = setVolume.toFixed(2);
        document.getElementById('vol_text').innerHTML = "Volume - " + volumeFixed;
        // music1.setVolume(setVolume);
        // music2.setVolume(setVolume);
        // music3.setVolume(setVolume);
        // music4.setVolume(setVolume);
        // music5.setVolume(setVolume);
    }
}

function play() {
    music_selected = document.getElementById("music_selecter").selectedOptions[0].value;
    console.log(music_selected);
    music1.volume = 1;
    music2.volume = 1;
    music3.volume = 1;
    music4.volume = 1;
    music5.volume = 1;
    music1.rate = 1;
    music2.rate = 1;
    music3.rate = 1;
    music4.rate = 1;
    music5.rate = 1;
    if (music_selected == "music1.mp3") {
        music1.stop();
        music2.stop();
        music3.stop();
        music4.stop();
        music5.stop();
        music1.play();
    }

    if (music_selected == "music2.mp3") {
        music1.stop();
        music2.stop();
        music3.stop();
        music4.stop();
        music5.stop();
        music2.play();
    }
    if (music_selected == "music3.mp3") {
        music1.stop();
        music2.stop();
        music3.stop();
        music4.stop();
        music5.stop();
        music3.play();
    }
    if (music_selected == "music4.mp3") {
        music1.stop();
        music2.stop();
        music3.stop();
        music4.stop();
        music5.stop();
        music4.play();
    }
    if (music_selected == "music5.mp3") {
        music1.stop();
        music2.stop();
        music3.stop();
        music4.stop();
        music5.stop();
        music5.play();
    }

}