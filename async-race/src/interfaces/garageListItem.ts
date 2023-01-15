export interface IGarageListItem {
  name: string;
  color: string;
  id: number;
  delCar: (id: number) => void;
  countCars: number;
  setCountCars: (id: number) => void;
  selectCar: (id: number) => void;
}
