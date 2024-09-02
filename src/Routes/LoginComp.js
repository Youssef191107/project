import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Navbar from "../Components/NavBarr/Navbar";
// import Footer from '../Components/Footer/Footer'
import Login from "../Components/Login/Login";
// import Form from '../Components/form/form'
import Main from "../Components/Main/Main";
import Ready from "../Components/Ready/Ready";
import Property from "../Components/Featured/Property";
import Section from "../Components/Section/Section";
import Slider from '../Components/Slider/Slider'
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
      <Slider/>
      <Subscribe />
      <Footer />
      {/* <Login/> */}
      {/* <Footer/>  */}

    </div>
  );
};

export default LoginComp;
