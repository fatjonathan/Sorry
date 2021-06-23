var currentCard = 0;

Array.prototype.shuffler = function() {
    let i, j, mixed;
    for(i=0; i < this.length; i++) {
        j = Math.floor(Math.random() * (i + 1));
        mixed = this[j];
        this[j] = this[i];
        this[i] = mixed;
    }
    return this;
}
function shuffleDeck() {
    currentCard = 0;
    deck = deck.shuffler();
    document.getElementById("target").innerHTML = "";
}
function topCard() {
    let nextOne = deck[currentCard];
    if ((deck.length - currentCard) > 0) {
        document.getElementById("target").innerHTML = nextOne.card;
        currentCard++;
    } else {
        document.getElementById("target").innerHTML = "Shuffle";
    }
}