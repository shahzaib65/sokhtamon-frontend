import React from 'react';
import NavBar from "../src/Navbar/navBar"
import Footer from "../src/Footer/footer"
import Home from "../src/Home/home"
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
    <NavBar/>
   
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
