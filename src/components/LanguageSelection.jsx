import { useState } from "react";
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";

function LanguageSelection() {

  const languages = ["JavaScript", "Python", "Java", "C++", "Swift"];
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState();

  const selectLanguagesUI = languages.map((language, index) => {
    return (
      <div
        id={language}
        onClick={() => setSelectedOption(language)}
        key={language}
        className={`flex justify-between  py-3 px-5 md:py-[19px] md:px-[22px] border-solid rounded-[15px] border-2  ${
          selectedOption === language ? "border-[#00AA07]" : "border-[#ADD1FF]"
        }`}
      >
        <label
          className="font-Inter text-[12px] leading-[15px] md:text-[20px] font-medium md:leading-[24.2px] text-left"
          htmlFor={language}
        >
          {language}
        </label>
        <input
          className="border-[0.05px] border-solid border-[#00AA07] accent-[#00AA07] w-3 md:w-[22px]"
          type="radio"
          name="language-option"
          id={index}
          onChange={(e) => e.stopPropagation()}
          //   onChange={() => setSelectedOption(language)}
          checked={selectedOption === language}
          value={language}
        />
      </div>
    );
  });

  function handleClick(){
        navigate('/quiz')
  }

  


  return (
    <Layout bg={"bg-[url('images/ss2.png')] "}>
      <div className="flex justify-center mt-20 md:mt-0">
        <div className="modal-css  flex flex-col gap-5 md:gap-[50px]  w-80 md:w-[557px]  h-auto md:h-[650px]  py-10 px-[30px]  rounded-[10px]  ">
          <header className="flex flex-col gap-[10px ] ">
            <h1 className="font-Inter text-xl md:text-[34px] font-bold  md:leading-[41.15px] text-left text-[#2B262D]">
              Language Selection.
            </h1>

            <h6 className="font-Inter text-[10px] leading-[12px] md:text-base   font-normal  md:leading-[19.36px] text-left text-[#2B262D]">
              Select your preferred language
            </h6>
          </header>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 md:gap-[10px]">
              {selectLanguagesUI}
            </div>

            <button
              className="purple-btn shadow-[4.62px_6.92px_0px_0px_black]  px-[91px] py-[18px] rounded-[9px]  font-bold leading-[19.36px] "
              //   onClick={() => handleClick()}
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
