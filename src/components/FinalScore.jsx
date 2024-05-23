import Layout from "../../Layout";
import { useNavigate, useSearchParams } from "react-router-dom";

function FinalScore() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  // Access individual parameter values
  const score = searchParams.get("score");
  const time = searchParams.get("time");
  const correct = searchParams.get("correct");

  return (
    <Layout bg={"/images/ss3.png"}>
      <div className="modal-css  w-3/4 m-auto p-4 rounded-[9px] mt-[113px] shadow-[0px_3px_6px_0px_#0000003B]   shadow-[0px_3px_6px_0px_#00000029]   ">
        <div className="absolute  z-10  top-40 left-0 w-screen ">
          <img src="/gifs/celebration.gif" alt="celebration" />
        </div>



        <div      
          className="my-0 left-[1px] flex flex-col gap-[33.5px]      
        rounded-[10px]   "
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-[10px] items-center">
              <img className="w-[70px]" src="/gifs/tick-gif.svg" alt="right" />

              <h3 className="font-Inter font-bold text-[15.7px] leading-[13px]   text-center tracking-[-0.03px] text-[#252042]">
                Yeahh Score!
              </h3>

              <p className="font-Inter text-[10.45px] font-normal leading-[13px] tracking-[-0.03px] text-center text-[#5F5F61]">
                {"You've"} completed the Football Game Quiz. Now, {"it's"}time
                to celebrate your victory like a champion!
              </p>
            </div>

            <div className="flex flex-col items-center gap-[11.72px]">
              <h4 className="text-[13px] font-bold leading-[13px] tracking-[-0.03px] text-center  text-[#5F5F61]">
                Your Score
              </h4>

              <span className="font-OdibeeSans text-[39px] font-bold leading-[32.65px] text-right text-[#1D55FD]">
                {score}
              </span>

              <div className="  flex items-center justify-center  gap-[5.22px] font-Inter text-[13px] font-bold leading-[15.8px] text-left text-white">
                <button className="score-btn bg-[#1D55FD] px-2">
                  <img className="w-[15px] " src="/svgs/alarm.svg" alt="time" />

                  <span className="font-Inter text-[13px] font-bold leading-[16px] text-left text-white">
                    {Math.floor(Number(time) / 60) > 0
                      ? Math.floor(Number(time) / 60)
                      : 1}
                    :00
                  </span>
                </button>

                <button className="score-btn bg-[#00AA07]">
                  <img className="w-[15px]" src="/svgs/right.svg" alt="right" />

                  <span className="">{correct}</span>
                </button>

                <button className="score-btn bg-[#FA3939]">
                  <img className="w-[15px]" src="/svgs/wrong.svg" alt="wrong" />

                  <span className="">{10 - Number(correct)}</span>
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate("/login")}
            className="purple-btn whitespace-nowrap	 border-[0.89px] shadow-[1.77px_2.66px_0px_0px_#000000] rounded-[4.43px] text-[14px] leading-[17px] text-center font-semibold py-[13px] "
          >
           Submit Your Score
          </button>
        </div>

      </div>
    </Layout>
  );
}

export default FinalScore;
