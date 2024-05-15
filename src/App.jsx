import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import { BrowserRouter } from "react-router-dom";
import SplashScreen1 from "./components/SplashScreen1";
import SplashScreen2 from "./components/SplashScreen2";
import Home from "./components/Home";
import SplashScreen3 from "./components/SplashScreen3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
