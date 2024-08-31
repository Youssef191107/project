import React from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
return (
    <div>
            <header className='w-full h-[46px] bg-transparent  mt-10  flex justify-center items-center mx-auto  '>
                    <nav className='w-[90%] bg-transparent justify-between items-center '>
                            <div className=' flex gap-3 justify-center items-center'>
                                    <img src={logo}></img>
                                    <p className='text-base font-bold #1B1C57' style={{ color: '#1B1C57' }}>Hunter</p>

                            </div>
                            <div className='flex items-center gap-5'>
                                    <Link className='no-underline bg-transparent text-white rounded-[32px] border p-2 px-4' >About Us</Link>
                                    <Link className='no-underline bg-transparent text-white rounded-[32px] border p-2 px-4' >Article</Link>
                                    <Link className='no-underline bg-transparent text-white rounded-[32px] border p-2 px-4 '>Property</Link>
                                    <div className='ml-4'>
                                            <button className='rounded-[32px] p-3 px-4' style={{ backgroundColor: '#D1FAE5', color:'#047857' }}D1FAE5>Sign Up!</button>
                                    </div>
                            </div>



                    </nav>

            </header>
        
    </div>
)
}

export default Navbar
