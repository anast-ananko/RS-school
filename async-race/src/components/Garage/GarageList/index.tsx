import { useState } from "react";
import { FunctionComponent } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import GarageListItem from "../GarageListItem";
import { getCars } from "../../../services/apiGarage";
import { ICar } from "../../../interfaces/car";
import { garageCars } from "../../../types/garageCars";

import "./garageList.scss";

const GarageList = ({ garageList }: { garageList: ICar[] }) => {
  console.log(garageList);
  let cars;
  if (Array.isArray(garageList)) {
    cars = garageList.map((item: ICar) => (
      <GarageListItem
        id={item.id}
        name={item.name}
        color={item.color}
        key={item.id}
      />
    ));
  }

  return <div className="garage">{cars}</div>;
};

export default GarageList;
