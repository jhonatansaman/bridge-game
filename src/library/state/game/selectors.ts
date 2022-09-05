import { RootState } from "@library/redux/store";
import { createSelector } from "@reduxjs/toolkit";
import { CurrentPlayer } from "./types";

export const gameScoreSelector = (state: RootState) => state.game.score;

export const gameCurrentPlayerSelector = (state: RootState) =>
  state.game.currentPlayer;

export const gameShowCurrentPlayer = createSelector(
  gameCurrentPlayerSelector,
  (currentPlayer) => {
    const isNorthPlayer = currentPlayer === CurrentPlayer.NORTH;
    const isSouthPlayer = currentPlayer === CurrentPlayer.SOUTH;
    const isWestPlayer = currentPlayer === CurrentPlayer.WEST;
    const isEastPlayer = currentPlayer === CurrentPlayer.EAST;

    return {
      isNorthPlayer,
      isSouthPlayer,
      isWestPlayer,
      isEastPlayer,
    };
  }
);
