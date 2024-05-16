import React from "react";

const Popup = ({ children, bg }) => {
  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50  "
    >
      <div >
        {children}
      </div>
    </div>
  );
};

export default Popup;
