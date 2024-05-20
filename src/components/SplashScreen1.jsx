import { useState } from "react";
import Layout from "../../Layout";
import AddBgWithText from "../utils/AddBgWithText";

function SplashScreen1({ setSplashScreenNo, setIsMusicAllowed }) {
  const [animation, setAnimation] = useState(false);
  return (
    <Layout bg={"images/ss1.png"}>
      <div className="px-4 pt-5  flex flex-col gap-[6.5rem]">
        {<AddBgWithText animation={animation} />}

        <div className="flex flex-col gap-28 items-center ">
          <button
            className={` ${
              animation
                ? "transition-all delay-150 duration-200 ease-out opacity-0"
                : "opacity-100"
            } purple-btn shadow-[2.7px_4.05px_0px_0px_black] flex items-center justify-center gap-1  px-20 py-4 rounded-[9px]  font-bold leading-[19.36px]`}
            onClick={() => {
              setIsMusicAllowed(true);
              setAnimation(true);
              setTimeout(() => {
                setSplashScreenNo(2);
              }, 700);
            }}
          >
            {"Let's Go"} <img src="svgs/arrow.svg" alt="arrow" />
          </button>

          <img className="h-11" src="svgs/poweredBy.svg" alt="poweredBy" />
        </div>
      </div>
    </Layout>
  );
}

export default SplashScreen1;
