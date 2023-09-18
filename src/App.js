import React from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Music from "./components/Music"; // Import the Music component (you need to create this component)

function App() {
  return (
    <div className="App" style={{ justifyContent: "center" }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main className="main" />} />
          {/* <Route path="/music" element={<Music />} />  */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
