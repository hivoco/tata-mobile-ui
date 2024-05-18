function AudioPrompt({ setOpenSoundPopup, setPermissionToStartSound }) {
  return (
    <div
      className="w-72  modal-css py-4 px-6 flex flex-col gap-9 items-center rounded-xl  shadow-[0px_8px_16px_-8px_#0000004D]  shadow-[0px_13px_27px_-5px_#32325D40
]"
    >
      <div className="flex flex-col items-center gap-[18px] ">
        <img className="w-24" src="/gifs/alexa.gif" alt="alexa" />

        <p className="font-Inter font-semibold text-lg leading-[24px] tracking-[-0.25px] text-center text-[#222124]">
          Would you like to listen to the questions?
        </p>
      </div>

      <div className="flex gap-3 ">
        <button
          onClick={() => {
            setPermissionToStartSound(false);
            setOpenSoundPopup(false);
          }}
          className="text-[#1D55FD] text-xs font-semibold leading-[15px] text-center  py-[14px] px-[45px] rounded-[6.4px] border border-solid border-[#1D55FD]"
        >
          NO
        </button>
        <button
          onClick={() => {
            setPermissionToStartSound(true);
            setOpenSoundPopup(false);
          }}
          className="purple-btn  text-xs font-semibold leading-[15px] text-center  py-[14px] px-[45px] rounded-[6.4px] shadow-[2.5px_3.9px_0px_0px_black]"
        >
          YES
        </button>
      </div>
    </div>
  );
}

export default AudioPrompt;
