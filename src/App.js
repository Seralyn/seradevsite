import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Knowledgebase from "./components/Knowledgebase";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/knowledgebase" element={<Knowledgebase />} />
        </Routes>
      </Router>
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
