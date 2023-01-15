import { useState, useEffect } from "react";

import Control from "./Control";
import GarageList from "./GarageList";
import { getCars } from "../../services/apiGarage";
import { ICar } from "../../interfaces/car";

import "./garage.scss";

const Garage = () => {
  const [countCars, setCountCars] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [garageList, setGarageList] = useState<ICar[]>([]);

  useEffect(() => {
    updateGarage(1);
  }, []);

  const updateGarage = async (page: number) => {
    const { cars, count } = await getCars(page);
    if (Array.isArray(cars) && typeof count === "string") {
      onCarsLoaded(cars, count);
    }
  };

  const onCarsLoaded = (cars: ICar[], count: string): void => {
    console.log(cars);
    setCountCars(+count);
    setGarageList(cars);
    //console.log(garageList);
  };

  return (
    <>
      <Control />
      <h2 className="garage__title">Garage ({countCars})</h2>
      <h4 className="garage__page">Page # {page}</h4>
      <GarageList garageList={garageList} />
      <div className="car__pagination">
        <button className="button__prev">Prev</button>
        <button className="button__next">Next</button>
      </div>
    </>
  );
};

export default Garage;
