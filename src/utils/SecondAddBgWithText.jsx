function SecondAddBgWithText({ animation }) {
  return (
    <div
      className={`  h-[305px]  bg-[url('/svgs/star.svg')] bg-auto bg-center bg-no-repeat flex flex-col justify-center items-center`}
    >
      <div
        className={`transition-all delay-150 duration-300 ease-in-out absolute flex flex-col justify-center items-center ${
          animation ? "-mt-0 -mr-0" : " -mt-80 -mr-[1000px]"
        } `}
      >
        <img className="w-48 " src="/images/Play.png" alt="play" />
        <img className="w-20 -mt-8 -mb-7" src="/images/&.png" alt="play" />
      </div>
      <img
        className={`transition-all delay-150 duration-300 ease-in-out w-80 absolute mt-56 ${
          animation ? " -ml-0 -mb-0 " : " -ml-[1000px] -mb-80"
        }`}
        src="/images/Win Quiz.png"
        alt="play"
      />
    </div>
  );
}

export default SecondAddBgWithText;
