import { SuitValues } from "@library/state/cards/types";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled(motion.div)`
  width: 70px;
  height: 95px;
  transform: rotateY("180");
  padding: 5px;
  border: 1px solid grey;
  border-radius: 10px;
  display: flex;
  z-index: 1;
`;

export const Content = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Number = styled.span<{ textColor: SuitValues }>`
  ${({ textColor }) => css`
    font-size: 20px;
    margin-left: 3px;
    color: ${textColor === "Hearts" || textColor === "Diamonds"
      ? "red"
      : "black"};
  `}
`;

export const IconImage = styled.div`
  position: absolute;
  bottom: 0;
  right: 0px;
  background: transparent;
`;
