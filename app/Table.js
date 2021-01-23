export class Table {
  constructor(dealersCards, playerCards) {
    this.dealersCards = dealersCards;
    this.playerCards = playerCards;
  }

  showPlayerCard(card) {
    this.playerCards.appendChild(card);
  }

  showDealersCard(card) {
    this.dealersCards.appendChild(card);
  }
}
