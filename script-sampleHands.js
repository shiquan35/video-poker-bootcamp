// ❤
// ♦
// ♠
// ♣

// 1. straight flush (5 ranks in running order 5 same suit)
playerHand = [
  { name: '2', suit: '❤', rank: 2  },
  { name: '3', suit: '❤', rank: 3 },
  { name: '4', suit: '❤', rank: 4 },
  { name: '5', suit: '❤', rank: 5  },
  { name: '6', suit: '❤', rank: 6  },
];

// 2. four of a kind (4 same names)
playerHand = [
  { name: '2', suit: '❤', rank: 2  },
  { name: '2', suit: '♦', rank: 2 },
  { name: '2', suit: '♠', rank: 2 },
  { name: '2', suit: '♣', rank: 2  },
  { name: '9', suit: '❤', rank: 9  },
];


// 3. full house (3 same name + 2 same name)
playerHand = [
  { name: '2', suit: '❤', rank: 2  },
  { name: '2', suit: '♦', rank: 2 },
  { name: '2', suit: '♠', rank: 2 },
  { name: 'K', suit: '♣', rank: 13  },
  { name: 'K', suit: '❤', rank: 13  },
];

// 4. flush (5 same suit)
playerHand = [
  { name: '2', suit: '❤', rank: 2  },
  { name: '4', suit: '❤', rank: 4 },
  { name: '6', suit: '❤', rank: 6 },
  { name: '8', suit: '❤', rank: 8  },
  { name: '10', suit: '❤', rank: 10  },
];

// 5. straight (5 ranks in running order)
playerHand = [
  { name: '2', suit: '❤', rank: 2  },
  { name: '3', suit: '♦', rank: 3 },
  { name: '4', suit: '❤', rank: 4 },
  { name: '5', suit: '♣', rank: 5  },
  { name: '6', suit: '♠', rank: 6  },
];

// 6. three of a kind (3 same name)
playerHand = [
  { name: '2', suit: '❤', rank: 2  },
  { name: '2', suit: '♦', rank: 2 },
  { name: '2', suit: '♠', rank: 2 },
  { name: '5', suit: '♣', rank: 5  },
  { name: '9', suit: '❤', rank: 9  },
];

// 7. 2 pairs (2 same name + 2 same name)
playerHand = [
  { name: '2', suit: '❤', rank: 2  },
  { name: '2', suit: '♦', rank: 2 },
  { name: '4', suit: '♠', rank: 4 },
  { name: '4', suit: '♣', rank: 4  },
  { name: '9', suit: '❤', rank: 9  },
];

// 8. 1 pair (2 same name)
playerHand = [
  { name: '2', suit: '❤', rank: 2  },
  { name: '2', suit: '♦', rank: 2 },
  { name: '5', suit: '♠', rank: 5 },
  { name: '7', suit: '♠', rank: 7  },
  { name: '9', suit: '❤', rank: 9  },
];

for (cardName in cardNameTally) {
  console.log(`There are ${cardNameTally[cardName]} ${cardName}s in the hand`);
  if (cardNameTally[cardName] === 2){
    console.log('PAIR');
  }
}

for (cardSuit in cardSuitTally) {
  console.log(`There are ${cardSuitTally[cardSuit]} ${cardSuit}s in the hand`);
}

for (cardRank in cardRankTally) {
  console.log(`There are ${cardRankTally[cardRank]} ${cardRank}s in the hand`);
}

console.log("cardNameTally: ", cardNameTally); // arranges in order
console.log("cardSuitTally: ", cardSuitTally);
console.log("cardRankTally: ", cardRankTally); // arranges in order
