import { useNavigate, useSearchParams } from "react-router-dom";
import useVoiceRecorder from "../utils/useVoiceRecorder";
import Layout from "../../Layout";
import axios from "../api/instance";

import {
  blobToBase64,
  debounce,
  micOffSound,
  micOnSound,
  openAI_STT,
} from "../utils/helperFunction";
import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import Timer from "./Timer";
import AudioTimer from "./AudioTimer";
import CorrectAnswer from "./CorrectAnswer";
import AudioPrompt from "./AudioPrompt";
import Popup from "./Popup";
import QuizLoading from "./QuizLoading";
import SoundOnAnswer from "./SoundOnAnswer";

function RecorderQuiz({ setIsMusicAllowed, platform }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang");
  const {
    startRecordingButtonRef,
    stopRecordingButtonRef,
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    mediaRecorder,
    InVisible,
  } = useVoiceRecorder();

  const [allQuestions, setAllQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [seconds, setSeconds] = useState(100);
  const abortControllerRef = useRef(null);

  const [isGivenAnswerCorrect, setIsGivenAnswerCorrect] = useState(false);
  const [correctResponceAnswer, setCorrectResponceAnswer] = useState("");
  const [isQuizQuestionLoading, setIsQuizQuestionLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [permissionToStartSound, setPermissionToStartSound] = useState(false);
  const [openSoundPopup, setOpenSoundPopup] = useState(true);
  const [audioTime, setAudioTime] = useState(20);
  const [micOnTime, setMicOnTime] = useState(0);
  const [questionStatus, setQuestionStatus] = useState("");

  let audioRef = useRef();
  const [userResponceArray, setUserResponceArray] = useState({
    uuid: sessionStorage.getItem("unique_id"),
    name: "",
    phone: "",
    quiz: [],
  });

  const getQuestion = debounce(async () => {
    setIsLoading(true);

    const responce = await axios.post(`/get_questions`, { lang: lang });
    setAllQuestions(responce?.data.questions);
    setAudioTime(Number(responce?.data?.questions[0]?.audio_time));
    setIsLoading(false);
    setOpenSoundPopup(true);
  }, 200);

  const handleOptionChange = async (event, id) => {// event is option here
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    stopRecording();
    if (audioRef.current) {
      audioRef.current.src = null;
    }

    setSelectedOption(event);
    const ans = await verifyAnswer(
      event,
      id,
      true,
      lang,
      allQuestions?.[currentIndex]?.options[0],
      allQuestions?.[currentIndex]?.options[1]
    );

    setIsGivenAnswerCorrect(ans?.is_correct);

    setCorrectResponceAnswer(ans.correct_answer);

    setUserResponceArray({
      ...userResponceArray,
      quiz: [
        ...userResponceArray.quiz,

        {
          question: allQuestions?.[currentIndex]?.question,
          givenAns: event,
          correctAns: ans.correct_answer,
          isCorrect: ans.is_correct,
          time: 20 - Number(seconds),
        },
      ],
    });
  };

  const [replyAudio, setReplyAudio] = useState("");
  const [correctOption, setCorrectOption] = useState("");

  const verifyAnswer = async (
    user_answer,
    question_id,
    onClick,
    lang,
    option_one,
    option_two
  ) => {
    if (!onClick) {
      // console.log('audio sent to openAi, will return text');
      user_answer = await openAI_STT(user_answer);
      // console.log('stt response' , user_answer);
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    const signal = abortControllerRef.current.signal;
    setIsQuizQuestionLoading(true);
    setCorrectOption('')
    const responce = await axios.post(
      `/verify_answer`,
      {
        user_answer,
        question_id,
        onClick,
        lang,
        option_one,
        option_two,
        platform,
      },
      { signal }
    );
    setIsQuizQuestionLoading(false);

    if (responce?.data?.is_correct == "true") {
      // rightAnswerSound();
      setQuestionStatus(true);
    } else {
      // wrongAnswerSound();
      setQuestionStatus(false);
    }

    setReplyAudio(responce?.data?.response_text);
    setCorrectOption(responce?.data?.correct_option);
    return responce?.data;
  };

  const toggleMic = () => {
    if (audioRef.current) {
      audioRef.current.src = null;
    }

    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleNext = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    stopRecording();
    setCorrectOption('')
    setSelectedOption("");
    setIsQuizQuestionLoading(false);
    setIsGivenAnswerCorrect(false);
    setCorrectResponceAnswer("");
    setSeconds(100);
    setCurrentIndex((prevIndex) => (prevIndex > 8 ? 9 : prevIndex + 1));
    if (currentIndex < 9) {
      setAudioTime(allQuestions?.[currentIndex + 1]?.audio_time);
    }
  };

  const audioTimerFunction = () => {
    if (audioRef.current) {
      audioRef.current.src = null;
    }
  };

  const handleRecordingComplete = async () => {
    if (recordingBlob) {
      verifyAnswer(
        recordingBlob,
        allQuestions?.[currentIndex]?.question_id,
        false,
        lang,
        allQuestions?.[currentIndex]?.options[0],
        allQuestions?.[currentIndex]?.options[1]
      )
        .then((ans) => {
          console.log(ans);
          let event = "";
          // console.log(typeof ans.is_correct, ans.is_correct);

          if (ans.is_correct === true) {
            if (
              ans.correct_answer === allQuestions?.[currentIndex]?.options[0]
            ) {
              setSelectedOption(allQuestions?.[currentIndex]?.options[0]);
              event = allQuestions?.[currentIndex]?.options[0];
            } else {
              setSelectedOption(allQuestions?.[currentIndex]?.options[1]);
              event = allQuestions?.[currentIndex]?.options[1];
            }
          } 

          else {
            if (
              ans.correct_answer === allQuestions?.[currentIndex]?.options[0]
            ) {
              setSelectedOption(allQuestions?.[currentIndex]?.options[1]);
              event = allQuestions?.[currentIndex]?.options[1];
            } else {
              setSelectedOption(allQuestions?.[currentIndex]?.options[0]);
              event = allQuestions?.[currentIndex]?.options[0];
            }
          }

          setIsGivenAnswerCorrect(ans?.is_correct);
          setCorrectResponceAnswer(ans.correct_answer);
          setUserResponceArray({
            ...userResponceArray,
            quiz: [
              ...userResponceArray.quiz,

              {
                question: allQuestions?.[currentIndex]?.question,
                givenAns: event,
                correctAns: ans.correct_answer,
                isCorrect: ans.is_correct,
                time: 20 - Number(seconds),
              },
            ],
          });
        })
        .catch((err) => console.log(err));
    }
  };

  const setDataBeforeLogin = async (userResponceArray) => {
    await axios.post(`/before_login_quiz_data`, {
      uuid: userResponceArray.uuid,
      name: userResponceArray.name,
      phone: userResponceArray.phone,
      quiz: userResponceArray.quiz,
    });
  };

  const viewScore = async () => {
    await setDataBeforeLogin(userResponceArray);
    const responce = await axios(
      `/your_score?uuid=${sessionStorage.getItem("unique_id")}`
    );

    setIsMusicAllowed(true);

    navigate(
      `/quiz/get-your-final-score?score=${responce.data.score}&time=${responce.data.time}&correct=${responce.data.totalCorrectAns}`
    );
  };

  useEffect(() => {
    if (selectedOption == "") {
      stopRecording();
      handleRecordingComplete();
    }
  }, [recordingBlob]);

  useEffect(() => {
    if (recordingTime > 4) {
      stopRecording();
    }
  }, [recordingTime]);

  useEffect(() => {
    const res = getQuestion();
    setAllQuestions(res);
  }, []);
  return (
    <Layout bg={"/images/ss3.png"}>
      {isLoading ? (
        <QuizLoading />
      ) : (
        <div className="mt-[22.81px] flex justify-center items-center">
          <div className="modal-css mt-[22.81px]  flex flex-col gap-6 px-6 py-3 rounded-[14px] w-[19.5rem]  my-0 mx-auto  ">
            <div className="relative flex flex-col items-center ">
              <div className="  absolute  rounded-full h-16 w-16   py-[20.77px] px-[9px] border border-solid border-[#1D55FD4D] bg-white shadow-[0px_2.55px_8.93px_0px_#0000001F] flex justify-center items-center">
                {!openSoundPopup && (
                  <Timer
                    seconds={seconds}
                    setSeconds={setSeconds}
                    onTimeout={handleNext}
                    index={currentIndex}
                    isQuizQuestionLoading={isQuizQuestionLoading}
                    autoSubmit={viewScore}
                  />
                )}
              </div>

              <div className=" mt-[30px]  pt-10     pb-[15.31px] px-[15.31px] rounded-[8.83px]  bg-white shadow-[0px_4px_14px_0px_0000000D]">
                <div className="   flex flex-col gap-[8.93px] ">
                  <p className="font-Inter font-bold text-[#1D55FD] text-[10px] leading-[12px] text-center">
                    Question {currentIndex + 1}/10
                  </p>
                  <p className="font-Inter font-semibold text-[#252042] text-[11px]  leading-[13.31px]  text-center">
                    {allQuestions?.[currentIndex]?.question}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 ">
              <div
                className={`flex flex-col  gap-2 justify-center items-center `}
              >
                <div className={` ${isRecording && "animate-scale"} gap-2`}>
                  <img
                    style={{
                      opacity: selectedOption.trim() != "" ? 0.5 : 1,
                      pointerEvents:
                        selectedOption.trim() != "" ? "none" : "auto",
                    }}
                    className="h-[122px]"
                    onClick={() => toggleMic()}
                    src={isRecording ? "/svgs/wave.svg" : "/svgs/mic.svg"}
                    alt="mic-btn"
                  />

                  <p className="text-[10.21px] font-semibold leading-[12.35px] text-center">
                    Tap the mic to speak
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[7.66px] text-[#2B262D]">
              <div
                onClick={() => {
                  handleOptionChange(
                    allQuestions?.[currentIndex]?.options[0],
                    allQuestions?.[currentIndex]?.question_id
                  );
                }}
                style={{
                  pointerEvents: selectedOption != "" ? "none" : "auto",
                }}
                className={`${
                  correctOption==="option_one"?"border-[#00AA07]":(correctOption==="option_two"?"border-[#FA3939]": "border-[#ADD1FF]")
                } 
                py-[11px] px-[10.21px]  flex justify-between rounded-[7.66px] border-[1.28px]`}
                // className="flex justify-between items-center rounded-[7.7px] px-[10.5px] border border-[#ADD1FF]"
              >
                <label className="font-Inter text-[12.76px] font-medium leading-[15.44px] text-left w-full flex justify-between">
                  {allQuestions
                    ? allQuestions?.[currentIndex]?.options[0]
                    : "option 1"}

                  <input
                    className={`border-[0.64px] border-solid  border-[#00000080] bg-[#F5F5F5] w-[14.04px]`}
                    type="radio"
                    value={allQuestions?.[currentIndex]?.options[0]}
                    checked={
                      // correctOption==='option_one'
                      selectedOption ===
                      allQuestions?.[currentIndex]?.options[0]
                    }
                    name="options"
                  />
                </label>
              </div>

              <div
                onClick={() => {
                  handleOptionChange(
                    allQuestions?.[currentIndex]?.options[1],
                    allQuestions?.[currentIndex]?.question_id
                  );
                }}
                style={{
                  pointerEvents: selectedOption != "" ? "none" : "auto",
                }}
                className={` ${
                  correctOption==="option_two"?"border-[#00AA07]":(correctOption==="option_one"?"border-[#FA3939]": "border-[#ADD1FF]")
                } py-[11px] px-[10.21px]  flex justify-between rounded-[7.66px] border-[1.28px] `}
              >
                <label className="font-Inter text-[12.76px] font-medium leading-[15.44px] text-left w-full flex justify-between">
                  {allQuestions
                    ? allQuestions?.[currentIndex]?.options[1]
                    : "option 2"}
                  <input
                    className={`border-[0.64px] border-solid  border-[#00000080] bg-[#F5F5F5] w-[14.04px]`}
                    type="radio"
                    value={allQuestions?.[currentIndex]?.options[1]}
                    checked={
                      selectedOption ===
                      allQuestions?.[currentIndex]?.options[1]
                    }
                    name="options"
                    readOnly={true}
                  />
                </label>
              </div>
            </div>

            <div className=" flex gap-[9.93px] items-center">
              <button
                onClick={() => !isRecording && handleNext()}
                className={`    ${
                  !isRecording
                    ? "border-[#1D55FD] text-[#1D55FD]"
                    : "bg-[#B8B8B8] text-white"
                }   border-[1.28px]  border-solid  rounded-[6.41px]  py-[13.95px] w-1/2  font-Inter text-[10.96px] font-semibold leading-[13.26px] text-center ${
                  currentIndex < 9 ? "visible" : "invisible"
                } `}
              >
                Skip
              </button>

              {currentIndex === 9 ? (
                <button
                  onClick={() => {
                    viewScore();
                    setQuestionStatus("");
                  }}
                  disabled={selectedOption.trim() != "" ? false : true}
                  className={`${
                    selectedOption.trim() !== ""
                      ? "purple-btn  shadow-[2.56px_3.85px_0px_0px_black]"
                      : "bg-[#B8B8B8]"
                  }       rounded-[6.4px]  py-[13px] w-1/2  font-Inter text-[11px] font-semibold leading-[13.3px] text-center text-white`}
                >
                  Finish
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleNext();
                    setQuestionStatus("");
                  }}
                  disabled={selectedOption.trim() !== "" ? false : true}
                  className={`${
                    selectedOption.trim() !== ""
                      ? "purple-btn  shadow-[2.56px_3.85px_0px_0px_black]"
                      : "bg-[#B8B8B8]"
                  }   border-[1.28px] border-solid   rounded-[6.41px]  py-[13.95px] w-1/2  font-Inter text-[10.96px] font-semibold leading-[13.26px] text-center text-white `}
                >
                  Confirm
                </button>
              )}
            </div>
          </div>

          {isQuizQuestionLoading && (
            <Popup bg="bg-transparent">
              <img
                className="w-16 h-16 "
                src="/gifs/loading.gif"
                alt="Loading for quiz"
                srcSet=""
              />
            </Popup>
          )}
          {openSoundPopup && (
            <Popup bg="bg-transparent">
              <AudioPrompt
                setOpenSoundPopup={setOpenSoundPopup}
                setPermissionToStartSound={setPermissionToStartSound}
              />
            </Popup>
          )}

          {permissionToStartSound ? (
            <div className="hidden ">
              <audio
                ref={audioRef}
                id="audioid"
                controls={true}
                autoPlay={true}
                loop={false}
                src={`data:audio/wav;base64,${allQuestions?.[currentIndex]?.audio}`}
                type="audio/mpeg"
              ></audio>
            </div>
          ) : null}

          <SoundOnAnswer
            questionStatus={questionStatus}
            replyAudio={replyAudio}
            setQuestionStatus={setQuestionStatus}
            setReplyAudio={setReplyAudio}
          />

          {permissionToStartSound && (
            <AudioTimer
              audioTime={audioTime}
              setAudioTime={setAudioTime}
              onTimeout={audioTimerFunction}
              isAnswered={isRecording}
            />
          )}
          {questionStatus && (
            <Popup bg="bg-transparent">
              <CorrectAnswer />
            </Popup>
          )}
        </div>
      )}
      {InVisible}
    </Layout>
  );
}

export default RecorderQuiz;
