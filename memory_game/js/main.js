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

function checkForMatch() {
	if(cardsInPlay.length === 2) {
		if(cardsInPlay[0].rank === cardsInPlay[1].rank) {
		alert("You found a match!");
		}
		else {
		alert("Sorry, try again.");
		}
	}
}

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







