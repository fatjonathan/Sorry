var jonathan = [1, 2, 3, 4, 5, 6, 7, 8];
var deck = jonathan;
var card = 0;

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
function shuffleTheDeck() {
    deck = [];
    card = 0;
    deck = jonathan.shuffler();
}
function cardPicker() {
    let nextOne = deck[card];
    if ((deck.length - card) > 0) {
        document.getElementById("target").innerHTML = nextOne;
        card++;
    } else {
        document.getElementById("target").innerHTML = "Shuffle";
    }
}