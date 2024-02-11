import React, { useState } from 'react'
import { PiArrowDownLeftLight } from "react-icons/pi";
import { motion } from 'framer-motion'
import Heropage_headingimg from "../assest/Heropage-heading.jpg"
import { RxCross2 } from "react-icons/rx";
import { AnimatedLink } from './Navbar';
import { UnderlineAnimation } from './About'
function Landingpage() {
    const [menubtn, setmenubtn] = useState(false);

    console.log(menubtn)
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full h-screen pt-1 overflow-hidden">
            <div className={`fixed top-0 w-full h-full z-50 bg-black  ${(menubtn) ? "translate-x-[0%]" : "-translate-x-[100%]"}`}>
                <div className=" w-screen px-5 border-b-[.8px] border-zinc-400 lg:px-12 py-6 flex justify-between bg-gray-300   duration-500 ease-[cubic-bezier(.3,.86,.36,.95)] bg-opacity-0 backdrop-filter backdrop-blur-md text-white" id='navbar' >
                    <div className="logo flex justify-center items-center" >
                        <svg width="70" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z" fill="currentColor"></path>
                            <path d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z" fill="currentColor"></path>
                            <path d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z" fill="currentColor"></path>
                            <path d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z" fill="currentColor"></path>
                            <path d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <div onClick={(e) => setmenubtn(!menubtn)} className='text-white flex justify-center items-center  lg:hidden' >
                        <RxCross2 size={25} />
                    </div>
                </div>
                <div className="links font-['Founders'] px-5 grid text-white ">
                    {["Services", "Our Work", "About Us", "Insights", "Contact Us"].map((item, index) => (
                        <a className='text-6xl mt-5'>{item}</a>
                    ))}
                    <div className='text-white mt-10  lg:mr-20 flex text-left flex-col justify-end  font-[Neue] font-light w-[5%] '>
                        s:
                        {["Instagram", "Behance", "Facebook", "Linkedin"].map((item, index) => <a key={index}>
                            <UnderlineAnimation Word={item} size={"1px"} />
                        </a>)}
                    </div>
                </div>
            </div>
            <div className="textstructure mt-36 px-5 lg:px-12 ">
                {["WE CREATE", "eye-Opening", "presentations"].map((item, index) => {
                    return (
                        <div className="masker  flex items-center  ">
                            {index == 1 && (<motion.div initial={{ width: "0" }} animate={{ width: 100 }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className="lg:w-[8vw] h-10 flex items-center justify-center lg:h-[12vh] bg-black mt-4 rounded-lg mr-2  overflow-hidden">
                                <img src={Heropage_headingimg} alt="Heropage-headingImg" className='w-full h-full  object-cover' />
                            </motion.div>)}
                            <h1 key={index} className="text-[18vw] leading-[15vw]  lg:text-[10vw] lg:leading-[7vw] tracking-normal  font-medium font-[Founders] uppercase">{item}</h1>
                        </div>)
                })}
            </div>
            <div className="border-t-[.5px] py-2 px-5 lg:px-12 mt-10  border-zinc-400 lg:mt-28 lg:flex lg:items-center lg:justify-between">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) =>
                    <p className="text-base font-light tracking-tight mt-10 lg:mt-0 leading-none font-[Neue]">
                        {item}
                    </p>)}
                <div className="start flex lg:justify-center lg:items-center gap-2 mt-10 lg:mt-0 group">
                    <div className="px-5 py-1 font-['Neue'] border-[1px] border-zinc-700 cursor-pointer rounded-full text-base uppercase hover:bg-[#212121] hover:text-white origin-center duration-500 group-hover:bg-[#212121] group-hover:text-white">
                        Start the project
                    </div>
                    <div  className="lg:p-[.5vw] hidden font-['Neue'] lg:flex justify-center cursor-pointer items-center border-[1px] border-zinc-700 rounded-full text-lg uppercase group-hover:bg-[#212121] group-hover:text-white origin-center duration-500">
                        <PiArrowDownLeftLight className="rotate-180 text-base" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Landingpage