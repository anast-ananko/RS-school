import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";

import Header from "../Header";
import Garage from "../Garage";
import Winners from "../Winners";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Garage />} />
        <Route path="/winners" element={<Winners />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
