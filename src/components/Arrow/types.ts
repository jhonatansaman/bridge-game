import { CurrentPlayer } from "@library/state/game/types";

export interface IPlayerArrow {
  player: CurrentPlayer;
  isShownArrow: boolean;
}
