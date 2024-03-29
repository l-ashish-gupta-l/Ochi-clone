import React from 'react'
import { motion } from "framer-motion"
function Marquee() {

    return (
        <div data-scroll data-scroll-speed=".1" className='bg-[#004D43]  w-full py-10 lg:py-24 rounded-tl-2xl rounded-tr-2xl'>
            <div className='border-t-2 border-b-2  border-[#2b776d] flex whitespace-nowrap overflow-hidden '>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 6 }} className='text-[35vw] lg:text-[20vw] leading-none text-white  uppercase font-semibold font-[Founders] pr-10' >We are Ochi</motion.h1>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 6 }} className='text-[35vw] lg:text-[20vw] leading-none  text-white uppercase font-semibold font-[Founders] pr-10' >We are Ochi</motion.h1>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 6 }} className='text-[35vw] lg:text-[20vw] leading-none text-white  uppercase font-semibold font-[Founders] pr-10' >We are Ochi</motion.h1>
            </div>
        </div>
    )
}

export default Marquee