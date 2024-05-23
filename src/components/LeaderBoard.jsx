import Layout from "../../Layout.jsx";
import { useEffect, useState } from "react";
import TableBody from "./TableBody.jsx";

function LeaderBoard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const res = JSON.parse(sessionStorage.getItem("user_data"));
    setData(res.winner);
  }, []);

  return (
    <Layout bg={"/images/ss1.png"}>
      <div className="w-5/6   flex  flex-col justify-center gap-[22px] my-0 mx-auto">
        <div className="flex flex-col  gap-[10px] justify-center  items-center text-white mt-[21px] ">
          <h2 className="text-[38px] font-DarkerGrotesque leading-[14px] text-center">
            LEADERBOARD
          </h2>
          <p className="font-Inter text-[10px] leading-[14px] font-normal  text-center">
            Score big on the Leaderboard! Compete with fans worldwide.
          </p>
        </div>

        <div className="flex flex-col  ">
          <table className="">
            <tbody className="flex flex-col gap-2">
              {<TableBody data={data} />}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default LeaderBoard;
