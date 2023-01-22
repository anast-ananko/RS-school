export interface IControl {
  countCars: number;
  setCountCars: (n: number) => void;
  selectedCar: number;
  isUpdate: boolean;
  setIsUpdate: (n: boolean) => void;
  setIsRace: (n: boolean) => void;
  setIsReset: (n: boolean) => void;
  isRaceDisabled: boolean;
  isResetDisabled: boolean;
  setIsRaceDisabled: (n: boolean) => void;
  setIsResetDisabled: (n: boolean) => void;
  setIsWinner: (n: boolean) => void;
}
