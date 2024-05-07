import React from 'react'
import v2 from '../Assets/v2.mp4';
const Download = () => {
    return (
        <>
            <div className="lg:h-[26rem] md:h[44rem] sm:h-[auto] h-[36rem] bg-black">
                <div className='EnterContainer  text-white flex justify-evenly lg:py-30 sm:py-15 lg:items-center sm:items-center flex-col lg:flex-row sm:flex-row pt-10 pb-10 '>
                    <div className=' px-3 py-3 mb-4  lg:text-left sm:text-left text-center font-sans lg:order-2 order-1 sm:order-2'>
                        <p className='lg:text-5xl text-3xl font-bold'>Download your</p>
                        <p className='lg:text-5xl text-3xl font-bold'>shows to watch</p>
                        <p className='lg:text-5xl text-3xl font-bold'>offline</p>
                        <p className='lg:text-[24px] text-[18px]  mt-3'>Save your favorites easily and always </p>
                        <p className='lg:text-[24px] text-[18px] '>have something to watch.</p>
                    </div>
                    <div className=' mb-4 px-5 py-5 lg:px-0 lg:py-0 lg:order-1 sm:order-1 order-2 border-box'>
                        <video autoPlay={true} muted className="w-[100%] h-[18rem] lg:h-[21rem]">
                            <source src={v2} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
            <hr className='hr_line'/>    
        </>
    )
}

export default Download;