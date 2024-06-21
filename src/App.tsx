import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import routes from "./routes";
import AboutUs from "./pages/AboutUs";
import Rush from "./pages/Rush";
import Members from "./pages/Members";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ABOUT_US} element={<AboutUs />} />
        <Route path={routes.RUSH} element={<Rush />} />
        <Route path={routes.MEMBERS} element={<Members />} />
        <Route path={routes.CONTACT_US} element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
