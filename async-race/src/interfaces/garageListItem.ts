import { IWinnerRace } from "./winnerRace";
import { ISelectedCar } from "./selectedCar";

export interface IGarageListItem {
  name: string;
  color: string;
  id: number;
  delCar: (id: number) => void;
  countCars: number;
  setCountCars: (id: number) => void;
  setSelectedCar: (id: ISelectedCar) => void;
  index: number;
  isRace: boolean;
  isReset: boolean;
  setWinnerInRace: (n: IWinnerRace) => void;
  isWinner: boolean
  setIsWinner: (n: boolean) => void;
}
