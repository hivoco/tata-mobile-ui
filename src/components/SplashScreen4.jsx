import { useEffect, useState } from "react";
import Layout from "../../Layout";
import GoToPage from "../utils/GoToPage";
import { useFetcher, useNavigate } from "react-router-dom";

function SplashScreen4({ splashScreenNo }) {
  const navigate = useNavigate();
  const [isUIVisible, setUIVisibility] = useState(false);
  const [animation, setAnimation] = useState(false);



  useEffect(function () {
    const timer = setTimeout(() => {
      setAnimation(true);
    }, 400);

    const timer1 = setTimeout(() => {
      setUIVisibility(true);
    }, 800);


    return () => {clearTimeout(timer)
      clearTimeout(timer1)
    };
  }, []);

  return (
    // absolute transition-all duration-500 -left-36   
    <Layout  bg={"/images/ss4.png"} splashScreenNo={splashScreenNo}>
      <div
        className={`opacity-0 ${
          animation &&
          "transition-all duration-200 delay-200 ease-in opacity-100"
        } flex flex-col  items-center`}
      >
        <div className=" w-[25rem] h-[25rem] bg-[url('/svgs/star.svg')] bg-cover flex flex-col justify-center items-center ">
          {isUIVisible && (
            <>
              <img
                className=" w-72 "
                src="/images/alsowin.png"
                alt="amazon-gift-card"
              />
              <img
                className=" w-56 -ml-16"
                src="/images/2000.png"
                alt="amazon-gift-card"
              />
              <img
                className=" w-64 -mr-24"
                src="/images/Amazon gift card.png"
                alt="amazon-gift-card"
              />
            </>
          )}
        </div>

        {isUIVisible && (
          <div className="flex  flex-col gap-2 mt-5 ">
            <div className="w-60 flex flex-col gap-4">
              <p className="font-Inter text-xs font-medium tracking-tighter text-center text-white ">
                By clicking ”Accept” you agree to the T&C of Tata Gluco* Play &
                Win Gaming Contest.
              </p>

              <p className="font-Inter text-xs font-semibold tracking-tighter text-center text-white ">
                Click here to view T&C
              </p>
            </div>

            <button
              onClick={() => navigate("/select-language")}
              className="purple-btn shadow-[4.62px_6.92px_0px_0px_black]  px-[91px] py-[18px] rounded-[9px]  font-bold leading-[19.36px] "
            >
              Accept
            </button>
          </div>
        )}
        
      </div>
    </Layout>
  );
}

export default SplashScreen4;
