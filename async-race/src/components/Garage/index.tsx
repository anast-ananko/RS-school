import { useState, useEffect, FunctionComponent } from "react";

import Control from "./Control";
import GarageList from "./GarageList";
import { getCars } from "../../services/apiGarage";
import { ICar } from "../../interfaces/car";
import { deleteCar } from "../../services/apiGarage";

import "./garage.scss";

const Garage: FunctionComponent = () => {
  const [countCars, setCountCars] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [garageList, setGarageList] = useState<ICar[]>([]);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [selectedCar, setSelectedCar] = useState<number>();

  const MAX_PAGE = Math.ceil(countCars / 7);
  const MIN_PAGE = 1;

  useEffect(() => {
    updateGarage(page);
  }, [countCars, isUpdate, page]);

  const updateGarage = async (page: number): Promise<void> => {
    const { cars, count } = await getCars(page);
    if (Array.isArray(cars) && typeof count === "string") {
      onCarsLoaded(cars, count);
    }
  };

  const onCarsLoaded = (cars: ICar[], count: string): void => {
    setCountCars(+count);
    setGarageList(cars);
  };

  const delCar = async (id: number): Promise<void> => {
    await deleteCar(id);
  };

  const selectCar = (id: number): void => {
    setSelectedCar(id);
  };

  const prevPage = (): void => {
    if (page > MIN_PAGE) {
      setPage(page - 1);
    }
  };

  const nextPage = (): void => {
    if (page < MAX_PAGE) setPage(page + 1);
  };

  return (
    <>
      <Control
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
        countCars={countCars}
        setCountCars={setCountCars}
        selectedCar={selectedCar}
      />
      <h2 className="garage__title">Garage ({countCars})</h2>
      <h4 className="garage__page">Page # {page}</h4>
      <GarageList
        garageList={garageList}
        delCar={delCar}
        countCars={countCars}
        setCountCars={setCountCars}
        setSelectedCar={setSelectedCar}
      />
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
    </>
  );
};

export default Garage;
