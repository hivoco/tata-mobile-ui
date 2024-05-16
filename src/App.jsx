import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import { BrowserRouter } from "react-router-dom";
import SplashScreen1 from "./components/SplashScreen1";
import SplashScreen2 from "./components/SplashScreen2";
import Home from "./components/Home";
import SplashScreen3 from "./components/SplashScreen3";
import SplashScreen4 from "./components/SplashScreen4";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/language-select" element={<LanguageSelection />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
