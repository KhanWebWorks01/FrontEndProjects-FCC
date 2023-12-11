let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player ={
    name : "Faiz",
    chips : 145
};

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.querySelector('#player-el');
playerEl.textContent = player.name + ": $" + player.chips;
function getRandomCard() {
    // if 1         -> return 11
    // if 11 - 13 ->   return 10
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber > 10){
        return 10;
    }
    else if(randomNumber === 1)
    {
        return 11;
    }
    else {
        return randomNumber;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame(){
    sumEl.textContent = "Sum: "+ sum;

    for(let i=0; i<cards.length; i++)
    {
        cardsEl.textContent +=cards[i] + " ";
        console.log(cardsEl);
    }

    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    if(sum <= 20)
    {
        message = "Do you want to draw a new card?";
    }
    else if(sum === 21)
    {
        hasBlackJack = true;
        message = "Wohoo! You've got Blackjack!";
    }
    else 
    {
        isAlive = false;
        message = "You're out of the game!";
    }
    // 2. Display the message in the messageEl using message 
    messageEl.textContent = message;
}

function newCard() {
    // Only allow the player to get a new card if she IS alive and does not have Blackjack
    if(isAlive && !hasBlackJack){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}