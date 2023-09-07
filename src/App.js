import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div className="App">
      <Container className="">
      <Router>
        <Header/>
        <Main className="main" />
      </Router>
      </Container>
    </div>
  );
}

export default App;
