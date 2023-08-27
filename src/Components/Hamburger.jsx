import { Link } from "react-router-dom"
import { RxCross2 } from "react-icons/rx"

export default function Hamburger(props) {
    return (
        props.hamburger &&         <div className="fixed left-0 z-50 w-screen h-screen bg-[#0E2153] text-white">
        <div className="flex flex-col h-screen">
            <div className="flex flex-row pr-10">
                <div className='basis-1/2'>
                    <img alt='iCriC' src='./logo.jpg' />
                </div>
                <button onClick={()=>{props.hideHamburger()}} className="ml-auto text-2xl font-bold">
                    <RxCross2 />
                </button>
            </div>
            <button onClick={()=>{props.hideHamburger()}} className='flex flex-col items-center justify-center gap-10 pt-20'>
                <Link to={"/about"}>
                    About Us
                </Link>
                <Link to={"/why-icric"}>Why iCric</Link>
                <a href='/'>Live Scores</a>
                <Link to={"/contact"}>
                    Contact Us
                </Link>
            </button>
        </div>
    </div>
    )
}