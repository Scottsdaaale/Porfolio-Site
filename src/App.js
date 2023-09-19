import React from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Music from "./components/Music"; 
import Sandbox from "./components/Sandbox"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";



function App() {
  return (
    <div className="App" style={{ justifyContent: "center" }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main className="main" />} />
          {/* <Route path="/music" element={<Music />} />  */}
          <Route path="/sandbox" element={<Sandbox />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
