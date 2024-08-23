import { useState } from "react";
import "./App.css";
import Nav from "./components/Navbar";
import Main from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="container">
        <Nav />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
