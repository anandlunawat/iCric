import { Link } from "react-router-dom"
import { FiPhoneCall } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="flex flex-row gap-8 text-white sm:justify-center max-sm:px-16 max-md:flex-wrap pt-20 pb-4 sm:items-center bg-[#0E2153]">
            <div className="flex flex-col gap-10 md:items-center md:justify-center md:basis-1/3">
                <div className="flex gap-2"><FiPhoneCall /><a href="tel: +447834763489">+447834763489, </a></div>
                <div className="flex gap-2"><FiPhoneCall /><a href="tel: +447834763489">+447834763489, </a></div>
            </div>
            <div className="flex flex-col gap-4 md:basis-1/3 md:items-center md:justify-center">
                <div className="flex gap-4"><MdEmail />
                    <a href="mailto:info@icric.com">info@icric.com</a>
                </div>
                <span>Copyright © icric Pvt.Ltd.</span>
                <span>All rights reserved</span>
            </div>
            <div className="flex flex-col gap-2 md:whitespace-pre md:basis-1/3 md:items-center md:justify-center">
                <div className="flex gap-2 md:self-start md:px-48"><BsTwitter />
                        <FaFacebook />
                        <BsYoutube />
                </div>                
                <span className="md:self-start md:px-48">Rules</span>
                <span className="md:self-start md:px-48">FAQ</span>
                <span className="md:self-start md:px-48">Become A Sponsor</span>
                <span className="md:self-start md:px-48">Franchise Opportunities</span>
                <span className="md:self-start md:px-48">T%C's</span>
            </div>
        </div>
    )
}