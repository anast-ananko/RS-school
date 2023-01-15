import { ICar } from "./car";

export interface IGarageList {
  garageList: ICar[];
  delCar: (id: number) => void;
  countCars: number;
  setCountCars: (id: number) => void;
  setSelectedCar: (id: number) => void;
}
