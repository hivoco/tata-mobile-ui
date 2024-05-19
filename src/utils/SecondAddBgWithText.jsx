function SecondAddBgWithText({ animation }) {
  return (
    <div
      className={` relative w-[312px] h-[305px] bg-[url('svgs/star.svg')]      bg-auto  bg-center  bg-no-repeat flex flex-col justify-center items-center`}
    >
      <img
        className={`absolute z-20 w-48 top-14   -mt-5  transition-all delay-[100ms] duration-300 ease-in-out   ${
          animation ? " mr-0  -mt-9" : " -mr-[62rem] -mt-[40rem]"
        }  `}
        src="/images/Play.png"
        alt="play"
      />

      <img
        className={`absolute z-10 w-20 top-[116px]    transition-all delay-[100ms] duration-300 ease-in-out   ${
          animation ? " mr-0  -mt-9" : " -mr-[62rem] -mt-[40rem]"
        } `}
        src="/images/&.png"
        alt="play"
      />

      <img
        className={`relative top-12  transition-all delay-150 duration-300 ease-in-out w-80  -mt-6  ${
          animation ? " ml-0 mb-0 " : " -ml-[63rem] -mb-[80rem]"
        }`}
        src="/images/Win Quiz.png"
        alt="play"
      />
    </div>
  );
}

export default SecondAddBgWithText;
