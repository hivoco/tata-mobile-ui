import { useEffect, useState } from "react";
import Popup from "./src/components/Popup";
import { useLocation, useNavigate } from "react-router-dom";

function Layout({ children, bg, splashScreenNo }) {
  const { pathname } = useLocation();
  const [isBtnVisible, setBtnVisibility] = useState(false);

  useEffect(
    function () {
      pathname !== "/" && setBtnVisibility(true);
    },
    [pathname]
  );

  const navigate = useNavigate();
  const [isopen, setisopen] = useState(false);

  const handlePopup = () => {
    setisopen(!isopen);
  };

  return (
    <div
      className={`w-screen h-screen overflow-clip  bg-cover   bg-no-repeat `}
      style={{
        backgroundImage: `url(${bg})`,
        // backgroundSize:`100% 100%`
      }}
    >
      <div className="flex justify-between items-center pt-12 px-6">
        <div className=" flex items-center">
          {isBtnVisible && (
            <button onClick={() => navigate(-1)} className=" mr-[-1px]">
              <img src="/svgs/back-arrow.svg" alt="back button" />
            </button>
          )}

          <img
            onClick={() => navigate("/")}
            className=""
            src="/svgs/Tata-gluco-logo.svg"
            alt="Tata-gluco-logo"
          />
        </div>

        <button>
          <img
            onClick={() => handlePopup()}
            src="/svgs/exit-btn.svg"
            alt="exit button image"
          />
          {/* EXIT BUTTON */}
        </button>
      </div>
      {children}
      {(splashScreenNo === 3 || splashScreenNo === 4) && (
        <img
          className="absolute bottom-0 left-0"
          src="/svgs/veg-n-terms.svg"
          alt="veg"
        />
      )}

      {isopen && (
        <Popup>
          <div className="flex flex-col  justify-between items-center p-2 md:p-6   ">
            <div className="flex flex-col  justify-between items-center  ">
              <img src="/gifs/exit.gif" className="w-[100px]" alt="Exit" />
              

              <small className="font-DarkerGrotesque font-bold text-[28px] leading-[24px] text-left  tracking-[-0.26px]">Exit Game</small>
              <p className="font-Inter font-normal text-[12px] leading-[16px] text-center">
                Are you sure you want to exit the game? <br />
                Exiting now will result in loss of progress.
              </p>
            </div>

            <div className="flex justify-between items-center gap-4 w-full mt-6">
      
              <div
                onClick={() => handlePopup()}
                className=" border cursor-pointer text-[#1D55FD] border-[#1D55FD] rounded-lg flex justify-center items-center  py-2 px-4 w-[100px] "
              >
                <span className="font-medium text-base cursor-pointer">
                  No
                </span>
              </div>
              <div
                onClick={() => navigate("/")}
                className=" shadow-[2.5px_3.85px_0px_0px_black] text-white cursor-pointer  rounded-lg flex items-center justify-center w-[100px]   py-2 px-4  purple-btn"
              >
                <span className="font-medium text-base">Yes</span>
              </div>
            </div>
          </div>
        </Popup>
      )}
    </div>
  );
}
export default Layout;
