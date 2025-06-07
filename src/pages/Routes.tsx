import React from "react";
import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import About from "./About/About";
import TestPage from "./TestPage/TestPage";
import Music from "./Projects/Music/Music";
import Photography from "./Projects/Photography/Photography";

export type RouteLeaf = {
  type: "leaf";
  label: string;
  route: string;
  component: React.ReactNode; // Optional component for direct rendering
};

export type RouteBranch = {
  type: "nested";
  label: string;
  leaves: RouteLeaf[];
};

type Routes = RouteLeaf | RouteBranch;

const RouteList: Routes[] = [
  { type: "leaf", label: "Home", route: "/", component: <Home /> },
  { type: "leaf", label: "Blog", route: "/blog", component: <Blog /> },
  {
    type: "nested",
    label: "Projects",
    leaves: [
      { type: "leaf", label: "Music", route: "/music", component: <Music /> },
      { type: "leaf", label: "Photography", route: "/photography", component: <Photography /> },
    ],
  },
  { type: "leaf", label: "About", route: "/about", component: <About /> },
  { type: "leaf", label: "Test", route: "/test", component: <TestPage /> },
];

export default RouteList;
