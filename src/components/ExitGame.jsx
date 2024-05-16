function ExitGame() {
  return (
    <div className="modal-css flex flex-col gap-6 py-4 px-6 w-5/6 my-0 mx-auto  items-center">
      <div className="flex flex-col gap-3 items-center ">
        <img className="w-24" src="gifs/exit.gif" alt="exit" />

        <div className="flex flex-col gap-2 items-center">
          <h1 className="font-DarkerGrotesque text-[28px] font-bold leading-[24px] tracking-[-0.25px]  text-[#222124]">
            Exit Game
          </h1>
          <h2 className="font-Inter text-[12px] font-normal leading-[16px] ">
            Are you sure you want to exit the game? <br /> Exiting now will
            result in loss of progress.
          </h2>
        </div>
      </div>

      <div className="text-xs font-Inter flex gap-3 items-center">

        <button className="outlined-btn">Skip</button>
        <button className="purple-btn px-[52px] py-[14px] rounded-[6.41px] shadow-[ 2.56px_3.85px_0px_0px_black] ">Exit</button>
      </div>
    </div>
  );
}

export default ExitGame;
