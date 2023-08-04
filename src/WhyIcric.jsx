import React from 'react';
import Poster from './Components/Poster';
import Team from './Components/Team';
import Why from './Components/Why';
import Testimonial from './Components/Testimonial';


export default function WhyIcric() {
    return (
        <div>
            <Poster 
                url={"/about_page.jpg"}
                h1={"Why Icric"}
                h2={"WE LOVE CRICKET"}
                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip"}
            />
            <Why />
            <Testimonial />
            {/* <Team /> */}
        </div>
    )
}