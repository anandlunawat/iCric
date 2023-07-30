import { Link } from "react-router-dom";
import LiveMatch from "./LiveMatch";
import Cards from "./Cards";
import { AiOutlineArrowRight } from 'react-icons/ai'
import ScoresCarousel from "./ScoresCarousel";

export default function MainIcric() {

  function scroll() {
    let id = document.getElementById("carousel")
    console.log("In Scroll")
    document.getElementById("carousel-container").scrollLeft += window.innerWidth
    id.classList.add("scroll-right")
}

  return (
    <div>
      <div className="flex flex-col w-full bg-no-repeat max-sm:bg-contain max-lg:bg-contain 2xl:bg-cover bg-back">
        <div className="flex flex-col w-full gap-10 p-20 text-white max-lg:p-6 max-sm:gap-2 max-md:gap-4">
          <span className="text-6xl font-semibold max-lg:text-2xl max-sm:text-xs">
            Local Indoor<br></br>Cricket Leagues
          </span>
          <span className="w-[50%] 2xl:w-[20%] max-sm:text-[7px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </span>
          <button className="mt-auto max-sm:p-1 max-sm:w-[30%] max-sm:text-sm whitespace-pre max-lg:p-0 p-3 border-2 border-solid w-[20%] rounded-md">
            <div className="flex flex-row items-center justify-center">
              <span className="max-sm:text-xs">Book Now</span>
              <></>
            </div>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          {/* <LiveMatch /> */}
          <div className="flex flex-row items-center sm:max-lg:h-[340px] justify-center max-sm:flex-col max-sm:w-full">
            <div className="flex flex-col bg-cover sm:max-lg:h-full gap-5 text-white text-base lg:h-[350px] basis-1/2 bg-no-repeat max-sm:p-8 sm:p-14 bg-cardBgG">
              <div className="max-sm:text-sm">
                Join Our <br></br>Membership Now!
              </div>
              <span className="max-sm:text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor ut labore
              </span>
              <Link to={"/contact"}>
                <button className="mt-auto p-3 border-2 border-solid w-[50%] rounded-md">
                  <div className="flex flex-row items-center justify-center">
                    <span>Contact US</span>
                    <></>
                  </div>
                </button>
              </Link>
            </div>
            <div className="flex flex-col bg-cover gap-5 text-white sm:max-lg:h-full text-base basis-1/2 bg-no-repeat lg:h-[350px] max-sm:bg-cover max-sm:p-8 sm:p-14 bg-cardBgB">
              <span className="max-sm:text-sm">Upcoming League</span>
              <span className="max-sm:text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor ut labore
              </span>
              <span className="max-sm:text-xs">
                Saturday, 11th March<br></br>Location: Lorem ipsum dolor, sit amet
              </span>
              <button className="mt-auto p-3 border-2 border-solid w-[50%] rounded-md">
                <div className="flex flex-row items-center justify-center">
                  <span>Book Now</span>
                  <></>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <button onClick={scroll} className='absolute right-4 bg-[#88eb85e1] rounded-full text-xl p-3 top-[30%] z-50'>
          <AiOutlineArrowRight style={{ color: "black" }} />
        </button>
        <div className="m-4 overflow-x-hidden" id="carousel-container">
          <ScoresCarousel />
        </div>
      </div>
    </div>
  );
}

