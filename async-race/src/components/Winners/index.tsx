import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./winners.scss";

const Winners = () => {
  const [countWinners, setCountWinners] = useState<number>(4);
  const [page, setPage] = useState<number>(1);

  return (
    <div className="winners">
      <h2 className="winners__title">Winners ({countWinners})</h2>
      <h4 className="winners__page">Page # {page}</h4>
      <table>
        <tbody>
          <tr>
            <th>Number</th>
            <th>Car</th>
            <th>Name</th>
            <th>Wins</th>
            <th>Best time (seconds)</th>
          </tr>
        </tbody>
      </table>
      <div className="car__pagination">
        <button className="button__prev">Prev</button>
        <button className="button__next">Next</button>
      </div>
    </div>
  );
};

export default Winners;
