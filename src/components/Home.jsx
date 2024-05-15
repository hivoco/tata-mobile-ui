import { useEffect, useState } from "react";
import SplashScreen1 from "./SplashScreen1";
import SplashScreen2 from "./SplashScreen2";
import SplashScreen3 from "./SplashScreen3";


function Home() {
  const [splashScreenNo, setSplashScreenNo] = useState(1);

  useEffect(
    function () {
      const timer = setTimeout(() => {
        setSplashScreenNo(splashScreenNo === 2 ? splashScreenNo + 1 : splashScreenNo);
      }, 4 * 1000);
      return function () {
        clearTimeout(timer);
      };
    },
    [splashScreenNo]
  );
  return (
    <>
      {splashScreenNo === 1 ? (
        <SplashScreen1 setSplashScreenNo={setSplashScreenNo} />
      ) : (
        ""
      )}
      {splashScreenNo === 2 ? <SplashScreen2 /> : ""}
      {splashScreenNo === 3 ? <SplashScreen3 splashScreenNo={splashScreenNo} /> : ""}
    </>
  );
}

export default Home;
