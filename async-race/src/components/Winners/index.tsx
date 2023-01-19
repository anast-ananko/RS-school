import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { IWinner } from "../../interfaces/winner";
import { ITableWinner } from "../../interfaces/tableWinner";
import { ICar } from "../../interfaces/car";
import { getCar } from "../../services/apiGarage";
import { getWinners } from "../../services/apiWinners";

import "./winners.scss";

const Winners = () => {
  const [countWinners, setCountWinners] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [winnersList, setWinnersList] = useState<IWinner[]>([]);
  const [carsList, setCarsList] = useState<ITableWinner[]>([]);
  const [sort, setSort] = useState<string>("id");
  const [order, setOrder] = useState<string>("ASC");

  const arrayWinners: ITableWinner[] = [];

  useEffect(() => {
    updateWinners(page, sort, order);
  }, []);

  useEffect(() => {
    createCarsList();
  }, [winnersList]);

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

  const createCarsList = async () => {
    console.log(winnersList.length);
    for (let i = 0; i < winnersList.length; i++) {
      const car = await getCar(winnersList[i].id);
      console.log(car);
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

  // const createCarsList = (winners: IWinner[]) => {
  //   return winners.map((item, i) => {
  //     return getCurrentCar(item.id).then((car) => {
  //       return {
  //         ...item,
  //         i: i,
  //         name: car.name,
  //         color: car.color,
  //       };
  //     });
  //   });
  // };

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
            <th>Wins</th>
            <th>Best time (seconds)</th>
          </tr>
          {carsList.map((item) => {
            return (
              <tr key={item.i}>
                <th>{item.i + 1}</th>
                <th>{item.color}</th>
                <th>{item.name}</th>
                <th>{item.wins}</th>
                <th>{item.time}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="car__pagination">
        <button className="button__prev">Prev</button>
        <button className="button__next">Next</button>
      </div>
    </div>
  );
};

export default Winners;
