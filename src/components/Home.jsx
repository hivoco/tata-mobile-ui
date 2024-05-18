import { useEffect, useState } from "react";
import SplashScreen1 from "./SplashScreen1";
import SplashScreen2 from "./SplashScreen2";
import SplashScreen3 from "./SplashScreen3";
import SplashScreen4 from "./SplashScreen4";

function Home({ setIsMusicAllowed }) {
  const [splashScreenNo, setSplashScreenNo] = useState(1);

  // useEffect(
  //   function () {
  //     const timer = setTimeout(() => {
  //       setSplashScreenNo(
  //         splashScreenNo >= 2 ? splashScreenNo + 1 : splashScreenNo
  //       );
  //     }, 6 * 1000);
  //     return function () {
  //       clearTimeout(timer);
  //     };
  //   },
  //   [splashScreenNo]
  // );
  return (
    <>
      {splashScreenNo === 1 && (
        <SplashScreen1
          setSplashScreenNo={setSplashScreenNo}
          setIsMusicAllowed={setIsMusicAllowed}
        />
      )}

      {splashScreenNo === 2 && (
        <SplashScreen2 setSplashScreenNo={setSplashScreenNo} />
      )}
      {splashScreenNo === 3 && (
        <SplashScreen3
          setSplashScreenNo={setSplashScreenNo}
          splashScreenNo={splashScreenNo}
        />
      )}
      {splashScreenNo >= 4 && <SplashScreen4 splashScreenNo={splashScreenNo} />}
    </>
  );
}

export default Home;
