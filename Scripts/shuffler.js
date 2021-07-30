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
function allClear() {
    document.getElementById("value").innerHTML = "";
    document.getElementById("text").innerHTML = "";
}
function shuffleDeck() {
    currentCard = 0;
    deck = deck.shuffler();
    allClear();
    topCard();//should be a next card button.
}
function topCard() {
    let nextOne = deck[currentCard];
    if ((deck.length - currentCard) > 0) {
        showCard(nextOne);
        currentCard++;
    } else {
        allClear();
        document.getElementById("value").innerHTML = "Shuffle";
    }
}
function showCard(card) {
    let valueHolder = document.createElement("div");
    valueHolder.setAttribute("id", "value_holder");
    valueHolder.setAttribute("style", "cursor: pointer");
    valueHolder.setAttribute("onclick", "topCard()");
    valueHolder.appendChild(document.createTextNode(card.value));
    allClear();
    document.getElementById("value").append(valueHolder);
    document.getElementById("text").innerHTML = card.text;
}