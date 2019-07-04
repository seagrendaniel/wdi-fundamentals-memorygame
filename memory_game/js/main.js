console.log("Up and running!");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

function shuffleDeck(cardArray) {
	var m = cardArray.length, t, i;	
// While there are still cards to shuffle
	while(m) {
		// choose random unshuffled card
		i = Math.floor(Math.random() * m--);
		//move it to the end of the array and switch with shuffled card
		t = cardArray[m];
		cardArray[m] = cardArray[i];
		cardArray[i] = t;
	}
	return cardArray;
}
//var win = 0;
var youWon = 0;
var numberOfWins = document.getElementById('stats');

function checkForMatch() {
	if(cardsInPlay.length === 2) {
		if(cardsInPlay[0].rank === cardsInPlay[1].rank) {
		alert("You found a match!");
		youWon += 1;
		}
		else {
		alert("Sorry, try again.");
		youWon = youWon;
		}
		if (youWon === 1) {
		numberOfWins.innerHTML = "Stats: " + youWon + " game won";
		}
		else if (youWon > 1) {
			numberOfWins.innerHTML = "Stats: " + youWon + " games won";
		}
		else {
			numberOfWins.innerHTML = "Stats: no games won yet";
		}
	}
}

/*function checkForWin {
	if (win === 1){
		youWon += 1;
	}
	else {
		youWon += 0;
	}
}*/

function flipCard() {
	var cardID = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardID]);
	this.setAttribute('src', cards[cardID].cardImage);
	checkForMatch();
}

function createBoard() {
	for(i=0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
	var resetNode = document.getElementById('reset-button');
	resetNode.addEventListener('click', resetGame);
}

function newGame() {
	var clearDiv = document.getElementById('game-board');
	while(clearDiv.firstChild){
		clearDiv.removeChild(clearDiv.firstChild);
	}
	shuffleDeck(cards);
	createBoard();
}

function resetGame() {
	cardsInPlay = [];
	newGame();
} 

newGame();







