import { useState, useEffect } from "react";
import Layout from "../../Layout";

function SplashScreen3({ splashScreenNo, setSplashScreenNo }) {
  const [animation, setAnimation] = useState(false);

  useEffect(function () {
    const timer = setTimeout(() => {
      // setUIVisibility(true);
      setAnimation(true);
    }, 1 * 1000);

    const timer1 = setTimeout(() => {
      setSplashScreenNo(4);
    }, 1 * 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Layout bg={"images/ss3.png"} splashScreenNo={splashScreenNo}>
        <div className="relative flex flex-col items-center pt-11 mt-7">
          <img
            className={`w-[322px]  absolute -mt-8  z-10  transition-all delay-[100ms] duration-300 ease-in-out   ${
              animation ? " mr-0  " : " -mr-[62rem] "
            }  `}
            src="/images/Win signed.png"
            alt="win signed"
          />

          <img
            className={`absolute z-10 w-[203px] top-16   transition-all delay-[100ms] duration-300 ease-in-out   ${
              animation ? "ml-0" : " -ml-[62rem] "
            }  `}
            src="/images/Jersey.png"
            alt="jerseys"
          />

          <img
            className={`w-full    delay-150 duration-300 ease-in-out   ${
              animation ? "opacity-100" : " opacity-60"
            }  `}
            src="/svgs/tshirt-n-stars.svg"
            alt="jerseys"
          />

          <img
            className={`w-[328px] absolute  bottom-5   transition-all delay-[100ms] duration-300 ease-in-out   ${
              animation ? "mb-0" : " -mb-[62rem] "
            } `}
            src="/images/Top 5 winners.png"
            alt="jerseys"
          />
        </div>
      
    </Layout>
  );
}

export default SplashScreen3;
