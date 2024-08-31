import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Navbar from '../Components/NavBarr/Navbar'
import Footer from '../Components/Footer/Footer'
import Login from '../Components/Login/Login'
// import Form from '../Components/form/form'
import Joe from '../form'
import Main from '../Components/Main/Main'
import Ready from '../Components/Ready/Ready'
import Property from '../Components/Featured/Property'
import Testimonials from '../Components/Testimonials/Testimonials'
// import Subscribe from '../Components/Subscribe/Subscribe'
const LoginComp = () => {
  return (
    <div>
         <Navbar/>
         <Main/>
         <Ready/>
         <Property/>
         <Testimonials/>
         {/* <Subscribe/> */}
        {/* <Login/> */}
        {/* <Footer/>  */}
        {/* <Joe/> */}
      
    </div>
  )
}

export default LoginComp
