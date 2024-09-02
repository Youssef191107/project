import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Navbar from "../Components/NavBarr/Navbar";
// import Footer from '../Components/Footer/Footer'
import Login from "../Components/Login/Login";
// import Form from '../Components/form/form'
// import Joe from "../form";
import Main from "../Components/Main/Main";
import Ready from "../Components/Ready/Ready";
import Property from "../Components/Featured/Property";
import Section from "../Components/Section/Section";
import AboutUs from '../Components/AboutUs/About'
import Subscribe from "../Components/Subscribe/Subscribe";
import Footer from "../Components/Foooter/Foooter";
const LoginComp = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Ready />
      <Property />
      <Section/>
      <AboutUs/>
      <Subscribe />
      <Footer />
      {/* <Login/> */}
      {/* <Footer/>  */}
      {/* <Joe/> */}
    </div>
  );
};

export default LoginComp;
