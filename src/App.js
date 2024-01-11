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
import Footer from './Footer';
import Privacy from "./Policy"
import Tos from "./TOS"
import Mobile from "./PhoneLogin"
import Otp from "./otpVerification"
import Apply from "./ServiceJob"

function App() {
  return (
    <div className="App">
    

    <Router>
    <NavBar/>
   
      <Routes>
      <Route exact path="/" element={<Main/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path='/detail/:id' element={<DetailPage/>}/>
      <Route exact path='/product' element={<ProductsPage/>}/>
      <Route exact path='/service' element={<Service/>}/>
      <Route exact path='/post' element={<PostJob/>}/>
      <Route exact path='/about' element={<AboutUs/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path = "/privacy" element={<Privacy/>}/>
      <Route exact path='/tos' element={<Tos/>}/>
      <Route exact path = "/mobile" element={<Mobile/>}/>
      <Route exact path='/otp' element={<Otp/>}/>
      <Route exact path='/job' element={<Apply/>}/>
      </Routes>
      <Footer/>
    </Router>
  
    </div>
  );
}

export default App;
