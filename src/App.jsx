import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import { BrowserRouter } from "react-router-dom";
import SplashScreen1 from "./components/SplashScreen1";
import SplashScreen2 from "./components/SplashScreen2";
import Home from "./components/Home";
import SplashScreen3 from "./components/SplashScreen3";
import SplashScreen4 from "./components/SplashScreen4";
import LanguageSelection from "./components/LanguageSelection";
import QuizLoading from "./components/QuizLoading";
import Quiz from "./components/Quiz";
import BackgroundMusic from "../src/utils/BackroundMusic";
import FinalScore from "./components/FinalScore";
import Thanks from "./components/Thanks";
import Login from "./components/Login";
import { useState } from "react";
import LeaderBoard from "./components/LeaderBoard";

function App() {
  const [isMusicAllowed, setIsMusicAllowed] = useState(false);
  return (
    <BrowserRouter>
      {isMusicAllowed && (
        <BackgroundMusic
          isMusicAllowed={isMusicAllowed}
          setIsMusicAllowed={setIsMusicAllowed}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={<Home setIsMusicAllowed={setIsMusicAllowed} />}
        />

        <Route path="/select-language" element={<LanguageSelection />} />
        {/* <Route path="/quiz" element={<QuizLoading />} /> */}
        <Route
          path="/quiz/play"
          element={<Quiz setIsMusicAllowed={setIsMusicAllowed} />}
        />
        <Route path="/quiz/play/finish" element={<Thanks />} />
        <Route path="/quiz/get-your-final-score" element={<FinalScore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/result/access-your-leader" element={<LeaderBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
