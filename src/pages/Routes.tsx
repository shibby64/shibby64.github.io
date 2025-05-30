import React from "react";
import Home from "./Home/Home";
import Blog from "./Blog/Blog";

type Route = {
  label: string;
  route: string;
  component: React.ReactNode; // Optional component for direct rendering
};

const RouteList: Route[] = [
  { label: "Home", route: "/", component: <Home /> },
  { label: "Blog", route: "/blog", component: <Blog /> },
];

export default RouteList;
