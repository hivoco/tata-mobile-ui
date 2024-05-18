import { useState, useEffect } from "react";
import Layout from "../../Layout";

function SplashScreen3({ splashScreenNo, setSplashScreenNo }) {
  const [isUIVisible, setUIVisibility] = useState(true);
  const [animation, setAnimation] = useState(false);

  useEffect(function () {
    const timer = setTimeout(() => {
      setUIVisibility(true);
      setAnimation(true);
    }, 1 * 2000);
    const timer1 = setTimeout(() => {
      setSplashScreenNo(4);
    }, 1 * 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Layout bg={"images/ss3.png"} splashScreenNo={splashScreenNo}>
      <div className=" flex flex-col items-center pt-11">
        <img className="w-96" src="/images/Win signed.png" alt="win signed" />
        <img className="w-72" src="/images/Jersey.png" alt="jerseys" />

        <img
          className=" -mt-11 -mb-16"
          src="/svgs/tshirt-n-stars.svg"
          alt="jerseys"
        />

        <img
          className={`w-96  `}
          src="/images/Top 5 winners.png"
          alt="jerseys"
        />
      </div>
    </Layout>
  );
}

export default SplashScreen3;
