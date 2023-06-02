import { Link } from "react-router-dom";
import LiveMatch from "../Components/LiveMatch";

export default function About() {
    return (
        <div className="flex flex-col w-full h-auto bg-no-repeat max-sm:bg-contain max-lg:bg-contain 2xl:bg-cover bg-back">
            <div className="flex flex-col w-full gap-10 p-20 text-white max-lg:p-6 max-sm:gap-2 max-md:gap-4">
                <span className="text-6xl font-semibold max-lg:text-2xl max-sm:text-xs">Local Indoor<br></br>Cricket Leagues</span>
                <span className="w-[50%] 2xl:w-[20%] max-sm:text-[7px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</span>
                <button className="mt-auto max-sm:p-1 max-sm:w-[30%] max-sm:text-sm whitespace-pre max-lg:p-0 p-3 border-2 border-solid w-[20%] rounded-md"><div className="flex flex-row items-center justify-center"><span className="max-sm:text-xs">Book Now</span><></></div></button>
            </div>
            <LiveMatch />
        </div>
    )
}