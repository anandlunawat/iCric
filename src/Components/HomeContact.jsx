import { FiPhoneCall } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function ContactUs() {
    return (
        <div className="flex flex-col gap-4 mt-3 mb-4">
            <span className="self-center text-3xl font-extrabold text-indigo-900">Contact Us</span>
            <div className="flex flex-col w-full bg-indigo-900 lg:flex lg:flex-row">
                <form className="p-10 max-lg:order-2 basis-1/2">
                    <div className="flex flex-col gap-6">
                        <input type="text" placeholder="Full Name" className="w-full h-10 placeholder:p-2 bg-lime-500 placeholder:text-white" />
                        <input type="email" placeholder="Email" className="w-full h-10 placeholder:p-2 bg-lime-500 placeholder:text-white" />
                        <input type="text" placeholder="Message" className="w-full h-10 placeholder:p-2 bg-lime-500 placeholder:text-white" />
                        <button className="text-white self-end p-2 flex gap-3 items-center justify-center rounded-md text-center border-2 w-[35%] border-lime-500">Submit <AiOutlineArrowRight /></button>
                    </div>
                </form>
                <div className="flex flex-col z-50 self-center justify-self-center max-lg:mt-3 max-lg:order-1 max-lg:self-center max-lg:w-[90%] w-[40%] text-white bg-opacity-70 gap-3">
                    <div className='relative'>
                        <img src='/stadium.jpg' className='lg:h-[316px] h-[300px] w-full' />
                    </div>
                    <div className='p-1 absolute flex flex-col w-[90%] h-[300px] lg:w-[40%] bg-[#83cc16a6] lg:h-[316px] items-center justify-center gap-6 text-center'>
                        <span className="text-xl italic font-bold">Get in touch</span>
                        <div className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
                        <div className='flex flex-row items-center gap-4'>
                            <MdEmail />
                            <a href="mailto:info@icric.com">info@icric.com</a>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <FiPhoneCall />
                            <a href="tel: +447834763489">+447834763489, </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
