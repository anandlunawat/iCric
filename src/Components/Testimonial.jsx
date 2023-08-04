import TestimonialCards from "./TestimonialCards";

export default function Testimonial() {
  return (
    <div className="flex flex-col p-6">
      <span className="self-center text-3xl font-extrabold text-indigo-900">
        Testimonials
      </span>
      <div className="flex flex-row justify-center flex-wrap gap-20 mt-4 md:gap-32 max-sm:gap-10 md:w-full lg:flex lg:flex-row lg:w-auto lg:justify-center">
        <TestimonialCards
          name="Icric UK"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        />
        <TestimonialCards
          name="Icric UK"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        />
        <TestimonialCards
          name="Icric UK"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        />
      </div>

      {/* <div className="flex flex-row justify-center flex-wrap gap-20 mt-4 md:gap-32 max-sm:gap-10 md:w-full">
       
      </div> */}
    </div>
  );
}
