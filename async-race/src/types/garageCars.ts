import { ICar } from "../interfaces/car";

export type garageCars = {
  cars: Promise<ICar[]>;
  count: string | null;
};
