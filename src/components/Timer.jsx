// Timer.js
import React, { useState, useEffect } from "react";

const Timer = ({ onTimeout, seconds, setSeconds, index,isQuizQuestionLoading,autoSubmit}) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0.0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (seconds === 0 && index < 9 && !isQuizQuestionLoading) {
      onTimeout();
    }
    else if(seconds===0 && index===9){
      autoSubmit()
    }
  }, [seconds,isQuizQuestionLoading]);



  return (
    <span className=" font-LtEnergy text-[19.14px] leading-[22.02px] font-bold text-center text-[#1D55FD] text-nowrap">
     {"00 :"}   {seconds < 10 ? ` 0${seconds}` : seconds}
    </span>
  );
};

export default Timer;
