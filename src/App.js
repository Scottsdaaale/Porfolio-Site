import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Developer/Main";
import Sandbox from "./components/Sandbox/Sandbox";
import BlogPost from "./components/Blog/BlogPost"; // Import BlogPostDetail component
import BlogList from "./components/Blog/BlogList";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main className="main" />} />
          <Route path="/sandbox" element={<Sandbox />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/posts/:id" element={<BlogPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
