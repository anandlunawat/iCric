import WhyCArds from "./WhyCards";

export default function WhyIcric() {
  return (
    <div className="flex flex-col p-6 bg-gray-100">
      <span className="self-center text-3xl font-extrabold text-indigo-900">
        Why Icric
      </span>
      <div className="flex flex-row justify-center flex-wrap gap-20 mt-4 md:gap-32 max-sm:gap-10 md:w-full">
        <WhyCArds
          url={"/stadium.jpg"}
          name={"Best in Indoor Cricket"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
          }
        />
        <WhyCArds
          url={"/stadium.jpg"}
          name={"Qualified Instructor"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
          }
        />
        <WhyCArds
          url={"/stadium.jpg"}
          name={"High Tech"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
          }
        />
        <WhyCArds
          url={"/stadium.jpg"}
          name={"Happy Members"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
          }
        />
      </div>
    </div>
  );
}
