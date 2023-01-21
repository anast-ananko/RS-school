import { useState, useEffect, FunctionComponent } from "react";

import ImageCar from "../ImageCar";
import { IWinner } from "../../interfaces/winner";
import { ITableWinner } from "../../interfaces/tableWinner";
import { getCar } from "../../services/apiGarage";
import { getWinners } from "../../services/apiWinners";

import "./winners.scss";

const Winners: FunctionComponent = () => {
  const pageWinners = localStorage.getItem("pageWinners");
  const pageNumber: number = pageWinners ? JSON.parse(pageWinners) : 1;

  const [countWinners, setCountWinners] = useState<number>(0);
  const [page, setPage] = useState<number>(pageNumber);
  const [winnersList, setWinnersList] = useState<IWinner[]>([]);
  const [carsList, setCarsList] = useState<ITableWinner[]>([]);
  const [sort, setSort] = useState<string>("id");
  const [order, setOrder] = useState<string>("ASC");

  const arrayWinners: ITableWinner[] = [];

  const MAX_PAGE = Math.ceil(countWinners / 10);
  const MIN_PAGE = 1;
  const LIMIT_FOR_PAGE = 10;

  useEffect(() => {
    updateWinners(page, sort, order);
  }, [page, sort, order]);

  useEffect(() => {
    createCarsList();
  }, [winnersList]);

  useEffect(() => {
    localStorage.setItem("pageWinners", JSON.stringify(page));
  }, [page]);

  const updateWinners = async (
    page: number,
    sort: string,
    order: string
  ): Promise<void> => {
    const { winners, count } = await getWinners(page, sort, order);
    if (Array.isArray(winners) && typeof count === "string") {
      onCarsLoaded(winners, count);
    }
  };

  const onCarsLoaded = (winners: IWinner[], count: string): void => {
    setCountWinners(+count);
    setWinnersList(winners);
  };

  const createCarsList = async (): Promise<void> => {
    for (let i = 0; i < winnersList.length; i++) {
      const car = await getCar(winnersList[i].id);
      arrayWinners[i] = {
        i: i,
        name: car.name,
        color: car.color,
        wins: winnersList[i].wins,
        time: winnersList[i].time,
      };
    }
    setCarsList(arrayWinners);
  };

  const prevPage = (): void => {
    if (page > MIN_PAGE) {
      setPage(page - 1);
    }
  };

  const nextPage = (): void => {
    if (page < MAX_PAGE) setPage(page + 1);
  };

  const hadlerButtonWins = (): void => {
    console.log(order);
    setSort("wins");
    setOrder(order === "ASD" ? "DESC" : "ASD");
  };

  const hadlerButtonTimes = (): void => {
    setSort("time");
    setOrder(order === "ASD" ? "DESC" : "ASD");
  };

  return (
    <div className="winners">
      <h2 className="winners__title">Winners ({countWinners})</h2>
      <h4 className="winners__page">Page # {page}</h4>
      <table>
        <tbody>
          <tr>
            <th>Number</th>
            <th>Car</th>
            <th>Name</th>
            <th>
              <button
                className="button-wins"
                onClick={() => hadlerButtonWins()}
              >
                Wins
              </button>
            </th>
            <th>
              <button
                className="button-times"
                onClick={() => hadlerButtonTimes()}
              >
                Best time (seconds)
              </button>
            </th>
          </tr>
          {carsList.map((item) => {
            return (
              <tr key={item.i}>
                <th>{item.i + 1 + LIMIT_FOR_PAGE * (page - 1)}</th>
                <th>
                  <ImageCar color={item.color} width="65" height="35" />
                </th>
                <th>{item.name}</th>
                <th>{item.wins}</th>
                <th>{item.time}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="car__pagination">
        <button
          className="button__prev"
          onClick={() => prevPage()}
          disabled={page === MIN_PAGE ? true : false}
        >
          Prev
        </button>
        <button
          className="button__next"
          onClick={() => nextPage()}
          disabled={page === MAX_PAGE ? true : false}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Winners;
