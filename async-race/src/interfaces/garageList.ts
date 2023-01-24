import { ICar } from "./car";
import { IWinnerRace } from "./winnerRace";
import { ISelectedCar } from "./selectedCar";

export interface IGarageList {
  garageList: ICar[];
  delCar: (id: number) => void;
  countCars: number;
  setCountCars: (id: number) => void;
  setSelectedCar: (id: ISelectedCar) => void;
  isRace: boolean;
  isReset: boolean;
  setWinnerInRace: (n: IWinnerRace) => void;
  isWinner: boolean;
  setIsWinner: (n: boolean) => void;
}
