/**
 * credits -3 after 1.5s upon clicking Deal
 */
const pay = () => {
  credits -= 3;
  scoreText.innerHTML = `${credits}`;
  canClick = true;
}

/**
 * Deal the cards function
 * display 5 cards after CLICKING deal button
 */
const dealCards = () =>{
  // display -3 credits
  scoreText.innerHTML = `${credits} - 3`;

  // deal 5 cards
  for(let i = 0; i < 5; i+=1){
    playerHand[i] = deck.pop();
    let drawnCards = document.createElement('div');
    drawnCards.classList.add('card');
    if (playerHand[i].suit === '❤' || playerHand[i].suit === '♦'){
      drawnCards.classList.add('red');
    }

    // event listener to make cards clickable
    drawnCards.addEventListener('click', (event) => {
      clickCard(event.currentTarget, i);
    })
    
    drawnCards.innerHTML = `${playerHand[i].name} <br> ${playerHand[i].suit}`;

    if (i===0){
      holdCard1.appendChild(drawnCards); 
    }
    if (i===1){
      holdCard2.appendChild(drawnCards); 
    }
    if (i===2){
      holdCard3.appendChild(drawnCards); 
    }
    if (i===3){
      holdCard4.appendChild(drawnCards); 
    }
    if (i===4){
      holdCard5.appendChild(drawnCards); 
    }
    
  }

  // INSERT SAMEPLE HAND HERE
// playerHand = [
//   { name: '2', suit: '❤', rank: 2  },
//   { name: '3', suit: '❤', rank: 3 },
//   { name: '4', suit: '❤', rank: 4 },
//   { name: '5', suit: '❤', rank: 5  },
//   { name: '6', suit: '❤', rank: 6  },
// ];
//   for(let i = 0; i < 5; i+=1){
//     console.log(`playerHand ${i+1}`, playerHand[i]);
//     let drawnCards = document.createElement('div');
//     drawnCards.classList.add('card');

//     // event listener to make cards clickable
//     drawnCards.addEventListener('click', (event) => {
//       clickCard(event.currentTarget, i);
//     })

//     drawnCards.innerHTML = `${playerHand[i].name} <br> ${playerHand[i].suit}`;
//     if (i==0){
//       holdCard1.appendChild(drawnCards); 
//     }
//     if (i==1){
//       holdCard2.appendChild(drawnCards); 
//     }
//     if (i==2){
//       holdCard3.appendChild(drawnCards); 
//     }
//     if (i==3){
//       holdCard4.appendChild(drawnCards); 
//     }
//     if (i==4){
//       holdCard5.appendChild(drawnCards); 
//     }
    
//   }

  score.innerHTML = `${credits} - 3`;
  dealButton.remove();
  message.innerText= "Select which cards to replace";
  flex2_div2.appendChild(redrawButton);
  flex2_div2.appendChild(roundScoreButton);
  setTimeout(pay, 1000)
}

const initGame = () => {
  // showCredits.innerHTML = `Credits: ${credits}`;
  creditText.innerText = 'Credits: ';
  scoreText.innerHTML = `${credits}`;
  showCredits.appendChild(creditText);
  scoreObtained.appendChild(scoreText);
  // scoreObtained.innerHTML = "+ 100";
  // flex2_credits.appendChild(showCredits);
  // flex2_credits.appendChild(scoreObtained);

  // create SHUFFLED deck of cards
  deck = shuffleCards(makeDeck());

  // button to deal cards when clicked
  flex2_div2.appendChild(dealButton);

  // display message
  message.innerHTML = "Click Deal to begin! <br> &nbsp Require 3 credits";
  displayMessage.appendChild(message);

};

initGame();

dealButton.addEventListener("click", dealCards);

// console.log(deck[0]);
// console.log(deck[0].name);
// console.log(deck[0].suit);
// console.log(deck[0].rank);