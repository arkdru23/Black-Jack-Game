import { Deck } from "./Deck.js";
import { Player } from "./Player.js";
import { Table } from "./Table.js";

class Game {
  constructor({
    player,
    playerPoints,
    dealerPoints,
    table,
    hitButton,
    standButton,
  }) {
    this.hitButton = hitButton;
    this.standButton = standButton;
    this.playerPoints = playerPoints;
    this.dealerPoints = dealerPoints;
    this.player = player;
    this.dealer = new Player("Krupier");
    this.table = table;
    this.deck = new Deck();
    this.deck.shuffle();
  }

  run() {
    this.hitButton.addEventListener("click", (e) => this.hitCard());
    this.standButton.addEventListener("click", (e) => this.dealerPlays());
    this.dealCards();
  }

  hitCard() {
    const card = this.deck.pickOne();
    this.player.hand.addCard(card);
    this.table.showPlayerCard(card);
    this.playerPoints.innerHTML = this.player.calculatePoints();
    this.dealerPoints.innerHTML = this.dealer.calculatePoints();
  }

  dealCards() {
    for (let n = 0; n < 2; n++) {
      let card1 = this.deck.pickOne();
      this.player.hand.addCard(card1);
      this.table.showPlayerCard(card1);

      let card2 = this.deck.pickOne();
      this.dealer.hand.addCard(card2);
      this.table.showDealersCard(card2);
    }

    this.playerPoints.innerHTML = this.player.calculatePoints();
    this.dealerPoints.innerHTML = this.dealer.calculatePoints();
  }

  dealerPlays() {
    while (
      this.dealer.points <= this.player.points &&
      this.dealer.points <= 21 &&
      this.player.points <= 21
    ) {
      const card = this.deck.pickOne();
      this.dealer.hand.addCard(card);
      this.table.showDealersCard(card);
      this.dealerPoints.innerHTML = this.dealer.calculatePoints();
    }
  }
}

const table = new Table(
  document.getElementById("dealersCards"),
  document.getElementById("playersCards")
);
const player = new Player("Arkadiusz");

const game = new Game({
  hitButton: document.getElementById("hit"),
  standButton: document.getElementById("stand"),
  dealerPoints: document.getElementById("dealerPoints"),
  playerPoints: document.getElementById("playerPoints"),
  player,
  table,
});
game.run();
