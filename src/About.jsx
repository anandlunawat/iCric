import { Link } from "react-router-dom";
import LiveMatch from "./Components/LiveMatch";
import Poster from "./Components/Poster";
import Team from "./Components/Team";

export default function About() {
    return (
        <div>
            <Poster 
                url={"/about_page.jpg"}
                h1={"About Us"}
                h2={"WE LOVE CRICKET"}
                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip"}
            />
            <Team />
        </div>
    )
}