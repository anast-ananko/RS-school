import { ICar } from "./car";
import { IWinnerRace } from "./winnerRace";

export interface IGarageList {
  garageList: ICar[];
  delCar: (id: number) => void;
  countCars: number;
  setCountCars: (id: number) => void;
  setSelectedCar: (id: number) => void;
  isRace: boolean;
  isReset: boolean;
  setWinnerInRace: (n: IWinnerRace) => void;
  isWinner: boolean;
  setIsWinner: (n: boolean) => void;
}
