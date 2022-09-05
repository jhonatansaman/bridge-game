import * as S from "./styles";
import { IButton } from "./types";

const Button = ({ onClick, title }: IButton) => {
  return <S.Container onClick={onClick}>{title}</S.Container>;
};

export default Button;
