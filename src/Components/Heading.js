import React from 'react';
import netflixImage from '../Assets/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_small.jpg';
import NavBar from './NavBar';
import Entertainment from './Entertainment';
import Download from './Download';
import Watch from './Watch';
import Profiles from './Profiles';
import Faq from './Faq';
import Footer from './Footer';

const Heading = () => {
  
  return (
    <>
    <div className="lg:h-[auto] md:h[auto] h-[auto] pb-10"
     style={{background:`linear-gradient(85deg, black, transparent), url(${netflixImage})`,backgroundSize:"cover"}}>
      <NavBar/>
       <div className='lg:mt-[180px] mt-[65px]  flex lg:justify-center lg:items-center flex-col'>
         <div className='text-center lg:space-y-4 space-y-5 lg:mb-0 mb-5'>
            <span className='text-white lg:text-5xl text-3xl font-sans font-bold block'>Unlimited movies, TV shows, and more</span>
            <span className='text-white lg:text-2xl text-lg font-sans font-semibold block'>Watch anywhere. Cancel anytime.</span>
            <span className='text-white lg:text-lg  text-[17px] font-sans font-semibold block px-10 lg:px-0'>Ready to watch? Enter your email or mobile number to create or restart your membership.</span>
         </div>
         <div className='lg:mt-[3rem] flex lg:gap-3 lg:items-center font-sans font-bold flex-col lg:flex-row gap-y-9 lg:gap-y-0'>
            <input type='text' className='w-100% lg:px-[5rem] py-3 bg-[#333] opacity-80 border-white border-solid border 
            lg:rounded-sm rounded-lg outline-none cursor-pointer text-white m-[0px_auto] px-[2rem]' placeholder='Enter or mobile Number'/>
            <button className='w-30 lg:px-[3rem] py-3 bg-red-600 text-white lg:rounded-sm  
            text-[16px] hover:bg-red-700 cursor-pointer m-[0px_auto] px-[2rem] rounded-lg'>Get Started</button>
         </div>   
      </div>
     
    </div>
     <hr className='hr_line'/>
     <Entertainment/>
     <Download/>
     <Watch/>
     <Profiles/>
     <Faq/>
     <Footer/>
     </>
  );
};

export default Heading;
