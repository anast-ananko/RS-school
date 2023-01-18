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

  useEffect(() => {
    updateWinners(page, sort, order);
  }, []);

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

  //   let tmpArray: ITableWinner[] = [];

  //   function itemCheck(item: ITableWinner) {
  //     if (Array.isArray(tmpArray)) {
  //       if (tmpArray.indexOf(item.i) === -1) {
  //         tmpArray.push(item.i);
  //         return true;
  //     }
  //     return false;
  //     }

  // }

  const onCarsLoaded = (winners: IWinner[], count: string): void => {
    setCountWinners(+count);
    setWinnersList(winners);
    //console.log(winners)
    //setCarsList(createCarsList(winners)));
    // if (Array.isArray(winners)) {
    //   setCarsList(createCarsList(winners));
    // }
    console.log(createCarsList(winners));
    console.log(att);
  };
  const att: ITableWinner[] = [];

  const createCarsList = (winners: IWinner[]) => {
    winners.forEach((item, i) => {
      getCurrentCar(item.id).then((car) => {
        att.push({
          ...item,
          i: i,
          name: car.name,
          color: car.color,
        });
      });
    });
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

  // const createCarsList = (winners: IWinner[]) => {
  //   const t = winners.map((item, i) => {
  //     getCurrentCar(item.id).then((car) => {
  //       // console.log(i, car.name, car.color, item.wins, item.time,)
  //       return {
  //         i: i,
  //         name: car.name,
  //         color: car.color,
  //         wins: item.wins,
  //         time: item.time,
  //       } ;
  //     });
  //   });
  //   console.log(t)
  // };

  const getCurrentCar = async (id: number): Promise<ICar> => {
    const car = await getCar(id);
    return car;
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
            <th>Wins</th>
            <th>Best time (seconds)</th>
          </tr>
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
