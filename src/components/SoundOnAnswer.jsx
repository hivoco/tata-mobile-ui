// import { useEffect, useRef } from "react";
import { useState } from "react";
import TextToSpeech from "./TextToSpeech";

function SoundOnAnswer({
  questionStatus,
  setQuestionStatus,
  replyAudio,
  setReplyAudio,
}) {


  // const soundRef = useRef();

  // useEffect(() => {
  //   if (questionStatus !== "" && replyAudio) {
  //     soundRef.current.play();
  //   } else {
  //     soundRef.current.pause();
  //   }
  // }, [questionStatus]);

  return (
    // <audio
    //   ref={soundRef}
    //   onEnded={() => setQuestionStatus("")}
    //   // src={
    //   //   questionStatus !== ""
    //   // ? questionStatus
    //   //   ? "/sounds/right_ans_tone.mp3"
    //   //       : "/sounds/wrong_ans_sound.mp3"
    //   //     : ""
    //   // }
    //   type="audio/wav"
    //   src={`data:audio/wav;base64,${replyAudio}`}
    // ></audio>

    <>
      {questionStatus !== "" && (
        <TextToSpeech
          setQuestionStatus={setQuestionStatus}
          replyAudio={replyAudio}
          setReplyAudio={setReplyAudio}
        />
      )}
    </>
  );
}

export default SoundOnAnswer;
