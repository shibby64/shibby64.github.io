import React from "react";
import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import About from "./About/About";
import TestPage from "./TestPage/TestPage";
import Music from "./Projects/Music/Music";
import Photography from "./Projects/Photography/Photography";

import postsIndex from "../blog_posts/index.json";
import PostWrapper from "./Blog/components/PostWrapper";

export type RouteLeaf = {
  type: "leaf";
  label: string;
  route: string;
  component: React.ReactNode;
};

export type RouteBranch = {
  type: "branch";
  label: string;
  route: string;
  component?: React.ReactNode; // if component is supplied, navbar button will take you there. Otherwise, navbar will render a dropdown
  leaves: RouteLeaf[];
};

type Routes = RouteLeaf | RouteBranch;

const blogPostsToRoutes = postsIndex.posts.map((post) => {
  const blogPostComponent = require(`../blog_posts/posts/${post.filename}`);
  const x: RouteLeaf = {
    type: "leaf",
    label: post.title,
    route: post.route,
    component: (
      <PostWrapper postMetadata={post}>
        <blogPostComponent.default />
      </PostWrapper>
    ),
  };
  return x;
});

const RouteList: Routes[] = [
  { type: "leaf", label: "Home", route: "/", component: <Home /> },
  { type: "branch", label: "Blog", route: "/blog", component: <Blog />, leaves: blogPostsToRoutes },
  {
    type: "branch",
    label: "Projects",
    route: "/projects",
    leaves: [
      { type: "leaf", label: "Music", route: "/music", component: <Music /> },
      { type: "leaf", label: "Photography", route: "/photography", component: <Photography /> },
    ],
  },
  { type: "leaf", label: "About", route: "/about", component: <About /> },
  { type: "leaf", label: "Test", route: "/test", component: <TestPage /> },
];

export default RouteList;
