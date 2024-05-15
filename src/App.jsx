import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import { BrowserRouter } from "react-router-dom";
import SplashScreen1 from "./components/SplashScreen1";
import SplashScreen2 from "./components/SplashScreen2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen1/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
