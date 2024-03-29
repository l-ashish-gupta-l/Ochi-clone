import React from 'react'
import Img from "../assest/photo-1.jpg"


function UnderlineAnimation({ Word }) {
    return (
        <span className='m-1'>
            <span className={`inline-block relative after:content-[''] cursor-pointer after:absolute after:w-full after:scale-x-100 after:h-[.05em] after:bottom-0 after:left-0 after:bg-[#212121]  after:rounded-xl after:origin-bottom-left after:transition-transform after:duration-250 after:ease-out hover:after:scale-x-0  hover:after:origin-bottom-right`} >
                {Word}
            </span>
        </span >

    )
}

function About() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl  text-black'>

            <h1 className='font-[Neue] py-10 px-5 lg:pt-24 lg:pb-10 lg:px-20 w-full tracking-normal leading-none lg:leading-[4vw] text-[7vw] lg:text-[3.8vw] text-[#212121] '>
                Ochi is a strategic partner for fast-growing tech businesses that need to
                <UnderlineAnimation Word={"raise funds"} />
                ,<UnderlineAnimation Word={"sell products"} />
                ,<UnderlineAnimation Word={"explain complex ideas"} />
                , and <UnderlineAnimation Word={"hire great people."} />


            </h1>
            <div className='border-t-[1px] px-5 lg:px-20 pt-5 pb-20  lg:flex justify-between border-b-[1px] border-[#464C30]'>
                <div className='text-[#464C30] font-[Neue] font-light '>What you can expect:</div>
                <div className='text-[#464C30] h-[70%] text-base font-[Neue] font-light mt-10 w-[85%] lg:w-[20%] lg:ml-[30vw] '>
                    <p>
                        We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                    <p className='mt-10'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                </div>
                <div className='text-[#464C30] mt-10  lg:mr-20 flex text-left flex-col justify-end  font-[Neue] font-light w-[5%] '>
                    s:
                    {["Instagram", "Behance", "Facebook", "Linkedin"].map((item, index) => <a key={index}>
                        <UnderlineAnimation Word={item} size={"1px"} />
                    </a>)}
                </div>
            </div>
            <div className=' px-5 pb-10 lg:px-20 lg:py-20   lg:flex justify-between'>
                <div className=' lg:w-1/2'>
                    <h1 className='text-4xl lg:text-5xl font-[Neue] mt-5'>Our approach:</h1>
                    <button className='px-8 uppercase py-3 rounded-full flex items-center justify-center gap-5 font-[Neue] text-white bg-zinc-900 mt-5'> Read more
                        <div className='w-2 h-2 bg-zinc-300 rounded-full'></div>
                    </button>
                </div>
                <div className='lg:w-1/2 lg:h-[60vh] lg:mt-0 mt-10   bg-black rounded-xl overflow-hidden '>
                    <img src={Img} alt='Photo-1 ' className='w-full h-full' />
                </div>

            </div>

        </div>

    )
}

export default About
export { UnderlineAnimation }