import React from 'react'
import v3 from '../Assets/v3.mp4';
const Watch = () => {
    return (
        <>
            <div className="lg:h-[26rem] sm:h-[auto] md:h[44rem] h-[36rem] bg-black">
                <div className='EnterContainer text-white flex justify-evenly lg:justify-evenly lg:py-30  lg:items-center sm:items-center flex-col lg:flex-row sm:flex-row pt-10 pb-10 '>
                    <div className=' px-3 py-3 mb-2 lg:mb-4  lg:text-left sm:text-left text-center font-sans '>
                        <p className='lg:text-5xl text-3xl font-bold'>Watch everywhere</p>
                        <p className='lg:text-[24px] text-[17px] font-bold mt-3'>Stream unlimited movies and TV shows on</p>
                        <p className='lg:text-[24px] text-[17px] font-bold'>your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div className=' mb-4 px-6 py-6 lg:px-0 lg:py-0  border-box'>
                        <video autoPlay={true} muted className="w-[100%] h-[18rem] lg:h-[21rem]">
                            <source src={v3} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
            <hr className='hr_line'/>    
        </>
    )
}

export default Watch;