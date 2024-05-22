import { useEffect, useState } from "react";
import Layout from "../../Layout";
import SecondAddBgWithText from "../utils/SecondAddBgWithText";

function SplashScreen2({ setSplashScreenNo }) {
  const [isUIVisible, setUIVisibility] = useState(true);
  const [animation, setAnimation] = useState(false);

  useEffect(function () {
    // shows bg first then rest of elements after some time
    const timer = setTimeout(function () {
      setUIVisibility(true);
      setAnimation(true);
    }, 1 * 500);

    const timer1 = setTimeout(function () {
      setSplashScreenNo(3);
    }, 4000);

    return function () {
      clearTimeout(timer);
      clearTimeout(timer1);
    };
  }, []);

  return (
    <Layout bg={"images/ss2.png"}>
      {isUIVisible && (
        <div className={`flex flex-col gap-28 items-center pt-5  px-4 `}>
          {<SecondAddBgWithText animation={animation} />}

          <img
            className={`${
              animation
                ? "transition-all duration-500 delay-300 ease-in opacity-100 "
                : "opacity-0"
            } w-[100px]   animate-spin`}
            src="images/rotating-football.png"
            alt="football"
          />

          <img className=" " src="svgs/poweredBy.svg" alt="powered by hivoco" />
        </div>
      )}
    </Layout>
  );
}

export default SplashScreen2;
