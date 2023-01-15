import { useState } from "react";
import { FunctionComponent } from "react";
import GarageListItem from "../GarageListItem";
import { ICar } from "../../../interfaces/car";

import "./garageList.scss";

const GarageList = ({ garageList }: { garageList: ICar[] }) => {
  return (
    <div className="garage">
      {garageList.map((item: ICar) => (
        <GarageListItem
          id={item.id}
          name={item.name}
          color={item.color}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default GarageList;
