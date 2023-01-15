import { FunctionComponent } from "react";
import { useState, useEffect } from "react";

import { createCar } from "../../../services/apiGarage";
import { getCar } from "../../../services/apiGarage";
import { updateCar } from "../../../services/apiGarage";
import { ICar } from "../../../interfaces/car";
import { IControl } from "../../../interfaces/control";
import generateRandomName from "../../../helpers/generateRandomName";
import generateRandomColor from "../../../helpers/generateRandomColor";

import "./control.scss";

const Control: FunctionComponent<IControl> = ({
  countCars,
  setCountCars,
  selectedCar,
  setSelectedCar,
  isUpdate,
  setIsUpdate,
}) => {
  const [titleCreate, setTitleCreate] = useState<string>("");
  const [colorCreate, setColorCreate] = useState<string>("");

  const [titleUpdate, setTitleUpdate] = useState<string>("");
  const [colorUpdate, setColorUpdate] = useState<string>("");

  useEffect(() => {
    updateSelectedCar(selectedCar);
  }, [selectedCar]);

  const updateSelectedCar = async (id: number | undefined): Promise<void> => {
    if (typeof id === "number") {
      const car = await getCar(id);
      onCarLoaded(car);
    }
  };

  const onCarLoaded = (car: ICar): void => {
    setTitleUpdate(car.name);
    setColorUpdate(car.color);
  };

  const createNewCar = (): void => {
    if (titleCreate && colorCreate) {
      createCar({ name: titleCreate, color: colorCreate });
    }
    setCountCars(countCars + 1);
    setTitleCreate("");
    setColorCreate("#000000");
  };

  const updCar = (): void => {
    if (typeof selectedCar === "number") {
      updateCar(selectedCar, {
        name: titleUpdate,
        color: colorUpdate,
      });
    }
    setIsUpdate(!isUpdate);
    setSelectedCar(0);
    setTitleUpdate("");
    setColorUpdate("#000000");
  };

  const generateRandomCars = () => {
    for (let i = 0; i < 100; i++) {
      createCar({ name: generateRandomName(), color: generateRandomColor() });
    }
  };

  const titleCreateHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitleCreate(e.target.value);
  };

  const colorCreateHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setColorCreate(e.target.value);
  };

  const titleUpdateHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitleUpdate(e.target.value);
  };

  const colorUpdateHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setColorUpdate(e.target.value);
  };

  return (
    <div className="control">
      <div className="control__create">
        <input
          type="text"
          id="title"
          value={titleCreate}
          onChange={(e) => titleCreateHandler(e)}
        />
        <input
          type="color"
          id="title"
          value={colorCreate}
          onChange={(e) => colorCreateHandler(e)}
        />
        <button className="control__create-btn" onClick={() => createNewCar()}>
          Create
        </button>
      </div>
      <div className="control__update">
        <input
          type="text"
          id="title"
          value={titleUpdate}
          onChange={(e) => titleUpdateHandler(e)}
        />
        <input
          type="color"
          id="title"
          value={colorUpdate}
          onChange={(e) => colorUpdateHandler(e)}
        />
        <button className="control__update-btn" onClick={() => updCar()}>
          Update
        </button>
      </div>
      <div className="buttons">
        <button className="race-button">Race</button>
        <button className="reset-button">Reset</button>
        <button className="generate-button" onClick={generateRandomCars}>
          Generate cars
        </button>
      </div>
    </div>
  );
};

export default Control;
