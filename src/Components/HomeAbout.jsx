export default function HomeAbout() {
    return (
        <div className="flex flex-col p-6 bg-gray-100">
            <span className="self-center text-3xl font-extrabold text-indigo-900">About Us</span>
            <div className="flex flex-col mb-2 lg:flex lg:flex-row">
                <div className="flex flex-col gap-4 p-4 basis-1/2">
                    <span className="text-3xl font-extrabold text-indigo-900 max-lg:text-center">WE LOVE CRICKET</span>
                    <span className="font-normal text-indigo-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</span>
                    <span className="font-normal text-indigo-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</span>
                    <span className="font-normal text-indigo-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</span>
                    <a href="/" className="p-2 rounded-md text-center border-2 w-[35%] border-lime-500 text-lime-500">Know More</a>
                </div>
                <div className="self-center py-4 justify-self-center basis-1/2">
                    <img src="/About.jpg" className="max-md:w-[500px] max-md:h-[500px] md:max-lg:w-full md:max-lg:h-[500px] lg:w-[70%] lg:h-[400px]"/>
                </div>
            </div>
        </div>
    )
}