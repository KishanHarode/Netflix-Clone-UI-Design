import React from 'react'
import v1 from '../Assets/v1.mp4';
const Entertainment = () => {
    return (
        <>
            <div className="lg:h-[26rem] sm:h-[auto] md:h[44rem] h-[34rem] bg-black">
                <div className='EnterContainer text-white flex justify-evenly lg:py-15 sm:py-20 lg:items-center sm:items-center flex-col lg:flex-row sm:flex-row py-10'>
                    <div className=' px-3 py-3 mb-4  lg:text-left sm:text-left text-center font-sans'>
                        <p className='lg:text-5xl text-3xl font-bold'>Enjoy on your TV</p>
                        <p className='lg:text-[24px] text-[19px] font-semibold mt-3'>Watch on Smart TVs, Playstation, Xbox,</p>
                        <p className='lg:text-[24px] text-[19px] font-semibold'>Chromecast, Apple TV, Blu-ray players,</p>
                        <p className='lg:text-[24px] text-[19px] font-semibold'>and more.</p>
                    </div>
                    <div className=' mb-4 px-5 py-5 lg:px-0 sm:px-0 lg:py-0 sm:py-0'>
                        <video autoPlay={true} muted className="w-[30rem] h-[18rem]">
                            <source src={v1} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
            <hr className='hr_line'/>

        </>
    )
}

export default Entertainment;