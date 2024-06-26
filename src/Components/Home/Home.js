import React, { useEffect, useState } from 'react'
import homeStyle from './Home.module.css'
import { NavLink } from 'react-router-dom';

const Home = () => {
    const images = [<div className={`${homeStyle.cover} ${homeStyle.one}`}>
    <div className={homeStyle.home}>
        <p>NEW TRANDING</p>
        <h2>Sofa Collection</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
        <button>SHOP NOW</button>

    </div>
    </div>,
    <div className={`${homeStyle.cover} ${homeStyle.two}`}>
    <div className={homeStyle.home}>
        <p>Get up to 50% off Today Only!</p>
        <h2>Wooden Chair Collection</h2>
        
        <button>SHOP NOW</button>

    </div>
    </div>,
    <div className={`${homeStyle.cover} ${homeStyle.three}`}>
    <div className={homeStyle.home}>
        <p>Taking your Viewing Experience to Next Level</p>
        <h2>Living Room Collection</h2>
        <button>SHOP NOW</button>

    </div>
    </div>]
    
    const [cover,setCover]=useState(0);
    useEffect(()=>{
        setInterval(()=>{
            setCover((next)=>(next+1)%images.length)

        },9000)
    },[images.length])
    const cursor1=()=>{
        setCover((prev)=>(prev = 0)%images.length)
    }
    const cursor2=()=>{
        setCover((prev)=>(prev = 1)%images.length)
    }
    const cursor3=()=>{
        setCover((prev)=>(prev = 2)%images.length)
    };   
  return (
    <section className={homeStyle.page} >
        {images[cover]}
        <div className={homeStyle.cursor}>
            <NavLink onClick={cursor1}></NavLink>
            <NavLink onClick={cursor2}></NavLink>
            <NavLink onClick={cursor3}></NavLink>

            </div>      
    </section>
  )
}

export default Home
