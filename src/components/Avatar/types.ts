import { CurrentPlayer } from "@library/state/game/types";
import { StaticImageData } from "next/image";
import { Positions } from "../Card/types";

export interface IAvatar {
  image: StaticImageData;
  playerPosition: CurrentPlayer;
}
