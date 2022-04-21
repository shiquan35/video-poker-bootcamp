let deck;

// array storing cards metadata
let playerHand = [];  

// button to deal cards
var dealButton = document.createElement('button');
dealButton.innerText = "Deal";
dealButton.classList.add("buttons");

// 5 divs to display cards
var card1 = document.createElement('div');
var card2 = document.createElement('div');
var card3 = document.createElement('div');
var card4 = document.createElement('div');
var card5 = document.createElement('div');
card1.classList.add("holdCards")
card2.classList.add("holdCards")
card3.classList.add("holdCards")
card4.classList.add("holdCards")
card5.classList.add("holdCards")

var holdCard1 = document.querySelector(".holdCards1");
var holdCard2 = document.querySelector(".holdCards2");
var holdCard3 = document.querySelector(".holdCards3");
var holdCard4 = document.querySelector(".holdCards4");
var holdCard5 = document.querySelector(".holdCards5");

// button to redraw cards
var redrawButton = document.createElement('button');
redrawButton.innerText = "Redraw";
redrawButton.classList.add("buttons");

// button to tabulate score
var roundScoreButton = document.createElement('button');
roundScoreButton.innerText = "Done";
roundScoreButton.classList.add("buttons");

// button to reset game
var resetButton = document.createElement('button');
resetButton.innerText = "Next round!";
resetButton.classList.add("buttons");

// tabulate credits, start at 100
let credits = 100;
// display credits
var creditText = document.createElement('h5');
var scoreText = document.createElement('h5');

// var showCredits = document.querySelector(".textCredit");
// var scoreObtained = document.querySelector(".textScore");

var showCredits = document.querySelector(".scoreboard1");
var scoreObtained = document.querySelector(".scoreboard2");

// var flex2_credits = document.querySelector(".showCredits");

// calculate score based on current hand
let score = 0;

// credits += score;

// to tally name, rank, suit
let cardNameTally = {};
let cardRankTally = {};
let cardSuitTally = {};

// (flexNo, divNo)
var flex2_div1 = document.querySelector(".displayCards");
var flex2_div2 = document.querySelector(".displayButtons");
// var flex2_div2_displayCards = document.querySelector(".displayCards")

// verify pairs
let isPair = false;
// verify triplets
let isTriplet = false;

// counting pairs (2 for full house)
let numPair = 0;
// counting triplets
let numTriplet = 0;

// store card ranks for straights
let counter = 0;
let tempHand = [];

// validate straights
let isStraight = false;

// validate flush
let isFlush = false;

// array to store clicked cards
let clickedCards = {};

// enable/disable clicking
let canClick = true;

// display message
let message = document.createElement('h3');
message.innerText = '';
var displayMessage = document.querySelector('.displayMessage');
