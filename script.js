let pacMan= null;
	function init(){
		pacMan=document.getElementById("image1");				
		pacMan.style.position='relative';
		pacMan.style.left='0px';
		pacMan.style.top='0px';
	}
	function movePacMan(evnt){				
		let key_code=evnt.which||evnt.keyCode;
		switch(key_code){
			case 37:
				moveLeft();
				break;
			case 38:
				moveUp();
				break;
			case 39:
				moveRight();
				break;
			case 40:
				moveDown();
				break;						
		}
	}
	function moveLeft(){
		pacMan.style.left=parseInt(pacMan.style.left)-10 +'px';
	}
	function moveUp(){
		pacMan.style.top=parseInt(pacMan.style.top)-10 +'px';
	}
	function moveRight(){
		pacMan.style.left=parseInt(pacMan.style.left)+10 +'px';
	}
	function moveDown(){
		pacMan.style.top=parseInt(pacMan.style.top)+10 +'px';
	}
	window.onload=init;
