import Layout from "../../Layout.jsx";
import { useEffect, useState } from "react";
import TableBody from "./TableBody.jsx";

function LeaderBoard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const res = JSON.parse(sessionStorage.getItem("user_data"));
    console.log("object", res.winner);
    setData(res.winner);
  }, []);

  // const data = [
  //   {
  //     rank: 1,
  //     name: "ranjan",
  //     point: 69,
  //     timeInSeconds: 420,
  //   },
  //   {
  //     rank: 2,
  //     name: "alice",
  //     point: 72,
  //     timeInSeconds: 400,
  //   },
  //   {
  //     rank: 3,
  //     name: "bob",
  //     point: 65,
  //     timeInSeconds: 450,
  //   },
  //   {
  //     rank: 4,
  //     name: "john",
  //     point: 80,
  //     timeInSeconds: 380,
  //   },
  //   {
  //     rank: 5,
  //     name: "emma",
  //     point: 62,
  //     timeInSeconds: 480,
  //   },
  //   {
  //     rank: 6,
  //     name: "sam",
  //     point: 75,
  //     timeInSeconds: 410,
  //   },
  //   {
  //     rank: 7,
  //     name: "lisa",
  //     point: 68,
  //     timeInSeconds: 430,
  //   },
  //   {
  //     rank: 8,
  //     name: "mike",
  //     point: 70,
  //     timeInSeconds: 415,
  //   },
  //   {
  //     rank: 9,
  //     name: "sara",
  //     point: 73,
  //     timeInSeconds: 395,
  //   },
  // ];

  return (
    <Layout bg={"/images/ss1.png"}>
      <div className="w-5/6   flex  flex-col justify-center gap-[22px] my-0 mx-auto">
        <div className="flex flex-col  gap-[10px] justify-center  items-center text-white mt-10 ">
          <h2 className="text-[38px] font-DarkerGrotesque leading-[14px] text-center">
            LEADERBOARD
          </h2>
          <p className="font-Inter text-[14px] font-normal  text-center">
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
