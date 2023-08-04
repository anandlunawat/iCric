import { FiPhoneCall } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { Link } from "react-router-dom"

export default function BottomNav() {
    return (
        <div className="flex flex-col">
            <div className='flex flex-row items-center justify-center mt-4 mb-0 ml-4 mr-4 lg:mt-5 lg:gap-8 lg:mb-0 lg:m-12'>
                <Link to={"/"}>
                    <div className='basis-1/2'>
                        <img alt='iCriC' src='./logo.jpg' className='lg:w-[175px] w-[100px] h-[49px] lg:h-[69px]' />
                    </div>
                </Link>
                <div className='flex flex-row justify-center ml-auto max-lg:hidden lg:gap-6 lg:text-lg'>
                    <Link to={"/about"}>
                        About Us
                    </Link>
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