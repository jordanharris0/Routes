import Red from "./Red";
import Blue from "./Blue";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Purple from "./Purple";

export default function Main() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/purple" element={<Purple />} />
      </Routes>
    </div>
  );
}
