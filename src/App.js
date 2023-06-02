// import Layout from "./Components/Layout";
import MainIcric from "./Components/Main";
import HomeAbout from "./Components/HomeAbout";
import ContactUs from "./Components/HomeContact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScoreCard from "./Pages/ScoreCard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainIcric />} />
          <Route path="/about" element={<HomeAbout />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/scorecard" element={<ScoreCard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
