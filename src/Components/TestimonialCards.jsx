export default function TestimonialCards(props) {
  return (
    <div className="flex flex-col w-fit gap-3 rounded-2xl border-[1px] shadow-lg p-4 m-4 bg-gray-100">
      <div className="flex flex-row justify-center gap-4 border-b-[1px] border-black p-2">
        <img
          src="/stadium.jpg"
          className="w-20 h-20 rounded-full max-md:h-20 max-md:w-20"
        />
        <span className="py-5 font-bold ">{props.name}</span>  
      </div>      
      <div className="flex gap-2 text-indigo-900 ">
        <div className="max-lg:h-fit">{props.text}</div>
      </div>
    </div>
  );
}
