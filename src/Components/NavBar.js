import React from 'react'
import logoNetFlix from '../Assets/Logonetflix.png';
import { AiOutlineGlobal } from "react-icons/ai";
const NavBar = () => {
    return (
        <>
            <div className="NavBar text-white flex lg:justify-around md:justify-around sm:justify-around justify-between items-center
         lg:py-5 md:py-5 py-5 px-3 lg:px-0">
                {/* Left */}
                <div className='logo'>
                    <img src={logoNetFlix} className="w-28 lg:w-40 md:w-44" alt='...' />
                </div>
                {/* Right */}
                <div className='Button flex items-center gap-1 lg:gap-3 md:gap-3 sm:gap-3'>
                    <div className="btn1  border-gray-700 border-solid border rounded-lg bg-[#111112] opacity-80 text-white relative">
                        <span className='absolute top-[6px] left-[3px]'><AiOutlineGlobal/></span>
                        <select className="w-[100%] px-5 py-1  rounded-lg bg-transparent  cursor-pointer">
                            <option className='bg-[#111112] opacity-80'>English</option>
                            <option className='bg-[#111112] opacity-80'>Hindi</option>
                        </select>
                    </div>
                    <div className='btn2'>
                        <button className='w-[100%] px-5 py-1 rounded-md bg-red-600 outline-none'>Sign In</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;


  