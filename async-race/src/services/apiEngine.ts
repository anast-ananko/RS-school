import { ICarParams } from "../interfaces/carParams";
import { IDrive } from "../interfaces/drive";
import { _apiBase } from "./apiBase";

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
    `${_apiEngine}?id=${id}&status=stopped`,
    {
      method: "PATCH",
    }
  );
  const params: Promise<ICarParams> = await responce.json();

  return params;
};

export const drive = async (id: number): Promise<IDrive> => {
  const responce: Response = await fetch(
    `${_apiEngine}?id=${id}&status=drive`,
    {
      method: "PATCH",
    }
  );
  if (responce.status !== 200) {
    return { success: false };
  } else {
    const res: Promise<IDrive> = await responce.json();
    return { ...res };
  }
};
