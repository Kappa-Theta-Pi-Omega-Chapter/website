import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { ROUTES } from "./constants";
import "./index.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Members from "./pages/Members/Members";
import Rush from "./pages/Rush/Rush";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="content-wrapper">
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.MEMBERS} element={<Members />} />
          <Route path={ROUTES.CONTACT_US} element={<Contact />} />
        </Routes>
      </div>
      <Routes>
        <Route path={ROUTES.RUSH} element={<Rush />} />
        <Route path={ROUTES.ABOUT_US} element={<About />} />
      </Routes>
      <Route path="*" element={<Home />} />
    </BrowserRouter>
  );
}

export default App;
