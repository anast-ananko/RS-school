import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./control.scss";

const Control = () => {
  const [titleCreate, setTitleCreate] = useState<string>("");
  const [colorCreate, setColorCreate] = useState<string>("");

  const [titleUpdate, setTitleUpdate] = useState<string>("");
  const [colorUpdate, setColorUpdate] = useState<string>("");

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
        <button className="control__create-btn">Create</button>
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
        <button className="control__update-btn">Update</button>
      </div>
      <div className="buttons">
        <button className="race-button">Race</button>
        <button className="reset-button">Reset</button>
        <button className="generate-button">Generate cars</button>
      </div>
    </div>
  );
};

export default Control;
