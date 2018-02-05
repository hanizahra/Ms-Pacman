let msPacMan = {
	x: 0,
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
[3,0,0,0,0,0,0,0,0,0,1,0,0,4,5,0,0,1,0,0,0,0,0,0,0,0,0,1],
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
				document.getElementById('board').innerHTML += "<div class = 'wall'></div>";
			} else if (map[y][x] === 0) {
				document.getElementById('board').innerHTML += "<div class = 'white-circle'></div>";
			} else if (map[y][x] === 2) {
				document.getElementById('board').innerHTML += "<div class = 'empty-square'></div>";
			} else if (map[y][x] === 3) {
				let holder = document.createElement('div');
				holder.classList.add('ms-pac-man')
				holder.classList.add('ms-pac-man-right');
				document.getElementById('board').appendChild(holder);
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



// function styleMap() {
// 	document.getElementById('board').innerHTML = "";
// 	for (let y = 0; y < map.length; y++) {
// 		for (let x = 0; x < map[y].length; x++) {
// 			if (map[y][x] === map[0][0]) {
// 				document.getElementById('board').innerHTML += "<div class = 'wall wall-corner'></div>";
// 			} 
// 			if (map[y][x] === map[0][27]) {
// 				document.getElementById('board').innerHTML += "<div class = 'wall wall-corner'></div>";
// 			} 
// 			if (map[y][x] === map[30][0]) {
// 				document.getElementById('board').innerHTML += "<div class = 'wall wall-corner'></div>";
// 			} 
// 			if (map[y][x] === map[30][27]) {
// 				document.getElementById('board').innerHTML += "<div class = 'wall wall-corner'></div>";
// 			}
// 		}
// 	}
// }



document.onkeydown = function(evnt){
	switch(evnt.keyCode){
		case 37: //left
			if (map[msPacMan.y][msPacMan.x -1] !== 1){
				map[msPacMan.y][msPacMan.x] = 2
				msPacMan.x--
				map[msPacMan.y][msPacMan.x] = 3.1;
				drawMap();
				if (map[msPacMan.y][msPacMan.x - 1] === 0){
					incrementScore ();
				};
			} else {
				break;
			}
			
		case 38: //up
			if (map[msPacMan.y-1][msPacMan.x] !== 1){
				map[msPacMan.y][msPacMan.x] = 2
				msPacMan.y--
				map[msPacMan.y][msPacMan.x] = 3.2;
				drawMap();
				if (map[msPacMan.y-1][msPacMan.x] === 0){
					incrementScore ();
				};
			} else {
				break;
			}
			
		case 39: //right
			if (map[msPacMan.y][msPacMan.x+1] !== 1){
				map[msPacMan.y][msPacMan.x] = 2
				msPacMan.x++
				map[msPacMan.y][msPacMan.x] = 3;
				drawMap();
				if (map[msPacMan.y][msPacMan.x + 1] === 0){
					incrementScore ();
				};
			} else {
				break;
			}
			
		case 40: //down
			if (map[msPacMan.y+1][msPacMan.x] !== 1){
				map[msPacMan.y][msPacMan.x] = 2
				msPacMan.y++
				map[msPacMan.y][msPacMan.x] = 3.3;
				drawMap();
				if (map[msPacMan.y][msPacMan.y + 1] === 0){
					incrementScore ();
				};
			} else {
				break;	
			}
								
	}
}


drawMap();



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
	if (score >= 200) {  //1590
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

// setInterval(drawMap, 500);

// document.getElementById('board').map[0]


