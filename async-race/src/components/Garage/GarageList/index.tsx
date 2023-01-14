import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import GarageListItem from "../GarageListItem";

import "./garageList.scss";

const GarageList = () => {
  const [countCars, setCountCars] = useState<number>(4);
  const [page, setPage] = useState<number>(1);

  return (
    <div className="garage">
      <h2 className="garage__title">Garage ({countCars})</h2>
      <h4 className="garage__page">Page # {page}</h4>
      <GarageListItem />
      <GarageListItem />
      <div className="car__pagination">
        <button className="button__prev">Prev</button>
        <button className="button__next">Next</button>
      </div>
    </div>
  );
};

export default GarageList;
