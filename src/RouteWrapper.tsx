import { Route, Routes } from "react-router";
import RouteList from "./pages/Routes";
import Page from "./pages/Page";

function RouteWrapper() {
  return (
    <Routes>
      {RouteList.map((item) => (
        <Route
          key={item.route}
          path={item.route}
          element={<Page title={item.label} children={item.component}></Page>}
        />
      ))}
    </Routes>
  );
}

export default RouteWrapper;
