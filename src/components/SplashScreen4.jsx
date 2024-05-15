import { useEffect, useState } from "react";
import Layout from "../../Layout";

function SplashScreen4({splashScreenNo}) {
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
    <Layout bg={'bg-[url("images/ss4.png")]'} splashScreenNo={splashScreenNo}>
      {isUIVisible ? (
        <img className="pt-8  my-0 mx-auto" src="svgs/star.svg" alt="star" />
      ) : (
        <div>
          <h1>hello</h1>
        </div>
      )}
    </Layout>
  )
}

export default SplashScreen4;
