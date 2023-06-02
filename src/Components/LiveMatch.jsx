export default function LiveMatch() {
    return (
        <div className="flex flex-col self-center w-11/12 justify-self-center">
            <div className="flex flex-row max-md:w-[80%] bg-red-600 max-sm:w-[96%] gap-2 text-white px-14 max-sm:p-3 max-sm:bg-cover">
                <span className="whitespace-pre max-sm:text-lg basis-1/4">• Live</span>
                <div className="flex flex-row gap-2 basis-1/3">
                    <span className="whitespace-pre max-sm:text-sm">Team Name</span>
                    <div className="flex flex-col">
                        <span className="font-bold whitespace-pre max-sm:text-sm">127/4</span>
                        <span className="font-bold whitespace-pre max-sm:text-sm">17.3 Over</span>
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <span className="whitespace-pre max-sm:text-sm">Team Name</span>
                    <div className="flex flex-col">
                        <span className="font-bold whitespace-pre max-sm:text-sm">127/4</span>
                        <span className="font-bold whitespace-pre max-sm:text-sm">20 Over</span>
                    </div>
                </div>
            </div>
        </div>
    )
}