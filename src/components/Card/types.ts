import { Card } from "@library/state/cards/types";

export enum Positions {
  HORIZONTAL,
  VERTICAL,
}

export interface ICard {
  data: Card;
  position: Positions;
  index: number;
  isShownCards: boolean;
}
