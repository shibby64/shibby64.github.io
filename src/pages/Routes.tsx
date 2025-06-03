import React from "react";
import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import About from "./About/About";
import TestPage from "./TestPage/TestPage";

type Route = {
  label: string;
  route: string;
  component: React.ReactNode; // Optional component for direct rendering
};

const RouteList: Route[] = [
  { label: "Home", route: "/", component: <Home /> },
  { label: "Blog", route: "/blog", component: <Blog /> },
  { label: "About", route: "/about", component: <About /> },
  { label: "Test", route: "/test", component: <TestPage /> },
];

export default RouteList;
