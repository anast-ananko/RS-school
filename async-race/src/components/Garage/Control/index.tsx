import { FunctionComponent } from "react";
import { useState, useEffect } from "react";

import { createCar } from "../../../services/apiGarage";
import { updateCar } from "../../../services/apiGarage";
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
  setIsRace,
  setIsReset,
  isRaceDisabled,
  isResetDisabled,
  setIsRaceDisabled,
  setIsResetDisabled,
}) => {
  const color = localStorage.getItem("colorCreate");
  const colorString: string = color ? JSON.parse(color) : "#ffffff";
  const title = localStorage.getItem("titleCreate");
  const titleString: string = title ? JSON.parse(title) : "";

  const [titleCreate, setTitleCreate] = useState<string>(titleString);
  const [colorCreate, setColorCreate] = useState<string>(colorString);
  const [titleUpdate, setTitleUpdate] = useState<string>("");
  const [colorUpdate, setColorUpdate] = useState<string>("#ffffff");

  useEffect(() => {
    if (selectedCar) {
      setTitleUpdate(selectedCar.name);
      setColorUpdate(selectedCar.color);
    }
    console.log(selectedCar);
  }, [selectedCar]);

  useEffect(() => {
    localStorage.setItem("colorCreate", JSON.stringify(colorCreate));
    localStorage.setItem("titleCreate", JSON.stringify(titleCreate));
  }, [titleCreate, colorCreate]);

  useEffect(() => {
    localStorage.setItem("selectedCar", JSON.stringify({...selectedCar, name: titleUpdate, color: colorUpdate}));
  }, [titleUpdate, colorUpdate]);  

  const createNewCar = (): void => {
    if (titleCreate && colorCreate) {
      createCar({ name: titleCreate, color: colorCreate });
    }
    setCountCars(countCars + 1);
    setTitleCreate("");
    setColorCreate("#000000");
    localStorage.removeItem("colorCreate");
    localStorage.removeItem("titleCreate");
  };

  const updCar = (): void => { 
    if (selectedCar) {
      updateCar(selectedCar.id, {
        name: titleUpdate,
        color: colorUpdate,
      });
    }    

    setIsUpdate(!isUpdate);
    setTitleUpdate("");
    setColorUpdate("#000000");  
    setSelectedCar(null); 
  };

  useEffect(() => {
    localStorage.removeItem("selectedCar"); 
  }, [isUpdate]);

  const generateRandomCars = (): void => {
    for (let i = 0; i < 100; i++) {
      createCar({ name: generateRandomName(), color: generateRandomColor() });
    }
    setCountCars(countCars + 100);
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

  const race = (): void => {
    setIsReset(false);
    setIsRace(true);
    setIsRaceDisabled(true);
    setTimeout(() => stop, 11000);
  };

  const reset = (): void => {
    setIsReset(true);
    setIsRace(false);
    setIsRaceDisabled(false);
    setIsResetDisabled(true);
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
        <button
          className="control__create-btn"
          onClick={() => createNewCar()}
          disabled={titleCreate ? false : true}
        >
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
        <button
          className="control__update-btn"
          onClick={() => updCar()}
          disabled={titleUpdate ? false : true}
        >
          Update
        </button>
      </div>
      <div className="buttons">
        <button
          className="race-button"
          onClick={race}
          disabled={isRaceDisabled ? true : false}
        >
          Race
        </button>
        <button
          className="reset-button"
          onClick={reset}
          disabled={isResetDisabled ? true : false}
        >
          Reset
        </button>
        <button className="generate-button" onClick={generateRandomCars}>
          Generate cars
        </button>
      </div>
    </div>
  );
};

export default Control;
