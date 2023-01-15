import { useState } from "react";
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
  selectCar,
}) => {
  return (
    <div className="garage">
      {garageList.map((item: ICar) => (
        <GarageListItem
          countCars={countCars}
          setCountCars={setCountCars}
          delCar={delCar}
          id={item.id}
          name={item.name}
          color={item.color}
          key={item.id}
          selectCar={selectCar}
        />
      ))}
    </div>
  );
};

export default GarageList;
