import { useAppSelector } from "@library/hooks/useAppSelector";
import { cardsVisibilitySelector } from "@library/state/cards/selectors";
import { SuitValues } from "@library/state/cards/types";
import { MotionConfig } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import CardClose from "../../../public/card-close.png";
import ClubIcon from "../../../public/club.png";
import DiamondIcon from "../../../public/diamond.png";
import HeartIcon from "../../../public/heart.png";
import SpadeIcon from "../../../public/spade.png";
import * as S from "./styles";
import { ICard, Positions } from "./types";

const CARD_ICON: Record<SuitValues, StaticImageData> = {
  ["Spades"]: SpadeIcon,
  ["Hearts"]: HeartIcon,
  ["Diamonds"]: DiamondIcon,
  ["Clubs"]: ClubIcon,
};

const LAST_CARD = 12;

const OPEN_VARIANT = { rotateY: 180 };
const CLOSED_VARIANT = { rotateY: 0, background: "#fff" };

const Card = ({ data, position, index, isShownCards }: ICard) => {
  const isShownCard = useAppSelector(cardsVisibilitySelector) || isShownCards;

  return (
    <MotionConfig>
      <S.Container
        layoutId={data.key.toString()}
        initial={"closed"}
        animate={isShownCard ? "open" : "closed"}
        layout
        style={
          position === Positions.VERTICAL
            ? { marginTop: -50, rotate: 90 }
            : { marginLeft: -25, rotate: 360 }
        }
        variants={{
          open: OPEN_VARIANT,
          closed: CLOSED_VARIANT,
        }}
      >
        <S.Content
          variants={{
            open: { rotateY: 180 },
            closed: { rotateY: 0 },
          }}
        >
          {isShownCard ? (
            <>
              <S.Number textColor={data.suit}>{data.card}</S.Number>
              <div>
                <Image
                  src={CARD_ICON[data.suit]}
                  alt="spade"
                  width={20}
                  height={20}
                />
              </div>
              {index === LAST_CARD && (
                <S.IconImage>
                  <Image
                    src={CARD_ICON[data.suit]}
                    alt="spade"
                    width={40}
                    height={40}
                  />
                </S.IconImage>
              )}
            </>
          ) : (
            <div>
              <Image src={CardClose} width={60} height={85} alt="Card closed" />
            </div>
          )}
        </S.Content>
      </S.Container>
    </MotionConfig>
  );
};

export default Card;
