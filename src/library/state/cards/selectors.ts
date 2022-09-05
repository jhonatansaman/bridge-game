import { chunkArray } from "@library/helpers/chunkArray";
import { RootState } from "@library/redux/store";
import { createSelector } from "@reduxjs/toolkit";

export const cardSelector = (state: RootState) => state.cards.cards;

export const cardsVisibilitySelector = (state: RootState) =>
  state.cards.isShownCards;

export const cardsPlayerSelector = createSelector(cardSelector, (cards) => {
  const [cardsNorth, cardsSouth, cardsWest, cardsEast] = chunkArray(cards, 13);

  return { cardsNorth, cardsSouth, cardsWest, cardsEast };
});
