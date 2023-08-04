import TeamCArds from "./TeamCards";

export default function Team() {
    return (
        <div className="flex flex-col p-6">
            <span className="self-center text-3xl font-extrabold text-indigo-900">Our team</span>
            <div className="flex flex-row flex-wrap items-center justify-center gap-20 mt-6 md:gap-32 max-sm:gap-10 md:w-full">
                <TeamCArds
                    url={"/stadium.jpg"}
                    name={"Full Name"}
                />                
                <TeamCArds
                    url={"/stadium.jpg"}
                    name={"Full Name"}
                />                
                <TeamCArds
                    url={"/stadium.jpg"}
                    name={"Full Name"}
                />                
                <TeamCArds
                    url={"/stadium.jpg"}
                    name={"Full Name"}
                />                
                <TeamCArds
                    url={"/stadium.jpg"}
                    name={"Full Name"}
                />
            </div>
        </div>
    )
}