import Layout from "../../Layout";

function Quiz() {
  return (
    <Layout bg={"bg-[url('images/ss3.png')] "}>
      <div className="modal-css  flex flex-col gap-6 py-5 px-[30px] rounded-[10px] w-10/12  my-0 mx-auto  mt-10 ">
        <div
          //   onClick={() =>
          //     convertTextToSpeech(allQuestions?.[currentIndex]?.audio)
          //   }
          className="flex justify-end"
        ></div>
        <div className="relative flex flex-col items-center ">
          <div className="  absolute  rounded-full w-[96.56px] h-[96.56px] py-8 px-4 border border-solid border-[#1D55FD4D] bg-white shadow-[0px_4px_14px_0px_#0000001F] flex justify-center items-center">
            <span className=" font-LtEnergy text-3xl leading-[33.24px] font-bold text-center text-[#1D55FD]">
              00:19
              {/* <Timer
                seconds={seconds}
                setSeconds={setSeconds}
                onTimeout={handleNext}
            /> */}
            </span>
          </div>

          <div className=" mt-[48px] h-[170px] pt-[76px] pb-[50px] px-7 rounded-[20px]  bg-white shadow-[0px_4px_14px_0px_0000000D]">
            <div className="   flex flex-col gap-[14px] ">
              <p className="font-Inter font-bold text-[#1D55FD] text-base leading-[19.36px] text-center">
                Question 09/10
                {/* Question {currentIndex + 1}/10 */}
              </p>

              <p className="font-Inter font-semibold text-[#252042] text-[11px]  leading-[13px]  text-center">
                {/* {allQuestions?.[currentIndex]?.question} */}
                Which player famously scored the "Hand of God" goal for
                Argentina in the 1986 FIFA World Cup?
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <div className=" flex flex-col  gap-3 justify-center items-center">
            <img
              src="svgs/mic.svg"
              className="w-[132px] h-auto"
              //   className="h-48"
              //   onClick={() => {
              //     setIsAnswered(!isAnswered);
              //     enter(allQuestions?.[currentIndex]?.question_id);
              //   }}
              style={
                {
                  // opacity: selectedOption.trim() != "" ? 0.5 : 1,
                  // pointerEvents: selectedOption.trim() != "" ? "none" : "auto",
                }
              }
              //   src={
              //     isAnswered
              //       ? "/assets/images/listen.svg"
              //       : "/assets/images/mic-btn.svg"
              //   }
              alt="mic-btn"
            />

            <p className="font-Inter font-semibold text-[10px] leading-[12px] text-center">
            Tap to Submit
              {/* {isAnswered ? "Tap to Submit" : "Tap to Answer"} */}
            </p>
          </div>

          <div className="flex flex-col gap-[10px] text-[#2B262D]">
                <div
                //   onClick={() =>
                //     handleOptionChange(
                //       allQuestions?.[currentIndex]?.options[0],
                //       allQuestions?.[currentIndex]?.question_id
                //     )
                //   }

                //   style={{
                //     pointerEvents: selectedOption != "" ? "none" : "auto",
                //   }}
                //   className={`py-[19px] px-[22px] border-2  ${
                //     correctResponceAnswer
                //       ? isGivenAnswerCorrect
                //         ? correctResponceAnswer ==
                //           allQuestions?.[currentIndex]?.options[0]
                //           ? "border-[#00AA07]"
                //           : "border-[#FA3939]"
                //         : "border-[#FA3939]"
                //       : "border-[#ADD1FF] "
                //   }  flex justify-between rounded-[15px] `}
                  className="flex justify-between items-center rounded-[7.7px] px-[10.5px]"
                >
                <label
                    className="font-Inter text-[20px] font-medium leading-[24.2px] text-left "
                    htmlFor="option2"
                >
                    ronaldo
                    {/* {allQuestions
                    ? allQuestions?.[currentIndex]?.options[0]
                    : "option 1"} */}
                </label>
                <input
                    className={`border  border-[#00000080] bg-[#F5F5F5] w-[22px]`}
                    type="radio"
                    // value={allQuestions?.[currentIndex]?.options[0]}
                    // checked={
                    //   selectedOption === allQuestions?.[currentIndex]?.options[0]
                    // }
                    onChange={() => {}}
                    name="options"
                    disabled={false}
                />
                </div>
                <div
                //   onClick={() =>
                //     handleOptionChange(
                //       allQuestions?.[currentIndex]?.options[1],
                //       allQuestions?.[currentIndex]?.question_id
                //     )
                //   }
                //   style={{
                //     pointerEvents: selectedOption != "" ? "none" : "auto",
                //   }}
                //   className={` ${
                //     correctResponceAnswer
                //       ? isGivenAnswerCorrect
                //         ? correctResponceAnswer ==
                //           allQuestions?.[currentIndex]?.options[1]
                //           ? "border-[#00AA07]"
                //           : "border-[#FA3939]"
                //         : "border-[#FA3939]"
                //       : "border-[#ADD1FF]"
                //   } py-[19px] px-[22px] border-2   flex justify-between rounded-[15px] `}

                className="flex justify-between items-center rounded-[7.7px] px-[10.5px]"
                >
                <label
                    className="font-Inter text-[20px] font-medium leading-[24.2px] text-left"
                    htmlFor="option3"
                >
                    messi
                    {/* {allQuestions
                    ? allQuestions?.[currentIndex]?.options[1]
                    : "option 2"} */}
                </label>
                <input
                    className="border border-solid border-[#00000080] bg-[#F5F5F5] w-[22px] "
                    type="radio"
                    // value={allQuestions?.[currentIndex]?.options[1]}
                    // checked={
                    //   selectedOption === allQuestions?.[currentIndex]?.options[1]
                    // }
                    onChange={() => {}}
                    name="options"
                    readOnly={true}
                />
                </div>
          </div>

        </div>

        <div className=" flex gap-4 items-center">
          <button
          // onClick={() => handleNext()}
        //   className={`${
        //     currentIndex === 9 ? "invisible" : "block"
        //   }  border-2 border-solid border-[#1D55FD] rounded-[10px]  py-6 w-1/2  font-Inter text-[18px] font-semibold leading-[21.78px] text-center text-[#1D55FD] ${
        //     currentIndex < 10 ? "visible" : "invisible"
        //   } `}


        className="border-[1.3px] border-solid border-[#1D55FD] rounded-[6.4px]  py-[13px] w-1/2  font-Inter text-[11px] font-semibold leading-[13.3px] text-center text-[#1D55FD]"
          >
            Skip
          </button>

          {/* {currentIndex === 9 ? ( */}
          <button
            //   onClick={() => setDataBeforeLogin()}


            // GRAY BTN 
             className="border-[1.3px] border-solid bg-[#B8B8B8] rounded-[6.4px]  py-[13px] w-1/2  font-Inter text-[11px] font-semibold leading-[13.3px] text-center text-white"

          // gradient BTN  className="purple-btn shadow-[2.56px_3.85px_0px_0px_black] border-[1.3px] border-solid  rounded-[6.4px]  py-[13px] w-1/2  font-Inter text-[11px] font-semibold leading-[13.3px] text-center text-white"
          >
            Finish
          </button>
          {/* ) : (
            <button
            onClick={() => handleNext()}
            // disabled={selectedOption.trim() != "" ? false : true}
            className={`bg-gradient-to-r from-[#0043A6] via-[#BD00FF] to-pink-500 border-2 border-solid  rounded-[10px]  py-6 w-1/2   font-Inter text-[18px] font-semibold leading-[21.78px] text-center text-[#FFFFFF] `}
            >
            Next
            </button>
        )} */}
        </div>
        {/* {isQuizLoading && ( */}
        {/* <Popup bg="bg-transparent">
            <img
            className="w-10 h-10 animate-spin"
            src="/assets/images/loading.png"
            alt="Loading for quiz"
            srcSet=""
            />
        </Popup> */}
        {/* )} */}
      </div>
    </Layout>
  );
}

export default Quiz;
