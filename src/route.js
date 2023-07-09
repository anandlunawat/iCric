import About from "./pages/about.js";
import ContactUs from "./Components/HomeContact.jsx";
import MainIcric from "./Components/Main.jsx";
import Score from "./pages/Score.jsx";
import DetailedScore from "./pages/DetailedScore.jsx";

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
  {
    path: "/scores",
    name: "scores",
    element: <Score />,
  },
  {
    path: "/scorecard/:id",
    name: "scorecard",
    element: <DetailedScore />,
  },
];

export default routes;
