import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "../route.js"
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    {
                        routes.map((route) => {
                            return (
                                <Route key={route.name} path={route.path} element={route.element} />
                            )
                        })
                    }
                </Routes>
                <div>{children}</div>
                <Footer />
            </BrowserRouter>
        </div>
    )
}