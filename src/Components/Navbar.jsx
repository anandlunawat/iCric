import { FiPhoneCall } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row bg-[#0E2153] lg:h-10 items-center justify-center">
                <div className="flex flex-col items-start justify-center gap-2 m-4 lg:m-12 lg:gap-2 lg:flex lg:flex-row">
                    <div className="text-white px-1 lg:border-r-[1px] lg:border-[#9B9B9B]">
                        India
                    </div>
                    <div className="px-1 text-white lg:border-r-[1px] lg:border-[#9B9B9B]">
                        Europe
                    </div>
                    <div className="px-1 text-white lg:border-r-[1px] lg:border-[#9B9B9B]">
                        USA
                    </div>
                </div>
                <div className="flex flex-col gap-2 ml-auto lg:ml-auto lg:flex lg:flex-row lg:m-12">
                    <div className="flex px-1 lg:border-r-[1px] gap-2 items-center lg:border-[#9B9B9B] flex-row text-white">
                        <FiPhoneCall />
                        <div className='max-lg:flex max-lg:flex-col'>
                            <a href="tel: +447834763489">+447834763489, </a>
                            <a href="tel: +447717886882">+447717886882 </a>
                        </div>
                    </div>
                    <div className="flex px-1 lg:border-r-[1px] gap-2 items-center lg:border-[#9B9B9B] flex-row text-white">
                        <MdEmail />
                        <a href="mailto:info@icric.com">info@icric.com</a>
                    </div>
                    <div className="flex flex-row items-center gap-2 px-1 text-white">
                        <BsTwitter />
                        <FaFacebook />
                        <BsYoutube />
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center mt-4 mb-0 ml-4 mr-4 lg:mt-5 lg:gap-8 lg:mb-0 lg:m-12'>
                <Link to={"/"}>
                    <div className='basis-1/2'>
                        <img alt='iCriC' src='./logo.jpg' className='lg:w-[175px] w-[100px] h-[49px] lg:h-[69px]' />
                    </div>
                </Link>
                <div className='flex flex-row justify-center ml-auto max-lg:hidden lg:gap-6 lg:text-lg'>
                    {/* <Link to={"/about"}>
                        About Us
                    </Link> */}
                    <Link to={"/why-icric"}>Why iCric</Link>
                    <a href='/'>Live Scores</a>
                    <Link to={"/contact"}>
                        Contact Us
                    </Link>
                </div>
                <div className='hidden ml-auto max-lg:visible'>
                    Hamburger
                </div>
            </div>
        </div>
    )
}