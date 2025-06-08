import { Route, Routes } from "react-router";
import RouteList, { RouteBranch, RouteLeaf } from "../pages/Routes";
import Page from "../pages/Page";

const renderRoute = (route: RouteLeaf) => {
  const component = <Page title={route.label} children={route.component} />;
  return <Route key={route.route} path={route.route} element={component} />;
};

const renderNestedRoutes = (parent: RouteBranch) => {
  const parentElement = <Page title={parent.label} children={parent.component} />;
  return (
    <Route path={parent.route}>
      <Route index element={parentElement}></Route>
      {parent.leaves.map((leaf) => renderRoute(leaf))}
    </Route>
  );
};

function RouteWrapper() {
  return (
    <Routes>
      {RouteList.map((route) => {
        if (route.type === "leaf") {
          return renderRoute(route); // leaf route: un-nested
        } else if (route.type === "branch" && !route.component) {
          return route.leaves.map((leaf) => renderRoute(leaf)); // branch route: leaves un-nested
        } else if (route.type === "branch" && route.component) {
          console.log(route);
          return renderNestedRoutes(route); // branch route: leaves nested
        }
        return null;
      })}
    </Routes>
  );
}

export default RouteWrapper;
