import { CurrentPlayer } from "@library/state/game/types";
import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: #37794a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div<{ position: CurrentPlayer }>`
  ${({ position }) => css`
    margin: 20px;
    border: 5px solid
      ${position === CurrentPlayer.NORTH || position === CurrentPlayer.SOUTH
        ? "#769bf8"
        : "#D94C47"};
    border-radius: 80px;
    padding: 10px;
    background-color: #fff;
    z-index: 1;
    order: 3;
  `}
`;

export const NameBox = styled.div<{ position: CurrentPlayer }>`
  ${({ position }) => css`
    background-color: black;
    opacity: 0.2;
    width: 120px;
    height: 50px;
    margin-right: ${position === CurrentPlayer.EAST ? "-30px" : 0};
    margin-left: ${position === CurrentPlayer.EAST ? 0 : "-30px"};
    margin-top: ${position === CurrentPlayer.EAST ? 0 : "20px"};
    display: flex;
    justify-content: center;
    align-items: center;
    order: ${position === CurrentPlayer.EAST ? 2 : 4};
    font-weight: bold;
  `}
`;
