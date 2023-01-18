import { _apiBase } from "./apiBase";
import { ICar } from "../interfaces/car";
import { IWinner } from "../interfaces/winner";
import { winnerCars } from "../types/winnerCars";

const _apiWinners = `${_apiBase}/winners`;

const getSortOrder = (sort: string, order: string): string => {
  if (sort && order) {
    return `&_sort=${sort}&_order=${order}`;
  } else {
    return "";
  }
};

export async function getWinners(
  page: number,
  sort: string,
  order: string,
  limit = 10
): Promise<winnerCars> {
  const responce: Response = await fetch(
    `${_apiWinners}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`
  );
  const winners: Promise<IWinner[]> = await responce.json();
  const count: string | null = responce.headers.get("X-Total-Count");

  return { winners, count };
}

export async function getWinner(id: number): Promise<IWinner> {
  const responce: Response = await fetch(`${_apiWinners}/${id}`);
  const car: Promise<IWinner> = await responce.json();

  return car;
}

export async function createWinner(body: IWinner): Promise<IWinner> {
  const responce: Response = await fetch(_apiWinners, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const winner: Promise<IWinner> = await responce.json();

  return winner;
}

export async function deleteWinner(id: number): Promise<IWinner> {
  const responce: Response = await fetch(`${_apiWinners}/${id}`, {
    method: "DELETE",
  });
  const winner: Promise<IWinner> = await responce.json();

  return winner;
}

export async function updateWinner(
  id: number,
  body: IWinner
): Promise<IWinner> {
  const responce: Response = await fetch(`${_apiWinners}/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const winner: Promise<IWinner> = await responce.json();

  return winner;
}

const getWinnerStatus = async (id: number): Promise<number> => {
  const responce: Response = await fetch(`${_apiWinners}/${id}`);

  return responce.status;
};

export const saveWinner = async ({
  id,
  time,
}: {
  id: number;
  time: number;
}) => {
  const winnerStatus = await getWinnerStatus(id);

  if (winnerStatus === 404) {
    await createWinner({
      id,
      wins: 1,
      time,
    });
  } else {
    const winner = await getWinner(id);
    await updateWinner(id, {
      id,
      wins: winner.wins + 1,
      time: time > winner.time ? winner.time : time,
    });
  }
};
