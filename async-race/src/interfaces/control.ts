export interface IControl {
  countCars: number;
  setCountCars: (num: number) => void;
  selectedCar: number | undefined;
  setSelectedCar: (n: number) => void;
  isUpdate: boolean;
  setIsUpdate: (n: boolean) => void;
}
