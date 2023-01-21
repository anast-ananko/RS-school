import { IWinnerRace } from "./winnerRace";

export interface IModal {
  onClose: () => void;
  show: boolean;
  winner: IWinnerRace | undefined;
}
