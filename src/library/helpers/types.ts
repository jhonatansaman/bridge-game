import { Card } from "@library/state/cards/types";

export type GenerateScore = {
  cardsNorth: Card[];
  cardsSouth: Card[];
  cardsWest: Card[];
  cardsEast: Card[];
};
