import { useState,useEffect } from "react";
import Layout from "../../Layout";


function SplashScreen3({ splashScreenNo }) {
  const [isUIVisible, setUIVisibility] = useState(false);

  // create a custom hook which take input as time and after timer ends updates the state
  // the ui will be dependent on the state

  useEffect(function () {
    const timer = setTimeout(() => {
      setUIVisibility(true);
    }, 1 * 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Layout bg={'bg-[url("images/ss3.png")]'} splashScreenNo={splashScreenNo}>
      {isUIVisible ? (
        <div className=" flex flex-col items-center pt-11">
          <img src=" svgs/win-signed.svg" alt="win signed" />
          <img src="svgs/jerseys.svg" alt="jerseys" />

          <img
            className=" -mt-11 -mb-16"
            src="svgs/tshirt-n-stars.svg"
            alt="jerseys"
          />

          <img src="svgs/top-5-winners.svg" alt="jerseys" />
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
}

export default SplashScreen3;
