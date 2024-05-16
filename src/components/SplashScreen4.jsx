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
      {!isUIVisible ? (
        <img className="pt-8  my-0 mx-auto" src="svgs/star.svg" alt="star" />
      ) : (
        <div className="flex flex-col  items-center">
          <div className=" w-[25rem] h-[25rem] bg-[url('svgs/star.svg')] bg-cover flex justify-center items-center">
            <img
              className=""
              src="svgs/amazon-gift-card.svg"
              alt="amazon-gift-card"
            />
          </div>

          <div className="flex  flex-col gap-2 ">
            <div className="w-60 flex flex-col gap-4">
                <p className="font-Inter text-xs font-medium tracking-tighter text-center text-white ">
                By clicking ”Accept” you agree to the T&C of Tata Gluco* Play &
                Win Gaming Contest.
                </p>

                <p className="font-Inter text-xs font-semibold tracking-tighter text-center text-white ">
                Click here to view T&C
                </p>
            </div>

            <button className="purple-btn shadow-[4.62px_6.92px_0px_0px_black]  px-[91px] py-[18px] rounded-[9px]  font-bold leading-[19.36px] ">
              Accept
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default SplashScreen4;
