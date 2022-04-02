//DATE
document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();

//GAME---------------------------------------------------------------------

//FIELDS

let fieldArray = [];

for (let i = 1; i <= 9; i++) {
	const table = document.getElementById('table');
	const newField = document.createElement('div');

	newField.setAttribute('id', 'field' + i);
	newField.setAttribute('class', 'field');
	table.appendChild(newField);
	fieldArray.push(newField);
}

//START GAME

function resetGame() {
	
	for(let i in fieldArray) {
		fieldArray[i].innerHTML = ' '
		fieldArray[i].style.backgroundColor = 'white'
	}
	document.getElementById('result').innerHTML = ''
	hasWinner = false
}

//MAKE MOVE
	
let player1 = true
let player2 = false
let hasWinner = false

for(let j in fieldArray) {

	fieldArray[j].onclick = ()=> {
		if(fieldArray[j].innerHTML !== 'x' && fieldArray[j].innerHTML !== 'o' && hasWinner === false) {
			if(player1 === true) {
				fieldArray[j].innerHTML = 'x'
				player1 = false
				player2 = true
				checkWinner()
			} else {
				fieldArray[j].innerHTML = 'o'
				player1 = true
				player2 = false
				checkWinner()
			}
		}
	}
}

//CHECK WINNER	

function checkWinner() {
		
	if(fieldArray[0].innerHTML !== ' ' && fieldArray[1].innerHTML === 'x' && fieldArray[0].innerHTML === fieldArray[1].innerHTML && fieldArray[0].innerHTML === fieldArray[2].innerHTML) {
		document.getElementById('result').innerHTML = 'X win!'
		colorOfWinner(fieldArray[0], fieldArray[1], fieldArray[2])
		hasWinner = true
	} else if(fieldArray[3].innerHTML !== ' ' && fieldArray[3].innerHTML === 'x' && fieldArray[3].innerHTML === fieldArray[4].innerHTML && fieldArray[3].innerHTML === fieldArray[5].innerHTML) {
		document.getElementById('result').innerHTML = 'X win!'
		colorOfWinner(fieldArray[3], fieldArray[4], fieldArray[5])
		hasWinner = true
	} else if(fieldArray[6].innerHTML !== ' ' && fieldArray[6].innerHTML === 'x' && fieldArray[6].innerHTML === fieldArray[7].innerHTML && fieldArray[6].innerHTML === fieldArray[8].innerHTML) {
		document.getElementById('result').innerHTML = 'X win!'
		colorOfWinner(fieldArray[6], fieldArray[7], fieldArray[8])
		hasWinner = true
	} else if(fieldArray[0].innerHTML !== ' ' && fieldArray[0].innerHTML === 'x' && fieldArray[0].innerHTML === fieldArray[3].innerHTML && fieldArray[0].innerHTML === fieldArray[6].innerHTML) {
		document.getElementById('result').innerHTML = 'X win!'
		colorOfWinner(fieldArray[0], fieldArray[3], fieldArray[6])
		hasWinner = true
	} else if(fieldArray[1].innerHTML !== ' ' && fieldArray[1].innerHTML === 'x' && fieldArray[1].innerHTML === fieldArray[4].innerHTML && fieldArray[1].innerHTML === fieldArray[7].innerHTML) {
		document.getElementById('result').innerHTML = 'X win!'
		colorOfWinner(fieldArray[1], fieldArray[4], fieldArray[7])
		hasWinner = true
	} else if(fieldArray[2].innerHTML !== ' ' && fieldArray[2].innerHTML === 'x' && fieldArray[2].innerHTML === fieldArray[5].innerHTML && fieldArray[2].innerHTML === fieldArray[8].innerHTML) {
		document.getElementById('result').innerHTML = 'X win!'
		colorOfWinner(fieldArray[2], fieldArray[5], fieldArray[8])
		hasWinner = true
	} else if(fieldArray[0].innerHTML !== ' ' && fieldArray[0].innerHTML === 'x' && fieldArray[0].innerHTML === fieldArray[4].innerHTML && fieldArray[0].innerHTML === fieldArray[8].innerHTML) {
		document.getElementById('result').innerHTML = 'X win!'
		colorOfWinner(fieldArray[0], fieldArray[4], fieldArray[8])
		hasWinner = true
	} else if(fieldArray[2].innerHTML !== ' ' && fieldArray[2].innerHTML === 'x' && fieldArray[2].innerHTML === fieldArray[4].innerHTML && fieldArray[2].innerHTML === fieldArray[6].innerHTML) {
		document.getElementById('result').innerHTML = 'X win!'
		colorOfWinner(fieldArray[2], fieldArray[4], fieldArray[6])
		hasWinner = true
	} else if(fieldArray[0].innerHTML !== ' ' && fieldArray[1].innerHTML === 'o' && fieldArray[0].innerHTML === fieldArray[1].innerHTML && fieldArray[0].innerHTML === fieldArray[2].innerHTML) {
		document.getElementById('result').innerHTML = 'O win!'
		colorOfWinner(fieldArray[0], fieldArray[1], fieldArray[2])
		hasWinner = true
	} else if(fieldArray[3].innerHTML !== ' ' && fieldArray[3].innerHTML === 'o' && fieldArray[3].innerHTML === fieldArray[4].innerHTML && fieldArray[3].innerHTML === fieldArray[5].innerHTML) {
		document.getElementById('result').innerHTML = 'O win!'
		colorOfWinner(fieldArray[3], fieldArray[4], fieldArray[5])
		hasWinner = true
	} else if(fieldArray[6].innerHTML !== ' ' && fieldArray[6].innerHTML === 'o' && fieldArray[6].innerHTML === fieldArray[7].innerHTML && fieldArray[6].innerHTML === fieldArray[8].innerHTML) {
		document.getElementById('result').innerHTML = 'O win!'
		colorOfWinner(fieldArray[6], fieldArray[7], fieldArray[8])
		hasWinner = true
	} else if(fieldArray[0].innerHTML !== ' ' && fieldArray[0].innerHTML === 'o' && fieldArray[0].innerHTML === fieldArray[3].innerHTML && fieldArray[0].innerHTML === fieldArray[6].innerHTML) {
		document.getElementById('result').innerHTML = 'O win!'
		colorOfWinner(fieldArray[0], fieldArray[3], fieldArray[6])
		hasWinner = true
	} else if(fieldArray[1].innerHTML !== ' ' && fieldArray[1].innerHTML === 'o' && fieldArray[1].innerHTML === fieldArray[4].innerHTML && fieldArray[1].innerHTML === fieldArray[7].innerHTML) {
		document.getElementById('result').innerHTML = 'O win!'
		colorOfWinner(fieldArray[1], fieldArray[4], fieldArray[7])
		hasWinner = true
	} else if(fieldArray[2].innerHTML !== ' ' && fieldArray[2].innerHTML === 'o' && fieldArray[2].innerHTML === fieldArray[5].innerHTML && fieldArray[2].innerHTML === fieldArray[8].innerHTML) {
		document.getElementById('result').innerHTML = 'O win!'
		colorOfWinner(fieldArray[2], fieldArray[5], fieldArray[8])
		hasWinner = true
	} else if(fieldArray[0].innerHTML !== ' ' && fieldArray[0].innerHTML === 'o' && fieldArray[0].innerHTML === fieldArray[4].innerHTML && fieldArray[0].innerHTML === fieldArray[8].innerHTML) {
		document.getElementById('result').innerHTML = 'O win!'
		colorOfWinner(fieldArray[0], fieldArray[4], fieldArray[8])
		hasWinner = true
	} else if(fieldArray[2].innerHTML !== ' ' && fieldArray[2].innerHTML === 'o' && fieldArray[2].innerHTML === fieldArray[4].innerHTML && fieldArray[2].innerHTML === fieldArray[6].innerHTML) {
		document.getElementById('result').innerHTML = 'O win!'
		colorOfWinner(fieldArray[2], fieldArray[4], fieldArray[6])
		hasWinner = true
	} else if(fieldArray[0].innerHTML !== ' ' && fieldArray[1].innerHTML !== ' ' && fieldArray[2].innerHTML !== ' ' && fieldArray[3].innerHTML !== ' ' && fieldArray[4].innerHTML !== ' ' && fieldArray[5].innerHTML !== ' ' && fieldArray[6].innerHTML !== ' ' && fieldArray[7].innerHTML !== ' ' && fieldArray[8].innerHTML !== ' ' && hasWinner === false) {
		document.getElementById('result').innerHTML = 'Tie'
	}
}

function colorOfWinner(a1, a2, a3) {
	a1.style.backgroundColor = 'red'
	a2.style.backgroundColor = 'red'
	a3.style.backgroundColor = 'red'
}












