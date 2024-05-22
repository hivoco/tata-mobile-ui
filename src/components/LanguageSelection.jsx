import { useEffect, useState } from "react";
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";
// import { getUniqueID } from "../api/endpoint";
import axios from "../api/instance";

function LanguageSelection() {
  const navigate = useNavigate();
  
  const getUniqueID = async () => {
    const responce = await axios(`/guest_user?name=&phone=`);
    sessionStorage.setItem("unique_id", responce.data.unique_id);
    navigate(`/quiz/play?lang=${selectedOption?.toLowerCase()}`);
  };

  const handleClick = () => {
    getUniqueID();
  };

  const languages = ["English", "Hindi", "Tamil", "Telugu", "Bangla"];

  const [selectedOption, setSelectedOption] = useState("English");

  const selectLanguagesUI = languages.map((language) => {
    return (
      <label
        key={language}
        className={`font-Inter text-[12.28px] leading-[14.87px] font-medium text-[#2B262D] flex justify-between py-[10.3px] px-[9.83px] border-solid rounded-[7.37px] border-[1.23px] 
                      ${
                        selectedOption === language
                          ? "border-[#00AA07]"
                          : "border-[#ADD1FF]"
                      }`}
      >
        {language}

        <input
          className={`border-[0.61px] border-solid   w-[13.51px]  ${
            selectedOption === language
              ? "border-[#00AA07] accent-[#00AA07]"
              : "border-[#00000080]"
          }`}
          type="radio"
          name="language-option"
          value={language}
          checked={selectedOption === language}
          onChange={(e) => {
            setSelectedOption(e.target.value);
          }}
        />
      </label>
    );
  });

  return (
    <Layout bg={"images/ss2.png"}>
      <div className="flex justify-center items-center h-5/6">
        <div className="shadow-[0px_-3px_0px_0px_#00000033_inset]   modal-css  flex flex-col gap-[1.125rem]   w-80   h-auto   p-6  rounded-[8.6px]  ">
          <header className="flex flex-col gap-1 ">
            <h1 className="font-Heebo text-[20.88px] font-bold  leading-[30.67px] text-left text-[#2B262D]">
              Language Selection.
            </h1>

            <h6 className="font-Inter text-xs leading-[14.52px]    font-medium   text-left text-[#2B262D]">
              Select your preferred language
            </h6>
          </header>

          <div className="flex flex-col gap-[1.125rem]">
            <div className="flex flex-col  gap-[7.37px]">
              {selectLanguagesUI}
            </div>

            <button
              className="purple-btn shadow-[2.7px_4.05px_0px_0px_black]   py-[15.5px] rounded-[6.74px]  text-base font-bold leading-[19.36px] text-center "
              onClick={async () => handleClick()}
              type="button"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LanguageSelection;
