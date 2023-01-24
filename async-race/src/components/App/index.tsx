import { FunctionComponent, useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "../Header";
import Garage from "../Garage";
import Winners from "../Winners";

import "./App.scss";

const App: FunctionComponent = () => {
  const [pageGarage, setPageGarage] = useState<number>(1);
  const [pageWinners, setPageWinners] = useState<number>(1);

  useEffect(() => {
    localStorage.setItem("pageGarage", JSON.stringify(1));
    localStorage.setItem("pageWinners", JSON.stringify(1));
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Garage pageGarage={pageGarage} setPageGarage={setPageGarage} />} />
        <Route path="/winners" element={<Winners pageWinners={pageWinners} setPageWinners={setPageWinners} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
