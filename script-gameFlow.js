/**
 * Make cards clickable
 * @param {card div, integer} - card div, index of playerHand array
 * elevate the chosen cards
 * Store chosen card indices into an object-clickedCards for redraw
 */
const clickCard = (card, cardIndex) => {  
  // manipulate card div
  card.classList.toggle("chosenCard");

  // If we have seen the card index before, remove
  if (cardIndex in clickedCards){
    delete clickedCards[cardIndex];
  }
  // Else, initialise count of this card name to 1
  else {
    clickedCards[cardIndex] = 1;
  }
}

/**
 * Redraw selected cards
 * @param {} - indices of chosen cards
 */

const redraw = () => {
  let indices = Object.keys(clickedCards); // indices is array of keys

  for (let j = 0; j < indices.length; j+=1){
    let tempIndex = indices[j];

    let newCard = deck.pop();
    playerHand[tempIndex] = newCard;


    let newDrawnCard = document.createElement('div');
    newDrawnCard.classList.add('card');
    newDrawnCard.classList.remove('chosenCard');
    newDrawnCard.innerHTML = `${playerHand[tempIndex].name} <br> ${playerHand[tempIndex].suit}`;


    if (playerHand[tempIndex].suit === '❤' || playerHand[tempIndex].suit === '♦'){
      newDrawnCard.classList.add('red');
    }

    // display new drawn card
    // 1. remove card div
    // 2. append
    if (indices[j] == 0){
      holdCard1.removeChild(holdCard1.children[0]);
      holdCard1.appendChild(newDrawnCard);
    }

    if (indices[j] == 1){
      holdCard2.removeChild(holdCard2.children[0]);
      holdCard2.appendChild(newDrawnCard);
    }

    if (indices[j] == 2){
      holdCard3.removeChild(holdCard3.children[0]);
      holdCard3.appendChild(newDrawnCard);
    }

    if (indices[j] == 3){
      holdCard4.removeChild(holdCard4.children[0]);
      holdCard4.appendChild(newDrawnCard);
    }

    if (indices[j] == 4){
      holdCard5.removeChild(holdCard5.children[0]);
      holdCard5.appendChild(newDrawnCard);
    }
  }
  redrawButton.remove();
  message.innerText= "";

}

/**
 * Display score earned, update credits, reset game
 * @param {}
 */
const done = () => {
  canClick = false;
  message.innerText = "";
  calcHandScore(playerHand);
  redrawButton.remove();
  roundScoreButton.remove();
  
  
  // reset
  flex2_div2.appendChild(resetButton);
  if (message.innerText === ""){
    message.innerText = "Better luck next time";
    }

  // show +score for 1500ms, then update credits

  if (score > 0){
    scoreText.innerHTML = `${credits} + ${score}`;
    }
  setTimeout(updateCredits, 1000);
}

/**
 * timeout function to update credits
 * @param {}
 */
const updateCredits = () => {
  credits += score;
  scoreText.innerHTML = `${credits}`;
  canClick = true;
}

/**
 * Reset game - remove re-deal button, add deal button, reset globals
 * @param {}
 */
const reset = () => {
  if (canClick === true){
    resetButton.remove();
    message.innerHTML = "Click Deal to begin! <br> &nbsp Require 3 credits";
    flex2_div2.appendChild(dealButton);
    holdCard1.removeChild(holdCard1.children[0]);
    holdCard2.removeChild(holdCard2.children[0]);
    holdCard3.removeChild(holdCard3.children[0]);
    holdCard4.removeChild(holdCard4.children[0]);
    holdCard5.removeChild(holdCard5.children[0]);

    
    deck = [];
    deck = shuffleCards(makeDeck());
    cardNameTally = {};
    cardRankTally = {};
    cardSuitTally = {};
    isPair = false;
    isTriplet = false;
    numPair = 0;
    numTriplet = 0;
    counter = 0;
    tempHand = [];
    isStraight = false;
    isFlush = false;
    clickedCards = {};
    score = 0;
  }
  
}


redrawButton.addEventListener("click", redraw);
roundScoreButton.addEventListener("click", done);
resetButton.addEventListener("click", reset);