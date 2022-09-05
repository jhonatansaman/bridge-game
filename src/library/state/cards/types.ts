export type CardValues =
  | "A"
  | "K"
  | "Q"
  | "J"
  | "10"
  | "9"
  | "8"
  | "7"
  | "6"
  | "5"
  | "4"
  | "3"
  | "2";

export type SuitValues = "Spades" | "Hearts" | "Diamonds" | "Clubs";

export enum CardOptions {
  A,
  K,
  Q,
  J,
  TEN,
  NINE,
  EIGHT,
  SEVEN,
  SIX,
  FIVE,
  FOUR,
  THREE,
  TWO,
}

export enum CardSuits {
  SPADES,
  HEARTS,
  DIAMONDS,
  CLUBS,
}

export interface Card {
  suit: SuitValues;
  card: CardValues;
  key: number;
}

export type CardInitialState = {
  cards: Card[];
  isShownCards: boolean;
};
