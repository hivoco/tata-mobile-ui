import { useState } from "react";

function Layout({ children, bg, splashScreenNo }) {
  return (
    <div className={`w-screen h-screen ${bg} bg-cover`}>
      {splashScreenNo ? (
        <img
          className=" py-10 px-6"
          src="svgs/Tata-gluco-logo.svg"
          alt="Tata-gluco-logo"
        />
      ) : (
      <div className="flex justify-between items-center pt-12 px-6">
        <div className=" flex items-center">
            <button className=" mr-[-1px]">
              <img src="svgs/back-arrow.svg" alt="back-arrow" />
            </button>

            <img
              className=""
              src="svgs/Tata-gluco-logo.svg"
              alt="Tata-gluco-logo"
            />
        </div>

        <button>
          <img src="svgs/exit-btn.svg" alt="exit button image" />
        </button>
      </div>
      )}

      {children}
      {splashScreenNo ? (
        <img
          className="absolute bottom-3 left-3"
          src="svgs/veg-n-terms.svg"
          alt="veg"
        />
      ) : (
        ""
      )}
      <img
        className="absolute bottom-3 left-3"
        src="svgs/veg-n-terms.svg"
        alt="veg"
      />
    </div>
  );
}
export default Layout;
