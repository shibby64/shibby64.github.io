import ReactDOM from "react-dom/client";
import RouteWrapper from "./RouteWrapper";
import { BrowserRouter } from "react-router";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import "./static/styles/App.css";
import "./static/styles/Variables.css";
import "./static/styles/Viewport.css";

// Shouldn't need to touch this file unless you want to change the entry point
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div className="site-wrapper">
    <BrowserRouter>
      <Navbar />
      <RouteWrapper />
      <Footer />
    </BrowserRouter>
  </div>
);
