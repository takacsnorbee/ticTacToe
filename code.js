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
		fieldArray[i].innerHTML = '';
		fieldArray[i].style.backgroundColor = 'white';
	}
	document.getElementById('result').innerHTML = '';
	player1 = true;
	player2 = false;
	hasWinner = false;
}

//MAKE MOVE
	
let player1 = true;
let player2 = false;
let hasWinner = false;

for(let j in fieldArray) {

	fieldArray[j].onclick = ()=> {
		if(fieldArray[j].innerHTML !== 'x' && fieldArray[j].innerHTML !== 'o' && hasWinner === false) {
			if(player1 === true) {
				fieldArray[j].innerHTML = 'x';
				player1 = false;
				player2 = true;
				checkWinner();
			} else {
				fieldArray[j].innerHTML = 'o';
				player1 = true;
				player2 = false;
				checkWinner();
			}
		}
	}
}

//CHECK WINNER	

function checkWinner() {
	const resultField = document.getElementById('result');
	const field_1 = fieldArray[0].innerHTML,
		field_2 = fieldArray[1].innerHTML,
		field_3 = fieldArray[2].innerHTML,
		field_4 = fieldArray[3].innerHTML,
		field_5 = fieldArray[4].innerHTML,
		field_6 = fieldArray[5].innerHTML,
		field_7 = fieldArray[6].innerHTML,
		field_8 = fieldArray[7].innerHTML,
		field_9 = fieldArray[8].innerHTML;

	if (field_1 !== '' && field_1 === field_2 && field_1 === field_3) {
		resultField.innerHTML = field_1 === 'x' ? 'X win!' : 'Y win';
		colorOfWinner(fieldArray[0], fieldArray[1], fieldArray[2]);
		hasWinner = true;
	} else if (field_4 !== '' && field_4 === field_5 && field_4 === field_6) {
		resultField.innerHTML = field_4 === 'x' ? 'X win!' : 'Y win';
		colorOfWinner(fieldArray[3], fieldArray[4], fieldArray[5]);
		hasWinner = true;
	} else if (field_7 !== '' && field_7 === field_8 && field_7 === field_9) {
		resultField.innerHTML = field_7 === 'x' ? 'X win!' : 'Y win';
		colorOfWinner(fieldArray[6], fieldArray[7], fieldArray[8]);
		hasWinner = true;
	} else if (field_1 !== '' && field_1 === field_4 && field_1 === field_7) {
		resultField.innerHTML = field_1 === 'x' ? 'X win!' : 'Y win';
		colorOfWinner(fieldArray[0], fieldArray[3], fieldArray[6]);
		hasWinner = true;
	} else if (field_2 !== '' && field_2 === field_5 && field_2 === field_8) {
		resultField.innerHTML = field_2 === 'x' ? 'X win!' : 'Y win';
		colorOfWinner(fieldArray[1], fieldArray[4], fieldArray[7]);
		hasWinner = true;
	} else if (field_3 !== '' && field_3 === field_6 && field_3 === field_9) {
		resultField.innerHTML = field_3 === 'x' ? 'X win!' : 'Y win';
		colorOfWinner(fieldArray[2], fieldArray[5], fieldArray[8]);
		hasWinner = true;
	} else if (field_1 !== '' && field_1 === field_5 && field_1 === field_9) {
		resultField.innerHTML = field_1 === 'x' ? 'X win!' : 'Y win';
		colorOfWinner(fieldArray[0], fieldArray[4], fieldArray[8]);
		hasWinner = true;
	} else if (field_7 !== '' && field_7 === field_5 && field_7 === field_3) {
		resultField.innerHTML = field_7 === 'x' ? 'X win!' : 'Y win';
		colorOfWinner(fieldArray[6], fieldArray[4], fieldArray[2]);
		hasWinner = true;
	}
}

function colorOfWinner(a1, a2, a3) {
	a1.style.backgroundColor = 'red';
	a2.style.backgroundColor = 'red';
	a3.style.backgroundColor = 'red';
};

