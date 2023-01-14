import { IWinner } from "../interfaces/winner";

export type winnerCars = {
  winners: Promise<IWinner[]>;
  count: string | null;
};
