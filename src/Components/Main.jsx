import { Link } from "react-router-dom";
import LiveMatch from "./LiveMatch";

export default function MainIcric() {
    return (
        <div className="flex flex-col w-full h-auto bg-no-repeat max-sm:bg-contain max-lg:bg-contain 2xl:bg-cover bg-back">
            <div className="flex flex-col w-full gap-10 p-20 text-white max-lg:p-6 max-sm:gap-2 max-md:gap-4">
                <span className="text-6xl font-semibold max-lg:text-2xl max-sm:text-xs">Local Indoor<br></br>Cricket Leagues</span>
                <span className="w-[50%] 2xl:w-[20%] max-sm:text-[7px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</span>
                <button className="mt-auto max-sm:p-1 max-sm:w-[30%] max-sm:text-sm whitespace-pre max-lg:p-0 p-3 border-2 border-solid w-[20%] rounded-md"><div className="flex flex-row items-center justify-center"><span className="max-sm:text-xs">Book Now</span><></></div></button>
            </div>
            <div className="flex flex-col items-center justify-center w-11/12">
                <LiveMatch />
                <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-col bg-cover gap-5 text-white text-base basis-1/2 bg-no-repeat lg:h-[350px] max-sm:p-3 max-sm:bg-cover p-14 bg-cardBgG">
                        <div className="max-sm:text-sm">Join Our <br></br>Membership Now!</div>
                        <span className="max-sm:text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore</span>
                        <Link to={"/contact"}>
                            <button className="mt-auto p-3 border-2 border-solid w-[50%] rounded-md"><div className="flex flex-row items-center justify-center"><span>Contact US</span><></></div></button>
                        </Link>
                    </div>
                    <div className="flex flex-col max-md:justify-center max-sm:p-3 max-sm:bg-cover max-sm:w-[96%] max-md:w-[80%] bg-cover gap-5 text-white text-base bg-no-repeat lg:w-[600px] w-[40%] lg:h-[350px] p-14 bg-cardBgB">
                        <span className="max-sm:text-sm">Upcoming League</span>
                        <span className="max-sm:text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore</span>
                        <span className="max-sm:text-xs">Saturday, 11th March<br></br>Location: Lorem ipsum dolor, sit amet</span>
                        <button className="mt-auto p-3 border-2 border-solid w-[50%] rounded-md"><div className="flex flex-row items-center justify-center"><span>Book Now</span><></></div></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

