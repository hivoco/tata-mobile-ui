import { useEffect, useRef } from "react";

function SoundOnAnswer({ questionStatus }) {
  const soundRef = useRef();

  useEffect(() => {
    if (questionStatus !== "") {
      soundRef.current.play();
    } else {
      soundRef.current.pause();
    }
  }, [questionStatus]);

  return (
    <audio
      ref={soundRef}
      src={
        questionStatus !== ""
          ? questionStatus
            ? "/sounds/right_ans_tone.mp3"
            : "/sounds/wrong_ans_sound.wav"
          : ""
      }
    ></audio>
  );
}

export default SoundOnAnswer;
