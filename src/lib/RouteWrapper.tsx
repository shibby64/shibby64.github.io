import { Route, Routes } from "react-router";
import RouteList, { RouteLeaf } from "../pages/Routes";
import Page from "../pages/Page";

const renderRoute = (route: RouteLeaf) => {
  const component = <Page title={route.label} children={route.component} />;
  return <Route key={route.route} path={route.route} element={component} />;
};

function RouteWrapper() {
  return (
    <Routes>
      {RouteList.map((route) => {
        if (route.type === "leaf") {
          return renderRoute(route);
        } else if (route.type === "nested") {
          return route.leaves.map((leaf) => renderRoute(leaf));
        }
        return null;
      })}
    </Routes>
  );
}

export default RouteWrapper;
