import { Navigate, Route, Routes } from "react-router-dom";
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
import RecorderQuiz from "./components/RecorderQuiz";
import PlateformWiseQuiz from "./components/PlateformWiseQuiz";
import ProtectedRoute from "./ProtectedRoute";

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

        <Route path="/login" element={<Login />} />

        <Route path="/quiz/play" element={<ProtectedRoute />}>
          <Route
            path=""
            element={
              <PlateformWiseQuiz setIsMusicAllowed={setIsMusicAllowed} />
            }
          />
        </Route>
        <Route path="/quiz/play/finish" element={<ProtectedRoute />}>
          <Route path="" element={<Thanks />} />
        </Route>
        <Route path="/quiz/get-your-final-score" element={<ProtectedRoute />}>
          <Route path="" element={<FinalScore />} />
        </Route>
        <Route path="/result/access-your-leader" element={<ProtectedRoute />}>
          <Route path="" element={<LeaderBoard />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
