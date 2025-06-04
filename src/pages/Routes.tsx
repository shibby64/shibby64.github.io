import React from "react";
import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import About from "./About/About";
import TestPage from "./TestPage/TestPage";
import Music from "./Projects/Music/Music";
import Photography from "./Projects/Photography/Photography";

export type LeafRoute = {
  label: string;
  route: string;
  component: React.ReactNode; // Optional component for direct rendering
};

export type NestedRoute = {
  label: string;
  children: LeafRoute[];
};

type Routes = LeafRoute | NestedRoute;

const RouteList: Routes[] = [
  { label: "Home", route: "/", component: <Home /> },
  { label: "Blog", route: "/blog", component: <Blog /> },
  { label: "About", route: "/about", component: <About /> },
  { label: "Test", route: "/test", component: <TestPage /> },
  {
    label: "Projects",
    children: [
      { label: "Music", route: "/music", component: <Music /> },
      { label: "Photography", route: "/photography", component: <Photography /> },
    ],
  },
];

export default RouteList;
