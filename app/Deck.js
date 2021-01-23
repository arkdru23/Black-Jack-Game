import { Card, TYPES, WEIGHTS } from "./Card.js";

export class Deck {
  cards = [];

  constructor() {
    TYPES.forEach((type) =>
      WEIGHTS.forEach((weight) => {
        this.cards.push(new Card(weight, type));
      })
    );
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }

    return this.cards;
  }
}
