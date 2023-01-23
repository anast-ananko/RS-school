import { FunctionComponent } from "react";

import GarageListItem from "../GarageListItem";
import { ICar } from "../../../interfaces/car";
import { IGarageList } from "../../../interfaces/garageList";

import "./garageList.scss";

const GarageList: FunctionComponent<IGarageList> = ({
  garageList,
  delCar,
  countCars,
  setCountCars,
  setSelectedCar,
  isRace,
  isReset,
  setWinnerInRace,
  isWinner,
  setIsWinner,
}) => {
  return (
    <div className="garage">
      {garageList.map((item: ICar, index) => (
        <GarageListItem
          countCars={countCars}
          setCountCars={setCountCars}
          delCar={delCar}
          id={item.id}
          name={item.name}
          color={item.color}
          key={item.id}
          setSelectedCar={setSelectedCar}
          index={index}
          isRace={isRace}
          isReset={isReset}
          setWinnerInRace={setWinnerInRace}
          isWinner={isWinner}
          setIsWinner={setIsWinner}
        />
      ))}
    </div>
  );
};

export default GarageList;
