import React from 'react'
import profileImage from '../Assets/AAAABVgKoWCAejBWO2Dxg4NyMHlC3OdKWTTdvZshvYQizpH-VvlWFbMUjVkidAc2fX5rPOS1Cu2hSJOa8cOcngrDRR5ZmZkdEu7cg0Ay.png'
const Profiles = () => {
    return (
        <>
            <div className="lg:h-[26rem] sm:h-[auto] md:h[44rem] h-[36rem] bg-black">
                <div className='EnterContainer text-white flex justify-evenly lg:justify-evenly lg:py-30  lg:items-center sm:items-center flex-col lg:flex-row sm:flex-row pt-10 pb-10 '>
                    <div className=' px-3 py-3 mb-4  lg:text-left sm:text-left text-center font-sans lg:order-2 order-1 sm:order-2'>
                        <p className='lg:text-5xl text-3xl font-bold'>Create profiles for</p>
                        <p className='lg:text-5xl text-3xl font-bold'>kids</p>
                        <p className='lg:text-[24px] text-[17px]  mt-3'>Send kids on adventures with their favorite</p>
                        <p className='lg:text-[24px] text-[17px] '>characters in a space made just for them</p>
                        <p className='lg:text-[24px] text-[17px] '>free with your membership.</p>
                    </div>
                    <div className=' mb-4 px-5 py-5 lg:px-0 lg:py-0 lg:order-1 order-2 sm:order-1 border-box'>
                        <img src={profileImage} alt='...' className="w-[100%] h-[18rem] lg:h-[21rem]"/>
                    </div>
                </div>
            </div>
            <hr className='hr_line'/>    
        </>
    )
}

export default Profiles;