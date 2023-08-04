export default function Poster(props) {
    return (
        <div className="z-50 flex flex-col self-center gap-3 text-white justify-self-center max-lg:mt-3 max-lg:order-1 bg-opacity-70">
            <div className='relative'>
                <img src={props.url} className='w-full max-sm:h-[250px] max-md:h-[350px] md:h-[500px]' />
            </div>
            {/* <div className={`absolute ${props.h1 === "About Us" ? "bg-[#1b52a4b3]" : ""} flex flex-col w-full lg:h-[550px] gap-10 text-white max-lg:p-6 max-md:gap-4 max-sm:gap-8`}> */}
            <div className={`absolute flex flex-col w-full lg:h-[550px] gap-10 text-white max-lg:p-6 max-md:gap-4 max-sm:gap-8`}>
                <span className="text-6xl font-semibold lg:ml-20 lg:mt-20 max-lg:text-2xl">
                    {props.h1}<br></br>{props.h2}
                </span>
                <span className="w-[50%] 2xl:w-[20%] max-sm:text-[7px] lg:ml-20">
                    {props.content}
                </span>
                <button className="max-sm:p-1 max-sm:w-[30%] max-sm:text-sm whitespace-pre lg:ml-20 p-3 border-2 border-solid w-[20%] rounded-md">
                    <div className="flex flex-row items-center justify-center">
                        <span className="max-sm:text-xs">Book Now</span>                        
                    </div>
                </button>
            </div>
        </div>
    )
}