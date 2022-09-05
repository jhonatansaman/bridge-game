export type PlayerScore = {
  north: number;
  south: number;
  west: number;
  east: number;
};

export enum CurrentPlayer {
  NORTH,
  EAST,
  SOUTH,
  WEST,
}

export type GameInitialState = {
  currentPlayer: CurrentPlayer;
  score: PlayerScore;
};
