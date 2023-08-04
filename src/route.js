import ContactUs from "./Components/HomeContact.jsx";
import MainIcric from "./Components/Main.jsx";
import Score from "./Score.jsx";
import DetailedScore from "./DetailedScore.jsx";
import About from "./About.jsx";
import WhyIcric from "./WhyIcric.jsx";

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
  {
    path: "/why-icric",
    name: "why-icric",
    element: <WhyIcric />,
  },
];

export default routes;
