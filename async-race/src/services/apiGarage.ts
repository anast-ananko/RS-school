import { _apiBase } from "./apiBase";
import { ICar } from "../interfaces/car";
import { garageCars } from "../types/garageCars";

const _apiGarage = `${_apiBase}/garage`;

export async function getCars(page: number, limit = 7): Promise<garageCars> {
  const responce: Response = await fetch(
    `${_apiGarage}?_page=${page}&_limit=${limit}`
  );

  const cars: Promise<ICar[]> = await responce.json();
  const count: string | null = responce.headers.get("X-Total-Count");

  return { cars, count };
}

export async function getCar(id: number): Promise<ICar> {
  const responce: Response = await fetch(`${_apiGarage}/${id}`);
  const car: Promise<ICar> = await responce.json();

  return car;
}

export async function createCar(
  body: Pick<ICar, "name" | "color">
): Promise<ICar> {
  const responce: Response = await fetch(_apiGarage, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const car: Promise<ICar> = await responce.json();

  return car;
}

export async function deleteCar(id: number): Promise<ICar> {
  const responce: Response = await fetch(`${_apiGarage}/${id}`, {
    method: "DELETE",
  });
  const car: Promise<ICar> = await responce.json();

  return car;
}

export async function updateCar(
  id: number,
  body: Pick<ICar, "name" | "color">
): Promise<ICar> {
  const responce: Response = await fetch(`${_apiGarage}/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const car: Promise<ICar> = await responce.json();

  return car;
}
