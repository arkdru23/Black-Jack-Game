import { Deck } from "./Deck.js";
import { Player } from "./Player.js";
import { Table } from "./Table.js";

class Game {
  constructor({ player, table }) {
    this.player = player;
    this.dealer = new Player("Krupier");
    this.table = table;
    this.deck = new Deck();
    this.deck.shuffle();
  }

  run() {
    this.dealCards();
  }

  dealCards() {
    for (let n = 0; n < 2; n++) {
      let card1 = this.deck.pickOne();
      let card2 = this.deck.pickOne();
      this.player.hand.addCard(card1);
      this.table.showPlayerCard(card1.render());

      this.dealer.hand.addCard(card2);
      this.table.showDealersCard(card2.render());
    }
  }
}

const table = new Table(
  document.getElementById("dealersCards"),
  document.getElementById("playersCards")
);
const player = new Player("Arkadiusz");

const game = new Game({
  player,
  table,
});
game.run();
