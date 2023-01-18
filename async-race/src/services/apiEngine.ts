import { _apiBase } from "./apiBase";
import { ICarParams } from "../interfaces/carParams";
import { IDrive } from "../interfaces/drive";

const _apiEngine = `${_apiBase}/engine`;

export const startEngine = async (id: number): Promise<ICarParams> => {
  const responce: Response = await fetch(
    `${_apiEngine}?id=${id}&status=started`,
    {
      method: "PATCH",
    }
  );

  const params: Promise<ICarParams> = await responce.json();
  return params;
};

export const stopEngine = async (id: number): Promise<ICarParams> => {
  const responce: Response = await fetch(
    `${_apiEngine}?id=${id}&status=stopped`
  );

  const params: Promise<ICarParams> = await responce.json();
  return params;
};

const drive = async (id: number): Promise<IDrive> => {
  const responce: Response = await fetch(`${_apiEngine}?id=${id}&status=drive`);

  if (responce.status !== 200) {
    return { success: false };
  } else {
    const res: Promise<IDrive> = await responce.json();
    return { ...res };
  }
};
