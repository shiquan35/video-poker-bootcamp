/**
 * Function to calculate score based on current hand
 * @param {object} - global variable 'playerHand'
 * updates global variable 'score'
 */

const calcHandScore = (hand) => {
  // access playerHand.name, playerHand.suit, playerHand.rank
  // use Object Tally
  
  // loop over hand to tally
  for (let j = 0; j < 5; j+=1){
    var cardName = hand[j].name;
    var cardSuit = hand[j].suit;
    var cardRank = hand[j].rank;

    // If we have seen the card name before, increment its count
    if (cardName in cardNameTally){
      cardNameTally[cardName] += 1;
    }
    // Else, initialise count of this card name to 1
    else {
      cardNameTally[cardName] = 1;
    }

    // If we have seen the card suit before, increment its count
    if (cardSuit in cardSuitTally){
      cardSuitTally[cardSuit] += 1;
    }
    else{
      cardSuitTally[cardSuit] = 1;
    }

    // If we have seen the card rank before, increment its count
    if (cardRank in cardRankTally){
      cardRankTally[cardRank] += 1;
    }
    else{
      cardRankTally[cardRank] = 1;
    }
  }
  console.log("cardNameTally",cardNameTally)
  console.log("cardSuitTally",cardSuitTally)
  console.log("cardRankTally",cardRankTally)
  // ---------------------------- WIN CONDITIONS ----------------------------    

  // iterate through the hand first
  for (cardName in cardNameTally){
    console.log(`There are ${cardNameTally[cardName]} ${cardName}s in the hand`);
    // console.log("cardName", cardName);
    
    // store cards in tempHand array to validate full house and 2 pairs
    tempHand[counter] = cardName;                    
    // console.log(`tempHand${counter}: `,tempHand[counter])
    // console.log('length of temphand', tempHand.length)
    counter += 1;

    // 2. four of a kind (4 same names)
    if (cardNameTally[cardName] === 4){
      console.log('4 OF A KIND');
      // INSERT MESSAGE
      message.innerText = '';
      message.innerText = '4 OF A KIND'
      // INSERT SCORING
      score = 100;
    }

    // 6. three of a kind (3 same name)
    else if (cardNameTally[cardName] === 3){
      console.log('3 OF A KIND');
      // INSERT MESSAGE
      message.innerText = '';
      message.innerText = '3 OF A KIND'
      // INSERT SCORING
      score = 30;
    }

    // 8. 1 pair (2 same name)
    else if (cardNameTally[cardName] === 2){
      console.log('PAIR')
      message.innerText = '';
      message.innerText = 'PAIR'
      score = 7;
    }

  }
  counter = 0;
  // for (cardSuit in cardSuitTally) {
    // console.log(`There are ${cardSuitTally[cardSuit]} ${cardSuit}s in the hand`);
  // }
  for (cardRank in cardRankTally) {
    // console.log(`There are ${cardRankTally[cardRank]} ${cardRank}s in the hand`);
    if (cardRankTally[cardRank] === 2){
      numPair += 1;
    }
    if (cardRankTally[cardRank] === 3){
      numTriplet += 1;
    }
    tempHand[counter] = cardRank; // this method only works for straights (ie. different cards)
    // console.log(`tempHand${counter}`, tempHand[counter])
    counter += 1;
  }

  // 3. full house
  if (numPair === 1 && numTriplet === 1){
    console.log("FULL HOUSE")
    message.innerText = '';
    message.innerText = 'FULL HOUSE'
    numPair = 0;
    numTriplet = 0;
    score = 80;
  }
  // validate FLUSH
  if (cardSuitTally[cardSuit] === 5){
    console.log('FLUSH')
    isFlush = true;
  }
  // validate STRAIGHT
  if (Number(tempHand[0]) === Number(tempHand[1]-1) && 
      Number(tempHand[1]) === Number(tempHand[2]-1) &&
      Number(tempHand[2]) === Number(tempHand[3]-1) &&
      Number(tempHand[3]) === Number(tempHand[4]-1)){
        console.log('STRAIGHT')
        isStraight = true;
        counter = 0; // reset counter
        tempHand = [];
  }

  // 1. straight flush (5 ranks in running order 5 same suit)
  if (isFlush === true && isStraight === true){
    console.log('STRAIGHT FLUSH')
    message.innerText = '';
    message.innerText = 'STRAIGHT FLUSH'
    isFlush = false;
    isStraight = false;
    counter = 0;
    score = 800;
  }

  // 4. flush (5 same suit)
  else if (isFlush === true){
    console.log('JUST A FLUSH');
    message.innerText = '';
    message.innerText = 'FLUSH'
    isFlush = false;
    score = 70;
  }

  // 5. straight (5 ranks in running order)
  else if (isStraight === true){
    console.log('JUST A STRAIGHT');
    message.innerText = '';
    message.innerText = 'STRAIGHT'
    isStraight = false;
    counter = 0;
    score = 60;
  }

  // 7. 2 pairs (2 same name + 2 same name)
  else if (numPair === 2){
    console.log("2 PAIRS")
    message.innerText = '';
    message.innerText = '2 PAIRS'
    numPair = 0;
    score = 15;
  }

  console.log("message: ", message.innerText)
  if (message.innerText === ""){
    message.innerText = "Better luck next time";
  }
  cardNameTally = {};
  cardRankTally = {};
  cardSuitTally = {};
  console.log("obtained score: ", score);
  console.log('final credits: ', credits);
  console.log(numPair, numTriplet, isPair,
              isTriplet, counter,
              tempHand, cardNameTally, cardSuitTally, cardRankTally);
}