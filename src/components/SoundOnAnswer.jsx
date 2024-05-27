import { useEffect, useRef } from "react";

function SoundOnAnswer({ questionStatus, setQuestionStatus }) {
  const soundRef = useRef();

  useEffect(() => {
    if (questionStatus !== "") {
      soundRef.current.play();
    } 
    else {
      soundRef.current.pause();
    }
  }, [questionStatus]);

  return (
    <audio
      ref={soundRef}
      onEnded={() => setQuestionStatus("")}
      src={
        questionStatus !== ""
          ? questionStatus
            ? "/sounds/right_ans_tone.mp3"
            : "/sounds/wrong_ans_sound.mp3"
          : ""
      }
    ></audio>
  );
}

export default SoundOnAnswer;
