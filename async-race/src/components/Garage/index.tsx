import { useState, useEffect, FunctionComponent } from "react";

import Modal from "../Modal";
import { IWinnerRace } from "../../interfaces/winnerRace";
import Control from "./Control";
import GarageList from "./GarageList";
import { getCars } from "../../services/apiGarage";
import { ICar } from "../../interfaces/car";
import { deleteCar } from "../../services/apiGarage";
import { saveWinner } from "../../services/apiWinners";
import { deleteWinner } from "../../services/apiWinners";

import "./garage.scss";

const Garage: FunctionComponent = () => {
  const pageGarage = localStorage.getItem("pageGarage");
  const pageNumber: number = pageGarage ? JSON.parse(pageGarage) : 1;

  const [countCars, setCountCars] = useState<number>(0);
  const [page, setPage] = useState<number>(pageNumber);
  const [garageList, setGarageList] = useState<ICar[]>([]);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [selectedCar, setSelectedCar] = useState<number>();
  const [isRace, setIsRace] = useState<boolean>(false);
  const [isReset, setIsReset] = useState<boolean>(false);
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const [winner, setWinner] = useState<IWinnerRace>();
  const [winnerInRace, setWinnerInRace] = useState<IWinnerRace>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const MAX_PAGE = Math.ceil(countCars / 7);
  const MIN_PAGE = 1;

  useEffect(() => {
    updateGarage(page);
  }, [countCars, isUpdate, page]);

  useEffect(() => {
    if (isWinner && isRace) {
      setWinner(winnerInRace);
      setShowModal(true);
      if (winnerInRace) {
        saveWinner(winnerInRace);
      }
    }
  }, [isWinner]);

  useEffect(() => {
    localStorage.setItem("pageGarage", JSON.stringify(page));
  }, [page]);

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
    await deleteWinner(id);
  };

  const prevPage = (): void => {
    setIsRace(false);
    setIsReset(false);
    setIsWinner(false);
    if (page > MIN_PAGE) {
      setPage(page - 1);
    }
  };

  const nextPage = (): void => {
    setIsRace(false);
    setIsReset(false);
    setIsWinner(false);
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
        setIsRace={setIsRace}
        setIsReset={setIsReset}
        setIsWinner={setIsWinner}
      />
      <h2 className="garage__title">Garage ({countCars})</h2>
      <h4 className="garage__page">Page # {page}</h4>
      <GarageList
        garageList={garageList}
        delCar={delCar}
        countCars={countCars}
        setCountCars={setCountCars}
        setSelectedCar={setSelectedCar}
        isRace={isRace}
        isReset={isReset}
        setWinnerInRace={setWinnerInRace}
        setIsWinner={setIsWinner}
        isWinner={isWinner}
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
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        winner={winner}
      />
    </>
  );
};

export default Garage;
