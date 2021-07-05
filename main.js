function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump = loadSound("jump.wav");
	mario_die = loadSound("mariodie.wav");
	mario_kick = loadSound("kick.wav");
	game_over = loadSound("gameover.wav");
	mario_coins = loadSound("coin.wav")
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("video");
	posenet = ml5.poseNet(video, modelloaded);
	posenet.on("pose", gotPoses);
}

function draw() {
	game()
}

function modelloaded(){
	console.log("modeloaded")
}

function gotPoses(results){
	if(results.length>0){
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}






