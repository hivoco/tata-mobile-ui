import React, { useEffect, useParams, useState } from "react";
import logo from "/svgs/Tata-gluco-logo.svg";
import thanks from "/images/thanks.png";
import { useNavigate } from "react-router-dom";
import axios from "../api/instance.js";
import { default as axios1 } from "axios";

const Thanks = () => {
  const navigate = useNavigate();

  const [animation,setAnimation]=useState(false)

  useEffect( ()=> {
    const timer=setTimeout(()=>setAnimation(true),200)
    return ()=> clearTimeout(timer) 
  }, []);

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
      }}
      className=" w-full  bg-cover container relative min-h-screen border "
    >
      <div className="flex flex-col justify-center items-center px-6 mt-72 relative">

        <img className={` ${animation ? "mt-0 ml-0" : "-mt-60 -ml-[60rem]"} z-10 -top-16 transition-all delay-300 duration-300 ease-in-out absolute  w-[103px] `} src={logo} alt="logo" />

            <div className={` ${animation?"opacity-100":"opacity-50" } h-80 bg-[url('/svgs/star.svg')] bg-center  flex justify-center items-center`}>
              <img className="w-[20rem] " src={thanks} alt="thanks" />
            </div>

            <div  className=" flex flex-col gap-24">
            <div className={` ${animation?"opacity-80":"opacity-40" }  flex justify-between items-center  gap-[10px] `}>
              <div
                onClick={() => navigate("/select-language")}
                className="border border-white text-white  rounded-[7.5px] flex justify-center items-center   py-4 px-7 w-[170px] "
              >
                <span className="font-normal text-sm">Play again</span>
              </div>
              <div
                onClick={() => navigate("/result/access-your-leader")}
                className=" text-white  rounded-[7.5px] flex items-center justify-center shadow-[3px_4.5px_0px_0px_black]   py-4 px-7 w-[170px]   purple-btn"
              >
                <span className="font-normal text-sm ">Leaderboard</span>
              </div>

         
            </div>

            <img className="h-10" src="/svgs/poweredBy.svg" alt="powered By" />
            </div>
      </div>
    </div>
  );
}

export default Thanks;
