import { useState, FunctionComponent, useEffect } from "react";
import React from "react";
import { useSpring, animated } from "@react-spring/web";

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
  setIsWinner,
}) => {
  const [time, setTime] = useState<number>(0);
  const [isStop, setIsStop] = useState<boolean>(false);

  const nodeRef = React.useRef<HTMLDivElement>(null);
  const myRef = React.useRef<HTMLDivElement>(null);

  const [animationProps, api] = useSpring(() => ({}));

  const OFFSET_RIGHT = 220;
  const CAR_WIDTH = 65;

  useEffect(() => {
    if (isRace) {
      setIsWinner(false);
      setIsStop(true);
      start();
    }
  }, [isRace]);

  useEffect(() => {
    if (isReset) {
      setIsStop(false);
      stop();
    }
  }, [isReset]);

  const removeCar = (id: number): void => {
    delCar(id);
    setCountCars(countCars - 1);
  };

  const start = async (): Promise<void> => {
    setIsStop(true);
    const params = await startEngine(id);
    setTime(params.distance / params.velocity);

    const screenWidth = window.innerWidth - OFFSET_RIGHT;
    api.start({ transform: `translateX(${screenWidth}px)` });

    const res = await drive(id);
    if (!res.success) {
      const rect = nodeRef!.current!.getBoundingClientRect();
      api.set({ transform: `translateX(${rect.x - CAR_WIDTH}px)` });
      stopEngine(id);
    } else {
      setWinnerInRace({
        id: id,
        name: name,
        time: +(params.distance / params.velocity / 1000).toFixed(2),
      });
      setIsWinner(true);
      stopEngine(id);
    }
  };

  const stop = (): void => {
    api.set({ transform: "translateX(0px)" });
    setIsStop(false);
    stopEngine(id);
  };

  const carStyle = {
    transitionDuration: `${time}ms`,
  };

  return (
    <div className="car">
      <div className="car__top">
        <button className="car__select" onClick={() => setSelectedCar(id)}>
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
            disabled={isStop ? true : false}
          >
            A
          </button>
          <button
            className="button__stop"
            onClick={() => stop()}
            disabled={isStop ? false : true}
          >
            B
          </button>
        </div>
        <animated.div
          ref={nodeRef}
          style={{
            ...animationProps,
            ...carStyle,
          }}
        >
          <ImageCar color={color} width="95" height="45" />
        </animated.div>
        <div className="ico"></div>
      </div>
    </div>
  );
};

export default GarageListItem;
