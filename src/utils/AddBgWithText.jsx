function starBgWithText({ animation }) {
  return (
    <div
      className={`${
        animation && ""
      } relative h-[305px]  bg-[url('/svgs/star.svg')] bg-auto bg-center bg-no-repeat flex flex-col justify-center items-center`}
    >
      <div
        className={`transition-all delay-150 duration-300 ease-in-out absolute flex flex-col justify-center items-center ${
          animation ? "-mt-80 -mr-[1000px]" : "-mt-0 -mr0"
        } `}
      >
        <img className="w-48 " src="/images/Play.png" alt="play" />
        <img className="w-20 -mt-8 -mb-7" src="/images/&.png" alt="play" />
      </div>
      <img
        className={`transition-all delay-150 duration-300 ease-in-out w-80 absolute mt-56 ${
          animation ? "-ml-[1000px] -mb-80 " : "-ml-0 -mb-0 opacity-100"
        }`}
        src="/images/Win Quiz.png"
        alt="play"
      />
    </div>
  );
}

export default starBgWithText;
