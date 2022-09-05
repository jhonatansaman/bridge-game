import { Card } from "@library/state/cards/types";
import { CurrentPlayer } from "@library/state/game/types";
import { Positions } from "../Card/types";

export interface IDeck {
  data: Card[];
  position: Positions;
  isShownCards: boolean;
}
