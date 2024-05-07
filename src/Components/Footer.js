import React from 'react'
import { AiOutlineGlobal } from 'react-icons/ai';

const Footer = () => {
    return (
        <>
            <div className="lg:h-[auto] md:h[auto] h-[auto] bg-black px-[5%] py-[5%]">
                <div className='h-auto w-[100%] '>
                    <div className='text-white font-sans text-[17px] px-[5%] text-[rgba(255,255,255,0.7)]'>Questions? Call <span className='underline cursor-pointer'>000-800-919-1694</span></div>
                    <div className='text-white lg:grid sm:grid lg:grid-rows-1 sm:grid-rows-1 lg:grid-cols-4 sm:grid-cols-4 lg:px-[5%] sm:px[5%] py-5 sm:py-10  px-[5%] flex flex-wrap gap-y-4  '>
                        <div className='item1 w-[50%] lg:w-[70%] sm:w-[70%]'>
                            <ul>
                                <li className='mb-2'><a href='https://help.netflix.com/en/node/412' className='font-sans lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] underline'>FAQ</a></li>
                                <li className='mb-2'><a href='https://help.netflix.com/en/node/412' className='font-sans lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] underline'>Investor Relations</a></li>
                                <li className='mb-2'><a href='https://help.netflix.com/en/node/412' className='font-sans lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] underline'>Privacy</a></li>
                                <li className='mb-2'><a href='https://help.netflix.com/en/node/412' className='font-sans lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] underline'>Speed Test</a></li>
                            </ul>
                        </div>
                        <div className='item2 w-[50%] lg:w-[70%] sm:w-[70%]'>
                            <ul>
                                <li className='mb-2'><a href='https://help.netflix.com/en/node/412' className='font-sans lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] underline'>Help Centre</a></li>
                                <li className='mb-2'><a href='https://help.netflix.com/en/node/412' className='font-sans lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] underline'>Jobs</a></li>
                                <li className='mb-2'><a href='https://help.netflix.com/en/node/412' className='font-sans lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] underline'>Cookie Preferences</a></li>
                                <li className='mb-2'><a href='https://help.netflix.com/en/node/412' className='font-sans lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] underline'>Legal Notices</a></li>
                            </ul>
                        </div>
                        <div className='item3 w-[50%] lg:w-[70%] sm:w-[70%]'>
                            <ul>
                                <li className='mb-2'><a href='https://help.netflix.com/en/node/412' className='font-sans lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] underline'>Account</a></li>
                                <li className='mb-2'><a href='https://help.netflix.com/en/node/412' className='font-sans lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] underline'>Ways to Watch</a></li>
                                <li className='mb-2'><a href='https://help.netflix.com/en/node/412' className='font-sans lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] underline'>Corporate Information</a></li>
                                <li className='mb-2'><a href='https://help.netflix.com/en/node/412' className='font-sans lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] underline'>Only on Netflix</a></li>
                            </ul>
                        </div>
                        <div className='item4 w-[50%] lg:w-[70%]sm:w-[70%]'>
                            <ul>
                                <li className='mb-2'><a href='https://help.netflix.com/en/node/412' className='font-sans lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] underline'>Media Centre</a></li>
                                <li className='mb-2'><a href='https://help.netflix.com/en/node/412' className='font-sans lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] underline'>Terms of Use</a></li>
                                <li className='mb-2'><a href='https://help.netflix.com/en/node/412' className='font-sans lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] underline'>Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className=' text-[17px]   lg:w-[10%] lg:ms-[54px] w-[25%] ms-[17px] rounded-md bg-[#3333] text-white relative'>
                      <div className='sm:w-[100%] w-[120%]  bg-transparent py-1 px-1 hover:border-solid hover:border-white rounded border relative'>
                          <span className='absolute left-[4.5rem] top-3'><AiOutlineGlobal/></span>
                           <select className='sm:w-full bg-transparent py-1 px-1 outline-none '>
                           <option className='bg-[#111112] opacity-80 py-1 px-1 '>English</option>
                            <option className='bg-[#111112] opacity-80 py-1 px-1'>Hindi</option>
                           </select>
                      </div>
                    </div>
                    <div className='text-white font-sans text-[16px] px-[5%] py-[2%]  text-[rgba(255,255,255,0.7)]'>Netflix India</div>
                </div>
            </div>
            <hr className='hr_line' />
        </>
    )
}

export default Footer;