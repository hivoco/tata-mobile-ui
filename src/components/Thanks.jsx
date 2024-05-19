import React, { useParams } from "react";
import logo from "/svgs/Tata-gluco-logo.svg";
import thanks from "/images/thanks.png";
import { useNavigate } from "react-router-dom";
import axios from "../api/instance.js";
import { default as axios1 } from "axios";

const Thanks = () => {
  const navigate = useNavigate();

  const viewScore = async () => {
    const uuid = sessionStorage.getItem("unique_id");

    const responce = await axios(`/your_score?uuid=${uuid}`);

    navigate(
      `/quiz/get-your-final-score?score=${responce.data.score}&time=${responce.data.time}&correct=${responce.data.totalCorrectAns}`
    );
  };

  return (
    <div
      style={{
        backgroundImage: `url("/images/ss3.png")`,
        backgroundPosition: "cover",
      }}
      className=" w-full  bg-cover container relative min-h-screen border "
    >
      <div className="flex flex-col justify-center items-center mt-48 ">
        <img className="w-32 pb-8" src={logo} alt="logo" srcSet="" />
        <img className="w-[320px] " src={thanks} alt="thanks" srcSet="" />

        <div className="flex justify-between items-center mt-16 gap-6">
          <div
            onClick={() => navigate("/select-language")}
            className="border border-white text-white  rounded-lg flex justify-center items-center   py-4 px-7 w-[170px] "
          >
            <span className="font-normal text-sm">Play again</span>
          </div>
          <div
            onClick={() => navigate("/result/access-your-leader")}
            className=" text-white  rounded-lg flex items-center justify-center shadow-[4px_4px_0px_0px_black]   py-4 px-7 w-[170px]   bg-gradient-to-r from-[#2038B5] to-[#A409F4] 2038B5"
          >
            <span className="font-normal text-sm ">Leaderboard</span>
          </div>

          {/* <div
            onClick={() => {
              viewScore();
            }}
            className="border text-white border-black rounded-lg flex justify-center items-center   py-2 px-2 w-[100px] "
          >
            <span className="font-normal text-sm">View Score</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Thanks;
