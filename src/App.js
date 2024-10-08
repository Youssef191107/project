import React, { Fragment, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomeComp from './Routes/HomeComp'
import ProductComp from './Routes/ProductComp'
import CartComp from './Routes/CartComp'
import ContactUsComp from './Routes/ContactUsComp'
import LoginComp from './Routes/LoginComp'
import Form from './Components/Form/form'
import { useDispatch, useSelector } from 'noval'
// import i18n from'./Components/i18n/i18n';
import LanguageSwitcher from './Components/LanguageSwitcher/LanguageSwitcher'
import './index.css'; 


const App = () => {
  // let [userData,setUserData]= useState(null);
  const {dispatch}= useDispatch();


  const ProtactedRoute = ({children}) => {
    const user = useSelector ("user")
    if (user) {
      // console.log(props)
      return children
      
    }else{
      return <Navigate to="/login"/>
    }
  }
 
  
  return (
    <div>
      {/* <LanguageSwitcher/> */}
      <Routes>
        <Route path='/' element={<ProtactedRoute><LoginComp/></ProtactedRoute>}/>
        <Route path='/login' element={<LoginComp/>}/>
        <Route path='/home' element={<ProtactedRoute><HomeComp/></ProtactedRoute>}/>
        <Route path='/product' element={<ProtactedRoute><ProductComp/></ProtactedRoute>}/>
        <Route path='/cart' element={<ProtactedRoute><CartComp/></ProtactedRoute>}/>
        <Route path='/contact' element={<ContactUsComp/>}/>
        <Route path="/form" element={<Form />} />

      </Routes>
    </div>
  )
}

export default App
