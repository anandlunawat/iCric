import TestimonialCards from "./TestimonialCards";

export default function Testimonial() {
  return (
    <div className="flex flex-col p-6">
      <span className="self-center text-3xl font-extrabold text-indigo-900">
        Testimonials
      </span>
      <div className="flex flex-row items-center justify-center mt-4 max-sm:flex-col max-md:flex-wrap">
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
    </div>
  );
}
