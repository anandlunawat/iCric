import { Link } from "react-router-dom"
import { FiPhoneCall } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="flex flex-row gap-8 text-white sm:justify-center max-sm:px-16 px-20 max-md:flex-wrap pt-20 pb-4 sm:items-center bg-[#0E2153]">
            <div className="flex flex-col gap-10 md:basis-1/3">
                <div className="flex gap-2"><FiPhoneCall /><a href="tel: +447834763489">+447834763489, </a></div>
                <div className="flex gap-2"><FiPhoneCall /><a href="tel: +447834763489">+447834763489, </a></div>
            </div>
            <div className="flex flex-col gap-4 md:basis-1/3">
                <div className="flex gap-4"><MdEmail />
                    <a href="mailto:info@icric.com">info@icric.com</a>
                </div>
                <span>Copyright © icric Pvt.Ltd.</span>
                <span>All rights reserved</span>
            </div>
            <div className="flex flex-col gap-2 md:basis-1/3">
                <div className="flex gap-2"><BsTwitter />
                        <FaFacebook />
                        <BsYoutube />
                </div>                
                <span>Rules</span>
                <span>FAQ</span>
                <span>Become A Sponsor</span>
                <span>Franchise Opportunities</span>
                <span>T%C's</span>
            </div>
        </div>
    )
}