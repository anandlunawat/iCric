import { Link } from "react-router-dom";
import LiveMatch from "./LiveMatch";
import Cards from "./Cards";
import HomeAbout from './HomeAbout'
import HomeContact from './HomeContact'
import { AiOutlineArrowRight } from 'react-icons/ai'
import ScoresCarousel from "./ScoresCarousel";
import Poster from "./Poster";

export default function MainIcric() {

  function scroll() {
    let id = document.getElementById("carousel")
    console.log("In Scroll")
    document.getElementById("carousel-container").scrollLeft += window.innerWidth
    id.classList.add("scroll-right")
  }

  return (
    <div>      
      <Poster 
        url={"/background.png"}
        h1={"Local Indoor"}
        h2={"Cricket Leagues"}
        content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip"}
      />          
        {/* <LiveMatch /> */}
        <div className="flex flex-row items-center sm:max-lg:h-[340px] justify-center max-sm:flex-col max-sm:w-full">
          <div className="flex flex-col bg-cover sm:max-lg:h-full gap-5 text-white text-base lg:h-[350px] basis-1/2 bg-no-repeat max-sm:p-6 sm:p-12 bg-cardBgG">
            <div className="text-3xl font-extrabold max-sm:text-3xl">
              Join Our <br></br>Membership Now!
            </div>
            <span className="max-sm:font-normal">
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
          <div className="flex flex-col bg-cover gap-5 text-white sm:max-lg:h-full text-base basis-1/2 bg-no-repeat lg:h-[350px] max-sm:bg-cover max-sm:p-6 sm:p-12 bg-cardBgB">
            <span className="text-3xl font-extrabold max-sm:text-3xl">Upcoming League</span>
            <span className="max-sm:font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ut labore
            </span>
            <span className="max-sm:font-normal">
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
      {/* <div className="relative">
        <button onClick={scroll} className='absolute right-4 bg-[#88eb85e1] rounded-full text-xl p-3 top-[30%] z-50'>
          <AiOutlineArrowRight style={{ color: "black" }} />
        </button>
        <div className="m-4 overflow-x-hidden" id="carousel-container">
          <ScoresCarousel />
        </div>
      </div> */}
      <HomeAbout />
      <HomeContact />
    </div>
  );
}

