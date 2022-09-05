import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { Positions } from "../Card/types";

export const Container = styled(motion.div)<{ direction: Positions }>`
  ${({ direction }) => css`
    display: flex;
    flex-direction: ${direction === Positions.HORIZONTAL ? "row" : "column"};
  `}
`;
