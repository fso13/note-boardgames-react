import {lazy} from "react";
import {Navigate} from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Notes = lazy(() => import("../views/ui/Notes"));
const Note = lazy(() => import("../views/ui/Note"));
const Games = lazy(() => import("../views/ui/Games"));
const Game = lazy(() => import("../views/ui/Game"));
const Calendar = lazy(() => import("../views/ui/Calendar"));
const Chart = lazy(() => import("../views/ui/Chart"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout/>,
    children: [
      {path: "/", element: <Navigate to="/notes"/>},
      {path: "/notes", exact: true, element: <Notes/>},
      {path: "/notes/:id", exact: true, element: <Note/>},
      {path: "/games", exact: true, element: <Games/>},
      {path: "/games/:id", exact: true, element: <Game/>},
      {path: "/calendar", exact: true, element: <Calendar/>},
      {path: "/chart", exact: true, element: <Chart/>},
    ],
  },
];

export default ThemeRoutes;
//
//
// import { lazy } from "react";
// import { Navigate } from "react-router-dom";
//
// /****Layouts*****/
// const FullLayout = lazy(() => import("../layouts/FullLayout.js"));
//
// /***** Pages ****/
//
// const Starter = lazy(() => import("../views/Starter.js"));
// const About = lazy(() => import("../views/About.js"));
// const Alerts = lazy(() => import("../views/ui/Alerts"));
// const Badges = lazy(() => import("../views/ui/Badges"));
// const Buttons = lazy(() => import("../views/ui/Buttons"));
// const Cards = lazy(() => import("../views/ui/Cards"));
// const Grid = lazy(() => import("../views/ui/Grid"));
// const Tables = lazy(() => import("../views/ui/Tables"));
// const Forms = lazy(() => import("../views/ui/Forms"));
// const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
//
// /*****Routes******/
//
// const ThemeRoutes = [
//   {
//     path: "/",
//     element: <FullLayout />,
//     children: [
//       { path: "/", element: <Navigate to="/starter" /> },
//       { path: "/starter", exact: true, element: <Starter /> },
//       { path: "/about", exact: true, element: <About /> },
//       { path: "/alerts", exact: true, element: <Alerts /> },
//       { path: "/badges", exact: true, element: <Badges /> },
//       { path: "/buttons", exact: true, element: <Buttons /> },
//       { path: "/cards", exact: true, element: <Cards /> },
//       { path: "/grid", exact: true, element: <Grid /> },
//       { path: "/table", exact: true, element: <Tables /> },
//       { path: "/forms", exact: true, element: <Forms /> },
//       { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
//     ],
//   },
// ];
//
// export default ThemeRoutes;
//
