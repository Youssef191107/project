// import React, { useEffect, useState } from 'react'
// import homeStyle from './Home.module.css'
// import { NavLink } from 'react-router-dom';

// const Home = () => {
//     const images = [<div className={`${homeStyle.cover} ${homeStyle.one}`}>
//     <div className={homeStyle.home}>
//         <p>NEW TRANDING</p>
//         <h2>Sofa Collection</h2>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
//         <button>SHOP NOW</button>

//     </div>
//     </div>,
//     <div className={`${homeStyle.cover} ${homeStyle.two}`}>
//     <div className={homeStyle.home}>
//         <p>Get up to 50% off Today Only!</p>
//         <h2>Wooden Chair Collection</h2>
        
//         <button>SHOP NOW</button>

//     </div>
//     </div>,
//     <div className={`${homeStyle.cover} ${homeStyle.three}`}>
//     <div className={homeStyle.home}>
//         <p>Taking your Viewing Experience to Next Level</p>
//         <h2>Living Room Collection</h2>
//         <button>SHOP NOW</button>

//     </div>
//     </div>]
    
//     const [cover,setCover]=useState(0);
//     useEffect(()=>{
//         setInterval(()=>{
//             setCover((next)=>(next+1)%images.length)

//         },9000)
//     },[images.length])
//     const cursor1=()=>{
//         setCover((prev)=>(prev = 0)%images.length)
//     }
//     const cursor2=()=>{
//         setCover((prev)=>(prev = 1)%images.length)
//     }
//     const cursor3=()=>{
//         setCover((prev)=>(prev = 2)%images.length)
//     };   
//   return (
//     <section className={homeStyle.page} >
//         {images[cover]}
//         <div className={homeStyle.cursor}>
//             <NavLink onClick={cursor1}></NavLink>
//             <NavLink onClick={cursor2}></NavLink>
//             <NavLink onClick={cursor3}></NavLink>

//             </div>      
//     </section>
//   )
// }

// export default Home
import React, { useState } from 'react';
import img1 from '../../images/banner7.jpg';
import img2 from '../../images/banner8.jpg';
import img3 from '../../images/banner9.jpg';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const headings = ["Heading 1", "Heading 2", "Heading 3"];
  const paragraphs = ["Paragraph 1", "Paragraph 2", "Paragraph 3"];
  const images = [img1, img2, img3];

  const buttonStyles = [
    "mt-4 px-4 py-2 bg-red-500 text-white rounded-full",
    "mt-4 px-4 py-2 bg-green-500 text-white rounded-full",
    "mt-4 px-4 py-2 bg-yellow-500 text-black rounded-full"
  ];

  const goToPreviousImage = () => {
    if (headings.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? headings.length - 1 : prevIndex - 1));
    }
  };

  const goToNextImage = () => {
    if (headings.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex === headings.length - 1 ? 0 : prevIndex + 1));
    }
  };

  if (!headings.length || !paragraphs.length || !images.length) {
    return <div>Error: Missing data</div>;
  }

  return (
    <section className="relative w-full h-screen">
      <div className="relative w-full h-full">
        <img src={images[currentImageIndex]} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            {currentImageIndex === 1 ? (
              <>
                <h2 className="text-white text-2xl mt-4">{headings[currentImageIndex]}</h2>
                <p className="text-white mt-2">This is the first paragraph for the second image.</p>
                <p className="text-white mt-2">This is the second paragraph for the second image.</p>
              </>
            ) : (
              <>
                <h2 className="text-white text-2xl mt-4">{headings[currentImageIndex]}</h2>
                <p className="text-white mt-2">{paragraphs[currentImageIndex]}</p>
              </>
            )}
            <button className={buttonStyles[currentImageIndex]}>Action Button</button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 mb-4">
            <button onClick={goToPreviousImage} className="px-4 py-2 bg-blue-500 text-white rounded-full">Previous</button>
            <button onClick={goToNextImage} className="px-4 py-2 bg-blue-500 text-white rounded-full">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;