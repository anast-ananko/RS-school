import { useState, FunctionComponent, useEffect } from "react";
import React from "react";
import classNames from "classnames";

import { IGarageListItem } from "../../../interfaces/garageListItem";
import { startEngine } from "../../../services/apiEngine";
import { stopEngine } from "../../../services/apiEngine";
import { drive } from "../../../services/apiEngine";
import ImageCar from "../../ImageCar";

import "./garageListItem.scss";

const GarageListItem: FunctionComponent<IGarageListItem> = ({
  name,
  color,
  id,
  delCar,
  countCars,
  setCountCars,
  setSelectedCar,
  isRace,
  isReset,
  setWinnerInRace,
  isWinner,
  setIsWinner,
}) => {
  const [time, setTime] = useState<number>(0);
  const [isStopDisabled, setIsStopDisabled] = useState<boolean>(false);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const myRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isRace) {
      setIsWinner(false);
      setIsStopDisabled(true);
      start();
    }
  }, [isRace]);

  useEffect(() => {
    if (isReset) {
      setIsWinner(false);
      setIsStopDisabled(false);
      stop();
    }
  }, [isReset]);

  const removeCar = (id: number): void => {
    delCar(id);
    setCountCars(countCars - 1);
  };

  const start = async (): Promise<void> => {
    setIsStopDisabled(true);
    const params = await startEngine(id);
    setTime(params.distance / params.velocity);
    setIsStart(true);
    setIsPaused(false);

    const res = await drive(id);
    if (!res.success) {
      setIsPaused(true);
      stopEngine(id);
    } else {
      if (!isWinner) {
        stopEngine(id);
        setWinnerInRace({
          id: id,
          name: name,
          time: +(params.distance / params.velocity / 1000).toFixed(2),
        });
        setIsWinner(true);
      }
    }
  };

  const stop = async () => {
    setIsStopDisabled(false);
    await stopEngine(id);
    setIsStart(false);
  };

  const carStyle = {
    animationDuration: `${time}ms`,
  };

  return (
    <div className="car">
      <div className="car__top">
        <button
          className="car__select"
          onClick={() => setSelectedCar({ id, name, color })}
        >
          Select
        </button>
        <button className="car__remove" onClick={() => removeCar(id)}>
          Remove
        </button>
        <span className="car__title">{name}</span>
      </div>
      <div className="car__block" ref={myRef} data-set-id={id}>
        <div className="car__buttons">
          <button
            className="button__start"
            onClick={() => start()}
            disabled={isStopDisabled ? true : false}
          >
            A
          </button>
          <button
            className="button__stop"
            onClick={() => stop()}
            disabled={isStopDisabled ? false : true}
          >
            B
          </button>
        </div>
        <div
          className={classNames("car__img", {
            "car-drive": isStart,
            paused: isPaused,
          })}
          style={carStyle}
        >
          <ImageCar color={color} width="95" height="45" />
        </div>
        <div className="ico"></div>
      </div>
    </div>
  );
};

export default GarageListItem;
