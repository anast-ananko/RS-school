export interface IControl {
  countCars: number;
  setCountCars: (num: number) => void;
  selectedCar: number | undefined;
  isUpdate: boolean;
  setIsUpdate: (n: boolean) => void;
}
