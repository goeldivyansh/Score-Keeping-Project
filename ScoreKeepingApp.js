var button1 = document.querySelector("#p1");
var button2 = document.querySelector("#p2");
var button3 = document.querySelector("#reset");

var span1 = document.querySelector("#span1");
var span2 = document.querySelector("#span2");
var input = document.querySelector("input");
var winningScoreDisplay = document.querySelector("#times");
var resultMsgDisplay = document.querySelector("#resultMsg");
var resetMsgDisplay = document.querySelector("#resetMsg");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

button1.addEventListener("click",p1);
button2.addEventListener("click",p2);
button3.addEventListener("click",reset);
input.addEventListener("change",numInput);


function p1() 
{
	if(gameOver === false) 
	{
		p1Score++;
		if(p1Score < winningScore) 
		{
			span1.textContent = p1Score;
		}
		else if(p1Score === winningScore)
		{
			span1.classList.add("winner");
			span1.textContent = p1Score;
			resultMsgDisplay.textContent = "Player 1 wins!!";
			resetMsgDisplay.textContent = "Tap Reset to play again!!";
			gameOver = true;	
		}	
	}
	// else {
	// 	span1.classList.remove("winner");
	// 	reset();
	// 	gameOver=false;
	// }
}

function p2() 
{
	if(gameOver === false) 
	{
		p2Score++;
		if(p2Score < winningScore) 
		{
			span2.textContent = p2Score;
		}
		else if(p2Score === winningScore)
		{
			span2.classList.add("winner");
			span2.textContent = p2Score;
			resultMsgDisplay.textContent = "Player 2 wins!!";
			resetMsgDisplay.textContent = "Tap Reset to play again!";
			gameOver = true;	
		}		
	}
	// else {
	// 	span2.classList.remove("winner");
	// 	reset();
	// 	gameOver=false;
	// }
}

function reset()
{
	p1Score = 0;
	p2Score = 0;
	span1.textContent = p1Score;
	span2.textContent = p1Score;
	span1.classList.remove("winner");
	span2.classList.remove("winner");
	resultMsgDisplay.textContent = "";
	resetMsgDisplay.textContent = "";
	gameOver=false;
}


function numInput() 
{
	if(Number(input.value) == 0)
	{
		alert("You must play to win.")
	}
	if(Number(input.value) < 0)
	{
		alert("Learn some maths first.")
	}
	else
	{
		winningScoreDisplay.textContent = input.value;
		winningScore = Number(input.value);
	}
	reset();
}
