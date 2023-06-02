import About from "./pages/about.js";
import ContactUs from "./Components/HomeContact.jsx"
import MainIcric from "./Components/Main.jsx";

const routes = [
    {
        path: "/",
        name: "home",
        element: <MainIcric />,
    }, 
    {
        path: "/about",
        name: "about",
        element: <About />,
    },    
    {
        path: "/contact",
        name: "contact",
        element: <ContactUs />,
    },    
];

export default routes;                     