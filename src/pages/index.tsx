import { generateScore } from "@library/helpers/cards";
import { useAppDispatch } from "@library/hooks/useAppDispatch";
import { useAppSelector } from "@library/hooks/useAppSelector";
import { setIsShownCards, shuffle } from "@library/state/cards/reducer";
import { cardsPlayerSelector } from "@library/state/cards/selectors";
import { setCurrentPlayer, setScores } from "@library/state/game/reducer";
import {
  gameCurrentPlayerSelector,
  gameShowCurrentPlayer,
} from "@library/state/game/selectors";
import type { NextPage } from "next";
import { useEffect } from "react";
import Arrow from "src/components/Arrow";
import Avatar from "src/components/Avatar";
import Button from "src/components/Button";
import { Positions } from "src/components/Card/types";
import Deck from "src/components/Deck";
import * as S from "../../styles/styles";
import NorthImage from "@assets/images/north.png";
import SouthImage from "@assets/images/south.png";
import WestImage from "@assets/images/west.png";
import EastImage from "@assets/images/east.png";
import { CurrentPlayer } from "@library/state/game/types";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const { cardsNorth, cardsSouth, cardsWest, cardsEast } =
    useAppSelector(cardsPlayerSelector);
  const currentPlayer = useAppSelector(gameCurrentPlayerSelector);
  const { isEastPlayer, isNorthPlayer, isSouthPlayer, isWestPlayer } =
    useAppSelector(gameShowCurrentPlayer);

  const changeValueFromState = () => {
    dispatch(shuffle());
    dispatch(setIsShownCards());
  };

  useEffect(() => {
    dispatch(
      setScores(generateScore({ cardsNorth, cardsSouth, cardsWest, cardsEast }))
    );
  }, [cardsNorth, cardsSouth, cardsWest, cardsEast, dispatch]);

  return (
    <S.Container>
      <S.North>
        <Deck
          data={cardsNorth}
          position={Positions.HORIZONTAL}
          isShownCards={isNorthPlayer}
        />
        <Avatar image={NorthImage} playerPosition={CurrentPlayer.NORTH} />
        <Arrow player={currentPlayer} isShownArrow={isNorthPlayer} />
      </S.North>
      <S.East>
        <Arrow player={currentPlayer} isShownArrow={isEastPlayer} />
        <Avatar image={EastImage} playerPosition={CurrentPlayer.EAST} />
        <Deck
          data={cardsEast}
          position={Positions.VERTICAL}
          isShownCards={isEastPlayer}
        />
      </S.East>
      <S.Map>
        <Button title="SHUFFLE CARDS" onClick={changeValueFromState} />
        <Button
          title="CHANGE PLAYER"
          onClick={() => dispatch(setCurrentPlayer())}
        />
      </S.Map>
      <S.South>
        <Arrow player={currentPlayer} isShownArrow={isSouthPlayer} />
        <Avatar image={SouthImage} playerPosition={CurrentPlayer.SOUTH} />
        <Deck
          data={cardsSouth}
          position={Positions.HORIZONTAL}
          isShownCards={isSouthPlayer}
        />
      </S.South>
      <S.West>
        <Deck
          data={cardsWest}
          position={Positions.VERTICAL}
          isShownCards={isWestPlayer}
        />
        <Avatar image={WestImage} playerPosition={CurrentPlayer.WEST} />
        <Arrow player={currentPlayer} isShownArrow={isWestPlayer} />
      </S.West>
    </S.Container>
  );
};

export default Home;
