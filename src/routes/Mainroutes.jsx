import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/about" element={<LandingPage />} />
      <Route path="/skills" element={<LandingPage />} />
      <Route path="/project" element={<LandingPage />} />
      <Route path="/contact" element={<LandingPage />} />
    </Routes>
  );
};

export default Mainroutes;
