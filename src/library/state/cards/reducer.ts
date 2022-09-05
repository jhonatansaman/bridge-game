import { generateCards } from "@library/helpers/cards";
import { createSlice } from "@reduxjs/toolkit";
import { CardInitialState } from "./types";

const initialState: CardInitialState = {
  cards: generateCards(),
  isShownCards: false,
};

const cards = createSlice({
  name: "cards",
  initialState,
  reducers: {
    shuffle: (state) => {
      state.cards = generateCards();
    },
    setIsShownCards: (state) => {
      state.isShownCards = !state.isShownCards;
    },
  },
});

export const { shuffle, setIsShownCards } = cards.actions;

export default cards.reducer;
