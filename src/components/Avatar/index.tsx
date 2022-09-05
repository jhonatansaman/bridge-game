import { CurrentPlayer } from "@library/state/game/types";
import Image from "next/image";
import * as S from "./styles";
import { IAvatar } from "./types";

const NAME: Record<CurrentPlayer, string> = {
  [CurrentPlayer.NORTH]: "NORTH",
  [CurrentPlayer.SOUTH]: "SOUTH",
  [CurrentPlayer.EAST]: "EAST",
  [CurrentPlayer.WEST]: "WEST",
};

const Avatar = ({ image, playerPosition }: IAvatar) => {
  return (
    <S.Container>
      <S.Content position={playerPosition}>
        <Image src={image} width={60} height={60} alt="Avatar" />
      </S.Content>
      <S.NameBox position={playerPosition}>{NAME[playerPosition]}</S.NameBox>
    </S.Container>
  );
};

export default Avatar;
