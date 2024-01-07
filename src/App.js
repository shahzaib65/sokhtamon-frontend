import React from 'react';
import NavBar from "../src/Navbar/navBar"
import Contact from './ContactUs/Contact';
import PostJob from './Jobs/PostJob';
import Service from "./Services"
import ProductsPage from './ProductsPage';
import DetailPage from './DetailPage';
import Login from './Login';
import Main from './MainPage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AboutUs from './AboutUs';
function App() {
  return (
    <div className="App">
    <AboutUs/>
    {/* <Router>
    <NavBar/>
   
      <Routes>
      <Route exact path="/" element={<Main/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path='/detail' element={<DetailPage/>}/>
      <Route exact path='/product' element={<ProductsPage/>}/>
      <Route exact path='/service' element={<Service/>}/>
      <Route exact path='/post' element={<PostJob/>}/>
      <Route exact path='/about' element={<AboutUs/>}/>
      <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </Router> */}
    
    </div>
  );
}

export default App;
