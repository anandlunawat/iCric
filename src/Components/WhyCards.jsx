import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function WhyCArds(props) {
  return (
    <div className="flex w-48 flex-col items-center justify-center gap-2">
      <img
        src={props.url}
        className="w-40 h-40 rounded-full max-md:h-20 max-md:w-20"
      />
      <span className="text-lg font-semibold text-lime-500">{props.name}</span>
      <div className="flex gap-2 text-indigo-900 ">
        <div className="w-auto h-fit text-center">{props.text}</div>
      </div>
    </div>
  );
}
