import { Routes } from "react-router";
import RouteList from "../pages/Routes";

function RouteWrapper() {
  return <Routes>{RouteList.map()}</Routes>;
}

export default RouteWrapper;
