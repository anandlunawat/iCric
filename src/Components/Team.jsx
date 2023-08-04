import TeamCArds from "./TeamCards";

export default function Team() {
    return (
        <div className="flex flex-col p-6">
            <span className="self-center text-3xl font-extrabold text-indigo-900">Our team</span>
            <div className="flex flex-row flex-wrap gap-32 mt-4 max-sm:gap-10">
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