import WhyCArds from "./WhyCards";

export default function WhyIcric() {
  return (
    <div className="flex flex-col p-6 bg-gray-100">
      <span className="self-center text-3xl font-extrabold text-indigo-900">
        Why Icric
      </span>
      <div className="flex flex-row flex-wrap justify-center gap-20 mt-4 md:gap-32 max-sm:gap-10 md:w-full">
        <WhyCArds
          url={"/stadium.jpg"}
          name={"Best in Indoor Cricket"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          }
        />
        <WhyCArds
          url={"/stadium.jpg"}
          name={"Qualified Instructor"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          }
        />
        <WhyCArds
          url={"/stadium.jpg"}
          name={"High Tech"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          }
        />
        <WhyCArds
          url={"/stadium.jpg"}
          name={"Happy Members"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          }
        />
      </div>
    </div>
  );
}
