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
import Verify from "./PhoneLogin/Verify"
import Otp from "./otpVerification"
import Apply from "./ServiceJob"
import Subscription from './Subscription';
import Profile from "./Profile"
import Toast from "../src/components/Toast";
import Send from "./PhoneLogin/Send"
import JobDetails from "./ServiceDetails"


function App() {
  return (
    <div className="App">
    

    <Router>
    <NavBar/>
   
      <Routes>
      <Route exact path="/" element={<Main/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path='/detail/:id' element={<DetailPage/>}/>
      <Route exact path='/product' element={<ProductsPage/>}/>
      <Route exact path='/service' element={<Service/>}/>
      <Route exact path='/post' element={<PostJob/>}/>
      <Route exact path='/about' element={<AboutUs/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
      <Route exact path = "/privacy" element={<Privacy/>}/>
      <Route exact path='/tos' element={<Tos/>}/>
      <Route exact path = "/send" element={<Send/>}/>
      <Route exact path='/verify' element={<Verify/>}/>
      <Route exact path='/otp' element={<Otp/>}/>
      <Route exact path='/job' element={<Apply/>}/>
      <Route exact path='/subscription/:postId' element={<Subscription/>}/>
      <Route exact path="/job/:id" element={<JobDetails/>}/>
     
      </Routes>
      <Footer/>
    </Router>
  <Toast/>
    </div>
  );
}

export default App;
