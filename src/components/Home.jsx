import { useEffect, useState } from "react";
import SplashScreen1 from "./SplashScreen1";
import SplashScreen2 from "./SplashScreen2";

function Home() {
  const [splashScreen, setSplashScreen] = useState(1);

  useEffect(
    function () {
      const timer = setTimeout(() => {
        setSplashScreen((prev) => prev + 1);
      }, 3 * 1000);
      return function () {
        clearTimeout(timer);
      };
    },
    [splashScreen]
  );
  return (
    <>
      {splashScreen === 1 ? (
        <SplashScreen1 setSplashScreen={setSplashScreen} />
      ) : (
        ""
      )}
      {splashScreen === 2 ? <SplashScreen2 /> : ""}
      {/* {splashScreen===3?SplashScreen3:""} */}
    </>
  );
}

export default Home;
