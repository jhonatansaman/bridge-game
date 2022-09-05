import { cardsPlayerSelector } from "@library/state/cards/selectors";
import {
  Card,
  CardOptions,
  CardSuits,
  CardValues,
  SuitValues,
} from "@library/state/cards/types";
import { PlayerScore } from "@library/state/game/types";
import { GenerateScore } from "./types";

const CARDS_VALUE: Record<CardOptions, CardValues> = {
  [CardOptions.A]: "A",
  [CardOptions.K]: "K",
  [CardOptions.Q]: "Q",
  [CardOptions.J]: "J",
  [CardOptions.TEN]: "10",
  [CardOptions.NINE]: "9",
  [CardOptions.EIGHT]: "8",
  [CardOptions.SEVEN]: "7",
  [CardOptions.SIX]: "6",
  [CardOptions.FIVE]: "5",
  [CardOptions.FOUR]: "4",
  [CardOptions.THREE]: "3",
  [CardOptions.TWO]: "2",
};

const CARDS_SUITS: Record<CardSuits, SuitValues> = {
  [CardSuits.SPADES]: "Spades",
  [CardSuits.HEARTS]: "Hearts",
  [CardSuits.DIAMONDS]: "Diamonds",
  [CardSuits.CLUBS]: "Clubs",
};

const CARDS_POINTS: Partial<Record<CardValues, number>> = {
  A: 4,
  K: 3,
  Q: 2,
  J: 1,
};

const generateCardsArray: number[] = Array.from(Array(52).keys());

const generateCardValue = (cardKey: number): CardValues => {
  const key: CardOptions = cardKey % 13;

  return CARDS_VALUE[key];
};

const generateCardSuit = (suitKey: number): SuitValues => {
  const key: CardSuits = Math.floor(suitKey / 13);

  return CARDS_SUITS[key];
};

const toShuffleCards = (cards: number[]): Card[] =>
  cards.map((item, key) => {
    return {
      suit: generateCardSuit(item),
      card: generateCardValue(item),
      key,
    };
  });

export const generateCards = (): Card[] => {
  const shuffleArray = generateCardsArray.sort(() => 0.5 - Math.random());
  return toShuffleCards(shuffleArray);
};

export const calculateScore = (cards: Card[]): number => {
  let score = 0;

  cards.forEach((item) => {
    score += CARDS_POINTS[item.card] ?? 0;
  });

  return score;
};

export const generateScore = ({
  cardsEast,
  cardsNorth,
  cardsSouth,
  cardsWest,
}: GenerateScore): PlayerScore => {
  const north = calculateScore(cardsNorth);
  const south = calculateScore(cardsSouth);
  const west = calculateScore(cardsWest);
  const east = calculateScore(cardsEast);

  return { north, south, west, east };
};
