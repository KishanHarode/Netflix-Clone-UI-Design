import React, { useState } from 'react'
import {Faq_Data} from './Faq_Data';
const Faq = () => {
    const [openItems, setOpenItems] = useState(null);
    
    const toggleItem = (index)=>{
        setOpenItems((prevIndex) => (prevIndex === index ? null : index));
    }

    return (
        <>
            <div className="lg:h-[auto] sm:h-[auto] md:h[44rem] h-[auto] bg-black pb-5">
                <div className='headingfaq text-white text-center lg:text-5xl font-extrabold py-10 text-3xl px-7 lg:px-0'>Frequently Asked Questions</div>
                <div className='faq text-white text-left lg:px-[130px] px-5 lg:py-12 flex flex-col gap-[2px]  lg:justify-center '>
                    {
                        Faq_Data.map((Faq, index) => {
                            return (
                                <>
                                    <div className='mb-2' key={index}>
                                        <div className='lg:px-5 lg:py-5 px-5 py-5 w-[100%] bg-[rgb(45,45,45)] hover:bg-[rgb(75,75,75)]  flex justify-between items-center cursor-pointer ' onClick={() => toggleItem(index)}>
                                            <span className='lg:text-3xl text-[20px] font-sans inline-block '>{Faq.title}</span>
                                            <span>
                                                {
                                                    openItems === index ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="lg:w-10 lg:h-10 w-6 h-6 inline-block cursor-pointer" >
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                        </svg>
                                                        :
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="lg:w-10 lg:h-10 w-6 h-6 inline-block cursor-pointer "  >
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                        </svg>
                                                }
                                            </span>
                                        </div>

                                        {
                                            openItems === index &&
                                            <div className=' px-5 py-5  lg:text-2xl font-sans text-justify text-1xl bg-[rgb(45,45,45)] hover:bg-[rgb(75,75,75)]'>
                                                <p>{Faq.para1}</p><br />
                                                <p>{Faq.para2}</p>
                                            </div>
                                        }
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className='lastPart_faq1 text-white text-center lg:text-[22px] lg:py-2 py-10  text-[19px] lg:px-7 px-10'>
                    Ready to watch? Enter your email or mobile number to create or restart your membership.
                </div>
                <div className='lastPart_faq2 text-white sm:mt-[1rem] flex sm:justify-center sm:flex-row sm:gap-2 flex-col px-[40px]  sm:px-[60px] gap-y-5 '>
                    {/* <input className='lg:px-[5rem] py-3 bg-[#333] opacity-80 sm:ms-[50px] sm:w-[400px] border-white border-solid border lg:rounded-md rounded-lg cursor-pointer text-white  px-[2rem] ' type='text' placeholder='Email or Mobile number'/>
                    <button className='lg:w-[170px] w-[150px]  lg:px-[2rem] py-3 bg-red-700 text-white rounded-md 
                    lg:text-[18px] text-[16px] hover:bg-red-600 cursor-pointer font-sans font-bold mx-[25%]  lg:mx-0'>Get Started</button> */}
                    <input className='sm:px-[5rem] py-3 bg-[#333] opacity-80 sm:w-[50%] border-white border-solid border sm:rounded-md rounded-lg cursor-pointer text-white px-[2rem]' type='text' placeholder='Email or Mobile number'/>
                    <button className='sm:w-[170px] w-[150px] sm:px-[2rem] py-3 bg-red-700 text-white rounded-md sm:text-[18px] text-[16px] hover:bg-red-600 cursor-pointer font-sans font-bold mx-[25%] sm:mx-0'>Get Started</button>
                </div>
            </div>
            <hr className='hr_line' />
        </>
    )
}

export default Faq;