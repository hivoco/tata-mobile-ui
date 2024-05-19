// Timer.js
import React, { useState, useEffect } from "react";

const Timer = ({ onTimeout, seconds, setSeconds, index }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0.0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (seconds === 0 && index < 9) {
      onTimeout();
    }
  }, [seconds]);

  return (
    <small className=" font-OdibeeSans text-3xl leading-[33.24px] font-normal text-center text-[#1D55FD]">
      {seconds < 10 ? `0${seconds}` : seconds}{" "}
    </small>
  );
};

export default Timer;
