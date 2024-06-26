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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz />} />
        
        {/* <Route path="/language-select" element={<LanguageSelection />} />
        <Route path="/quiz" element={<QuizLoading />} /> */}


        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
