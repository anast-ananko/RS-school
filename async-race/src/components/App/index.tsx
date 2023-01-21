import { FunctionComponent } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "../Header";
import Garage from "../Garage";
import Winners from "../Winners";

import "./App.scss";

const App: FunctionComponent = () => {
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
