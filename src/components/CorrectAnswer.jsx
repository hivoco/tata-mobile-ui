function CorrectAnswer() {
  return (
      <div className=" modal-css w-10/12  h-auto my-0 mx-auto rounded-[14px] flex flex-col  gap-3 items-center py-7 px-[51px]">
        <div className="flex">
          <img className="w-24" src="gifs/confetti.gif" alt="confetti" />
          <img
            className="w-24 -rotate-90"
            src="gifs/confetti.gif"
            alt="confetti"
          />
        </div>

        <div className="flex flex-col gap-[2px]">
          <h1 className="font-DarkerGrotesque text-[28px] font-bold leading-[38px] text-center text-[#181818]">
            Wohoo!!
          </h1>

          <h2 className="font-Inter font-light text-lg leading-[22px] text-center">
            Your answer is correct.
          </h2>
        </div>
      </div>
  );
}

export default CorrectAnswer;
