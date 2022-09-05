import * as S from "./styles";
import ArrowImage from "@assets/images/arrow.png";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { IPlayerArrow } from "./types";
import { CurrentPlayer } from "@library/state/game/types";

const ROTATE: Record<CurrentPlayer, number> = {
  [CurrentPlayer.NORTH]: 180,
  [CurrentPlayer.SOUTH]: 0,
  [CurrentPlayer.WEST]: 90,
  [CurrentPlayer.EAST]: 270,
};

const toReturnInitialAnimation = (player: CurrentPlayer) => {
  if (player === CurrentPlayer.EAST || player === CurrentPlayer.WEST) {
    return { x: 0, rotate: ROTATE[player], margin: 15 };
  }

  return { y: 0, rotate: ROTATE[player] };
};

const toReturnEndAnimation = (player: CurrentPlayer) => {
  if (player === CurrentPlayer.EAST || player === CurrentPlayer.WEST) {
    return { x: 10, margin: 15 };
  }

  return { y: 10 };
};

const PlayerArrow = ({ player, isShownArrow }: IPlayerArrow) => {
  if (!isShownArrow) {
    return null;
  }

  return (
    <S.Container>
      <AnimatePresence>
        <S.Container
          initial={toReturnInitialAnimation(player)}
          animate={toReturnEndAnimation(player)}
          transition={{
            default: {
              duration: 1,
              repeat: Infinity,
            },
          }}
        >
          <Image src={ArrowImage} alt="Arrow" width={50} height={50} />
        </S.Container>
      </AnimatePresence>
    </S.Container>
  );
};

export default PlayerArrow;
