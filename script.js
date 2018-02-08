let msPacMan = {
	x: 1,
	y: 14
}


let map =[
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
[1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
[1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
[1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
[1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
[1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1],
[1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1],
[1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1],
[1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1],
[1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1],
[1,3,0,0,0,0,0,0,0,0,1,0,0,4,5,0,0,1,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,0,1,1,0,1,0,0,6,7,0,0,1,0,1,1,0,1,1,1,1,1,1],
[1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1],
[1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1],
[1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1],
[1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
[1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
[1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1],
[1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
[1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
[1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
[1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
[1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]


function drawMap() {
	document.getElementById('board').innerHTML = "";
	for (let y = 0; y < map.length; y++) {
		for (let x = 0; x < map[y].length; x++) {
			if (map[y][x] === 1){
				document.getElementById('board').innerHTML += `<div class = 'wall'></div>`;
			} else if (map[y][x] === 0) {
				document.getElementById('board').innerHTML += `<div class = 'white-circle' id='${x}x${y}'></div>`;
			} else if (map[y][x] === 2) {
				document.getElementById('board').innerHTML += `<div class = 'empty-square'></div>`;
			} else if (map[y][x] === 3) {
				let holder = document.createElement('div');
				holder.classList.add('ms-pac-man')
				holder.classList.add('ms-pac-man-right');
				document.getElementById('board').appendChild(holder);
				document.getElementById('board').innerHTML += `<div class = 'empty-square' id='${x}x${y}'></div>`;
				// document.getElementById('board').innerHTML += "<div id = 'ms-pac-man'></div>";
			} else if (map[y][x] === 3.1) {
				let holder = document.createElement('div');
				holder.classList.add('ms-pac-man')
				holder.classList.add('ms-pac-man-left');
				document.getElementById('board').appendChild(holder);
				// document.getElementById('board').innerHTML += "<div id = 'ms-pac-man'></div>";
			} else if (map[y][x] === 3.2) {
				let holder = document.createElement('div');
				holder.classList.add('ms-pac-man')
				holder.classList.add('ms-pac-man-up');
				document.getElementById('board').appendChild(holder);
				// document.getElementById('board').innerHTML += "<div id = 'ms-pac-man'></div>";
			} else if (map[y][x] === 3.3) {
				let holder = document.createElement('div');
				holder.classList.add('ms-pac-man')
				holder.classList.add('ms-pac-man-right-down');
				document.getElementById('board').appendChild(holder);
				// document.getElementById('board').innerHTML += "<div id = 'ms-pac-man'></div>";
			} else if (map[y][x] === 3.4) {
				let holder = document.createElement('div');
				holder.classList.add('ms-pac-man')
				holder.classList.add('ms-pac-man-left-down');
				document.getElementById('board').appendChild(holder);
				// document.getElementById('board').innerHTML += "<div id = 'ms-pac-man'></div>";
			} else if (map[y][x] === 4) {
				let holder = document.createElement('div');
				holder.classList.add('ghosts')
				holder.classList.add('g1');
				// holder.setAttribute('style', `background: url("images/ghost-pink.png")`)
				console.log(holder);
				// document.getElementById('board').innerHTML += holder;
				document.getElementById('board').appendChild(holder);

				// document.getElementById('board').innerHTML += "<div class = 'ghosts'>"+img1.src+"</div>";
			} else if (map[y][x] === 5) {
				let holder = document.createElement('div');
				holder.classList.add('ghosts')
				holder.classList.add('g2');
				document.getElementById('board').appendChild(holder);
				// document.getElementById('board').innerHTML += "<div class = 'white-circle'></div>";
			} else if (map[y][x] === 6) {
				let holder = document.createElement('div');
				holder.classList.add('ghosts')
				holder.classList.add('g3');
				document.getElementById('board').appendChild(holder);
				// document.getElementById('board').innerHTML += "<div class = 'white-circle'></div>";
			} else if (map[y][x] === 7) {
				let holder = document.createElement('div');
				holder.classList.add('ghosts')
				holder.classList.add('g4');
				document.getElementById('board').appendChild(holder);
				// document.getElementById('board').innerHTML += "<div class = 'white-circle'></div>";
			}
		}
		document.getElementById('board').innerHTML += "<br>";
	}
}

drawMap();

let orient = 'right';
function setOrientation (evnt){
	switch(evnt.keyCode){
		case 37: //left
		orient = "left";
		break;
			
		case 38: //up
		orient = "up";	
		break;
			
			
		case 39: //right
		orient = "right";	
		break;
			
			
		case 40: //down
		orient = "down";
		break;	

		case 32: //space
		orient = null					
	}
	console.log(`hello set Orient ${orient}`)

}


function init(){
	msPacManMoving=document.querySelector('.ms-pac-man');				
	msPacManMoving.style.position='absolute';
	msPacManMoving.style.left='45px';
	msPacManMoving.style.top='630px';
}
function moveMsPacMan(){				
	// let key_code=evnt.which||evnt.keyCode;
	switch(orient){
		case 'left':
		console.log(map[msPacMan.y][msPacMan.x-1])
			if (map[msPacMan.y][msPacMan.x -1] !== 1){
				map[msPacMan.y][msPacMan.x] = 2
				msPacMan.x--
				map[msPacMan.y][msPacMan.x] = 3.1;
				msPacManMoving.style.left=parseInt(msPacManMoving.style.left)-45 +'px';
				let pacFacing = document.querySelector('.ms-pac-man');
				pacFacing.setAttribute('class', 'ms-pac-man ms-pac-man-left');
				if (map[msPacMan.y][msPacMan.x - 1] === 0){
					incrementScore ();
				};
				let whiteCircle = map[msPacMan.y][msPacMan.x+1]
				if (whiteCircle === 2) {
					empty = document.getElementById(`${msPacMan.x}x${msPacMan.y}`);
					console.log(empty);
					empty.classList.remove('white-circle');
					empty.classList.add('empty-square');
				};	
			}
		break;
		case 'up':
			if (map[msPacMan.y-1][msPacMan.x] !== 1){
				map[msPacMan.y][msPacMan.x] = 2
				msPacMan.y--
				map[msPacMan.y][msPacMan.x] = 3.2;
				msPacManMoving.style.top=parseInt(msPacManMoving.style.top)-45 +'px';
				let pacFacing = document.querySelector('.ms-pac-man');
				pacFacing.setAttribute('class', 'ms-pac-man ms-pac-man-up');
				if (map[msPacMan.y-1][msPacMan.x] === 0){
					incrementScore ();
				};
				let whiteCircle = map[msPacMan.y+1][msPacMan.x]
				if (whiteCircle === 2) {
					empty = document.getElementById(`${msPacMan.x}x${msPacMan.y}`);
					console.log(empty);
					empty.classList.remove('white-circle');
					empty.classList.add('empty-square');
				};
			}
		break;
		case 'right':
			if (map[msPacMan.y][msPacMan.x+1] !== 1){
				map[msPacMan.y][msPacMan.x] = 2
				msPacMan.x++
				map[msPacMan.y][msPacMan.x] = 3;
				msPacManMoving.style.left=parseInt(msPacManMoving.style.left)+45 +'px';
				let pacFacing = document.querySelector('.ms-pac-man');
				pacFacing.setAttribute('class', 'ms-pac-man ms-pac-man-right');
				if (map[msPacMan.y][msPacMan.x + 1] === 0){
					incrementScore ();
				};
				let whiteCircle = map[msPacMan.y][msPacMan.x-1]
				if (whiteCircle === 2) {
					empty = document.getElementById(`${msPacMan.x}x${msPacMan.y}`);
					console.log(empty);
					empty.classList.remove('white-circle');
					empty.classList.add('empty-square');
				};
			}
		break;
		case 'down':
			if (map[msPacMan.y+1][msPacMan.x] !== 1){
				map[msPacMan.y][msPacMan.x] = 2
				msPacMan.y++
				map[msPacMan.y][msPacMan.x] = 3.3;
				msPacManMoving.style.top=parseInt(msPacManMoving.style.top)+45 +'px';
				let pacFacing = document.querySelector('.ms-pac-man');
				pacFacing.setAttribute('class', 'ms-pac-man ms-pac-man-left-down');
				if (map[msPacMan.y][msPacMan.y + 1] === 0){
					incrementScore ();
				};
				let whiteCircle = map[msPacMan.y-1][msPacMan.x]
				if (whiteCircle === 2) {
					empty = document.getElementById(`${msPacMan.x}x${msPacMan.y}`);
					console.log(empty);
					empty.classList.remove('white-circle');
					empty.classList.add('empty-square');
				};
			}
		break;						
	}
}



setInterval(moveMsPacMan, 500);



// document.onkeydown = function(evnt){
// 	switch(evnt.keyCode){
// 		case 37: //left
// 			if (map[msPacMan.y][msPacMan.x -1] !== 1){
// 				map[msPacMan.y][msPacMan.x] = 2
// 				msPacMan.x--
// 				map[msPacMan.y][msPacMan.x] = 3.1;
// 				// drawMap();
// 				let orient = "left";
// 				console.log(`Now facing ${orient}`)	
// 				if (map[msPacMan.y][msPacMan.x - 1] === 0){
// 					incrementScore ();
// 				};
// 			} else {
// 				break;
// 			}
			
// 		case 38: //up
// 			if (map[msPacMan.y-1][msPacMan.x] !== 1){
// 				map[msPacMan.y][msPacMan.x] = 2
// 				msPacMan.y--
// 				map[msPacMan.y][msPacMan.x] = 3.2;
// 				// drawMap();
// 				let orient = "up";
// 				console.log(`Now facing ${orient}`)	
// 				if (map[msPacMan.y-1][msPacMan.x] === 0){
// 					incrementScore ();
// 				};
// 			} else {
// 				break;
// 			}
			
// 		case 39: //right
// 			if (map[msPacMan.y][msPacMan.x+1] !== 1){
// 				map[msPacMan.y][msPacMan.x] = 2
// 				msPacMan.x++
// 				map[msPacMan.y][msPacMan.x] = 3;
// 				// drawMap();
// 				movePacMan();
// 				let orient = "right";
// 				console.log(`Now facing ${orient}`)	
// 				if (map[msPacMan.y][msPacMan.x + 1] === 0){
// 					incrementScore ();
// 				};
// 			} else {
// 				break;
// 			}
			
// 		case 40: //down
// 			if (map[msPacMan.y+1][msPacMan.x] !== 1){
// 				map[msPacMan.y][msPacMan.x] = 2
// 				msPacMan.y++
// 				map[msPacMan.y][msPacMan.x] = 3.3;
// 				// drawMap();
// 				let orient = "down";
// 				console.log(`Now facing ${orient}`)	
// 				if (map[msPacMan.y][msPacMan.y + 1] === 0){
// 					incrementScore ();
// 				};
// 			} else {
// 				break;	
// 			}					
// 	}
// }




let pinky = {  // 4 on map
x: 13,
y: 14
}

let reddy = {  // 5 on map
x: 14,
y: 14
}

let orangey = {  // 6 on map
x: 13,
y: 15
}

let turquoisey = {  // 7 on map
x: 14,
y: 15 
}


//Pink Ghost

function initPink(){
	pinkyMoving=document.querySelector('.g1');				
	pinkyMoving.style.position='absolute';
	pinkyMoving.style.left='585px';
	pinkyMoving.style.top='630px';
}
function movingPinky(){				
	if (map[pinky.y][pinky.x -1] !== 1){ // go left
		map[pinky.y][pinky.x] = 0
		pinky.x--
		map[pinky.y][pinky.x] = 4;
		pinkyMoving.style.left=parseInt(pinkyMoving.style.left)-45 +'px';
	} 
	if (map[pinky.y-1][pinky.x] !== 1 && map[pinky.y-2][pinky.x] !== 1){ // go up
		map[pinky.y][pinky.x] = 0
		pinky.y -= 1
		map[pinky.y][pinky.x] = 4;
		pinkyMoving.style.top=parseInt(pinkyMoving.style.top)-45 +'px';
	}  
	if (map[pinky.y][pinky.x+1] !== 1){ // go right
		map[pinky.y][pinky.x] = 0
		pinky.x++
		map[pinky.y][pinky.x] = 4;
		pinkyMoving.style.left=parseInt(pinkyMoving.style.left)+45 +'px';
	}  
	if (map[pinky.y+1][pinky.x] !== 1){ // go down
		map[pinky.y][pinky.x] = 0
		pinky.y++
		map[pinky.y][pinky.x] = 4;
		pinkyMoving.style.top=parseInt(pinkyMoving.style.top)+45 +'px';
	}
}



// setInterval(movingPinky, 500);
initPink()


//Red Ghost

function initRed(){
	reddyMoving=document.querySelector('.g2');				
	reddyMoving.style.position='absolute';
	reddyMoving.style.left='632px';
	reddyMoving.style.top='630px';
}
function movingReddy(){				
	if (map[reddy.y][reddy.x -1] !== 1){ // go left
		map[reddy.y][reddy.x] = 0
		reddy.x--
		map[reddy.y][reddy.x] = 4;
		reddyMoving.style.left=parseInt(reddyMoving.style.left)-45 +'px';
	} 
	if (map[reddy.y-1][reddy.x] !== 1 && map[reddy.y-2][reddy.x] !== 1){ // go up
		map[reddy.y][reddy.x] = 0
		reddy.y -= 1
		map[reddy.y][reddy.x] = 4;
		reddyMoving.style.top=parseInt(reddyMoving.style.top)-45 +'px';
	}  
	if (map[reddy.y][reddy.x+1] !== 1){ // go right
		map[reddy.y][reddy.x] = 0
		reddy.x++
		map[reddy.y][reddy.x] = 4;
		reddyMoving.style.left=parseInt(reddyMoving.style.left)+45 +'px';
	}  
	if (map[reddy.y+1][reddy.x] !== 1){ // go down
		map[reddy.y][reddy.x] = 0
		reddy.y++
		map[reddy.y][reddy.x] = 4;
		reddyMoving.style.top=parseInt(reddyMoving.style.top)+45 +'px';
	}
}



// setInterval(movingReddy, 500);
initRed()




//Orange Ghost

function initOrange(){
	orangeMoving=document.querySelector('.g3');				
	orangeMoving.style.position='absolute';
	orangeMoving.style.left='585px';
	orangeMoving.style.top='670px';
}
function movingOrangey(){				
	if (map[orangey.y][orangey.x -1] !== 1){ // go left
		map[orangey.y][orangey.x] = 0
		orangey.x--
		map[orangey.y][orangey.x] = 4;
		orangeMoving.style.left=parseInt(orangeMoving.style.left)-45 +'px';
	} 
	if (map[orangey.y-1][orangey.x] !== 1 && map[orangey.y-2][orangey.x] !== 1){ // go up
		map[orangey.y][orangey.x] = 0
		orangey.y -= 1
		map[orangey.y][orangey.x] = 4;
		orangeMoving.style.top=parseInt(orangeMoving.style.top)-45 +'px';
	}  
	if (map[orangey.y][orangey.x+1] !== 1){ // go right
		map[orangey.y][orangey.x] = 0
		orangey.x++
		map[orangey.y][orangey.x] = 4;
		orangeMoving.style.left=parseInt(orangeMoving.style.left)+45 +'px';
	}  
	if (map[orangey.y+1][orangey.x] !== 1){ // go down
		map[orangey.y][orangey.x] = 0
		orangey.y++
		map[orangey.y][orangey.x] = 4;
		orangeMoving.style.top=parseInt(orangeMoving.style.top)+45 +'px';
	}
}



// setInterval(movingOrangey, 500);
initOrange()




//Turquoise Ghost

function initTurq(){
	turqMoving=document.querySelector('.g4');				
	turqMoving.style.position='absolute';
	turqMoving.style.left='632px';
	turqMoving.style.top='670px';
}
function movingTurquoise(){				
	if (map[turqy.y][turqy.x -1] !== 1){ // go left
		map[turqy.y][turqy.x] = 0
		turqy.x--
		map[turqy.y][turqy.x] = 4;
		turqMoving.style.left=parseInt(turqMoving.style.left)-45 +'px';
	} 
	if (map[turqy.y-1][turqy.x] !== 1 && map[turqy.y-2][turqy.x] !== 1){ // go up
		map[turqy.y][turqy.x] = 0
		turqy.y -= 1
		map[turqy.y][turqy.x] = 4;
		turqMoving.style.top=parseInt(turqMoving.style.top)-45 +'px';
	}  
	if (map[turqy.y][turqy.x+1] !== 1){ // go right
		map[turqy.y][turqy.x] = 0
		turqy.x++
		map[turqy.y][turqy.x] = 4;
		turqMoving.style.left=parseInt(turqMoving.style.left)+45 +'px';
	}  
	if (map[turqy.y+1][turqy.x] !== 1){ // go down
		map[turqy.y][turqy.x] = 0
		turqy.y++
		map[turqy.y][turqy.x] = 4;
		turqMoving.style.top=parseInt(turqMoving.style.top)+45 +'px';
	}
}



// setInterval(movingTurquoise, 500);
initTurq()







document.addEventListener('keydown', setOrientation);
// setInterval(moveMsPacMan, 500)

let score = 0;
const circlePoints = document.querySelector('.white-circle');
const scoreDisplay = document.querySelector('#score');

function incrementScore () {
	console.log("this function is running")
	score += 5;
	scoreDisplay.innerText = `Score: ${score}`;
	userWon ()
}

function userWon () {
	if (score >= 1040) {  //1040
		// window.location.href = "index3.html";
		document.getElementById('board').setAttribute('id', 'board-end-game');
		document.getElementById('score-board').setAttribute('id', 'score-board-appear');
		updateScoreBoard();
	} 
}

function updateScoreBoard() {
	let topScore = document.getElementById('1-score').innerText;
	let secondScore = document.getElementById('2-score').innerText;
	let thirdScore = document.getElementById('3-score').innerText;
	let fourthScore = document.getElementById('4-score').innerText;
	let fifthScore = document.getElementById('5-score').innerText;
	let sixthScore = document.getElementById('6-score').innerText;
	let seventhScore = document.getElementById('7-score').innerText;
	let eightScore = document.getElementById('8-score').innerText;
	let ninthScore = document.getElementById('9-score').innerText;
	let tenthScore = document.getElementById('10-score').innerText;
	let topName = document.getElementById('1-name');
	let secondName = document.getElementById('2-name');
	let thirdName = document.getElementById('3-name');
	let fourthName = document.getElementById('4-name');
	let fifthName = document.getElementById('5-name');
	let sixthName = document.getElementById('6-name');
	let seventhName = document.getElementById('7-name');
	let eigthName = document.getElementById('8-name');
	let ninthName = document.getElementById('9-name');
	let tenthName = document.getElementById('10-name');
	if (score > topScore) {
		document.getElementById('1-score').innerText = score
		// topName = NAME INPUT?
		let userName = prompt("You have the top score! Enter your name to the scoreboard!");
		document.getElementById('1-name').innerText = userName;
	} else if (score > secondScore) {
		document.getElementById('2-score').innerText = score
		// topName = NAME INPUT?
		let userName = prompt("You got the second top score! Enter your name to the scoreboard!");
		document.getElementById('2-name').innerText = userName;
	} else if (score > thirdScore) {
		document.getElementById('3-score').innerText = score
		// topName = NAME INPUT?
		let userName = prompt("You got the second third top score! Enter your name to the scoreboard!");
		document.getElementById('3-name').innerText = userName;
	} else if (score > fifthScore) {
		document.getElementById('4-score').innerText = score
		// topName = NAME INPUT?
		let userName = prompt("Enter your name to the scoreboard!");
		document.getElementById('4-name').innerText = userName;
	} else if (score > sixthScore) {
		document.getElementById('5-score').innerText = score
		// topName = NAME INPUT?
		let userName = prompt("Enter your name to the scoreboard!");
		document.getElementById('5-name').innerText = userName;
	} else if (score > seventhScore) {
		document.getElementById('6-score').innerText = score
		// topName = NAME INPUT?
		let userName = prompt("Enter your name to the scoreboard!");
		document.getElementById('6-name').innerText = userName;
	} else if (score > eightScore) {
		document.getElementById('7-score').innerText = score
		// topName = NAME INPUT?
		let userName = prompt("Enter your name to the scoreboard!");
		document.getElementById('7-name').innerText = userName;
	} else if (score > ninthScore) {
		document.getElementById('8-score').innerText = score
		// topName = NAME INPUT?
		let userName = prompt("Enter your name to the scoreboard!");
		document.getElementById('8-name').innerText = userName;
	} else if (score > tenthScore) {
		document.getElementById('9-score').innerText = score
		// topName = NAME INPUT?
		let userName = prompt("Enter your name to the scoreboard!");
		document.getElementById('9-name').innerText = userName;
	} else if (score > topScore) {
		document.getElementById('10-score').innerText = score
		// topName = NAME INPUT?
		let userName = prompt("Enter your name to the scoreboard!");
		document.getElementById('10-name').innerText = userName;
	}
}




// document.getElementById('board').map[0]
window.onload=init;
// window.onload=init2;


