export default function Cards() {
    return (
        <div className="flex flex-col w-[30%] gap-3 rounded-2xl border-[1px] shadow-lg p-4 m-4">
            <span className="text-xl font-medium">Result</span>
            <span className="font-medium text-gray-500">1st ODI (D/N)</span>
            <div className="flex flex-row gap-4">
                <span>Logo</span>
                <span className="font-bold">Team</span>
                <div className="flex flex-col ml-auto">
                    <span className="font-bold">Score</span>
                    <span className="font-bold">Overs</span>
                </div>                
            </div>
            <div className="self-center p-2 bg-gray-100 rounded-lg justify-self-center">vs</div>
            <div className="flex flex-row gap-4">
                <span>Logo</span>
                <span className="font-bold">Team</span>
                <div className="flex flex-col ml-auto">
                    <span className="font-bold">Score</span>
                    <span className="font-bold">Overs</span>
                </div>                
            </div>
            <span className="text-2xl font-extrabold text-gray-600">Winner</span>
        </div>
    )
}