import { useEffect, useState } from "react";

const TextToSpeech = ({ setQuestionStatus, replyAudio, setReplyAudio }) => {
  const [audioUrl, setAudioUrl] = useState("");
  const API_KEY = "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";

  const handleTextToSpeech = async () => {
    console.log("handleTextToSpeech called");
    setAudioUrl("");

    const data = {
      model: "tts-1",
      input: replyAudio,
      voice: "echo",
    };

    try {
      const response = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: {
          Accept: "audio/mpeg",
          "Content-Type": "application/json",
          Authorization: "Bearer " + API_KEY,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const arrayBuffer = await response.arrayBuffer();
        const blob = new Blob([arrayBuffer], { type: "audio/mpeg" });
        const url = window.URL.createObjectURL(blob);
        setAudioUrl(url);
      } else {
        console.error("Error in response:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (replyAudio) {
      handleTextToSpeech();
    }
  }, [replyAudio]);

  //called when these two var changes

  return (
    <>
      {audioUrl && (
        <audio
          autoPlay
          onEnded={() => {
            setQuestionStatus("");
            setReplyAudio("");
          }}
        >
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </>
  );
};

export default TextToSpeech;
