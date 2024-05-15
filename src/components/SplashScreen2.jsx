import { useEffect, useState } from "react";
import Layout from "../../Layout";
import AddBgWithText from "../../public/utils/AddBgWithText";

function SplashScreen2() {
  const [isUIVisible, setUIVisibility] = useState(false);
  useEffect(function () {
    const timer = setTimeout(function () {
      setUIVisibility(true);
    }, 1 * 500);

    return function () {
      clearTimeout(timer);
    };
  }, [])

  return (
    <Layout bg={'bg-[url("images/ss2.png")]'}>
      {isUIVisible ? ( // after 500 ms its displays elements
        <div className={`flex flex-col gap-28 items-center pt-5  px-4 `}>
          {<AddBgWithText />}
          <img
            className="w-[100px]  animate-spin"
            src="images/rotating-football.png"
            alt="football"
          />
          <img className="" src="svgs/poweredBy.svg" alt="powered by hivoco" />
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
}

export default SplashScreen2;
