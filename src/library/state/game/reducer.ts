import { createSlice } from "@reduxjs/toolkit";
import { CurrentPlayer, GameInitialState } from "./types";

const initialState: GameInitialState = {
  currentPlayer: CurrentPlayer.NORTH,
  score: {
    north: 0,
    south: 0,
    west: 0,
    east: 0,
  },
};

const game = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCurrentPlayer: (state) => {
      if (state.currentPlayer === CurrentPlayer.WEST) {
        state.currentPlayer = 0;
      } else {
        state.currentPlayer = state.currentPlayer + 1;
      }
    },
    setScores: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const { setScores, setCurrentPlayer } = game.actions;

export default game.reducer;
