import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className="flex flex-col gap-8 max-md:px-16 text-white max-md:self-start md:gap-40 md:flex-row bg-[#0E2153]">
            <div className="flex flex-col gap-4 md:px-20 basis-1/3">
                <span className="text-lg font-normal">Company</span>
                <Link to={"/about"} className="text-lg font-normal">About Us</Link>
                <span className="text-lg font-normal">Blog</span>
                <a href="mailto:Connect@skitch.in" className="text-lg font-normal ">Contact Us</a>
            </div>
            <div className="flex flex-col gap-4 basis-1/3">
                <span className="text-xl font-normal">For You</span>
                <Link to={"/privacypolicy"} className="text-lg font-normal ">Privacy</Link>
                <Link to={"/termsandcondition"} className="text-lg font-normal ">Terms</Link>
                <Link to={"/refundpolicy"} className="text-lg font-normal ">Refund</Link>
            </div>
            <div className="flex flex-col gap-4 basis-1/3">
                <span className="text-xl font-normal">Help</span>
                <span className="text-lg font-normal ">FAQ s</span>
                <a href="mailto:Connect@skitch.in" className="text-lg font-normal ">Contact Us</a>
            </div>
        </div>
    )
}