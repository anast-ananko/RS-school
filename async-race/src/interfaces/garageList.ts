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
  arrWinners: IWinnerRace[];
  setInn: (n: number) => void;
  setIsWinner:(n: boolean) => void;
}
