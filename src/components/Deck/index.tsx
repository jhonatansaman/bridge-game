import { IDeck } from "./types";
import * as S from "./styles";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("../Card"), {
  ssr: false,
});

const Deck = ({ data, position, isShownCards }: IDeck) => {
  return (
    <S.Container direction={position}>
      {data?.map((item, index) => (
        <Card
          key={item.key}
          data={item}
          position={position}
          index={index}
          isShownCards={isShownCards}
        />
      ))}
    </S.Container>
  );
};

export default Deck;
