import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import routes from "./routes";
import AboutUs from "./pages/AboutUs";
import Rush from "./pages/Rush";
import Members from "./pages/Members";
import Contact from "./pages/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import { Stack } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Stack>
        <NavBar />
        <div className="content-wrapper">
          <Routes>
            <Route path={routes.HOME} element={<Home />} />
            <Route path={routes.ABOUT_US} element={<AboutUs />} />
            <Route path={routes.RUSH} element={<Rush />} />
            <Route path={routes.MEMBERS} element={<Members />} />
            <Route path={routes.CONTACT_US} element={<Contact />} />
          </Routes>
        </div>
      </Stack>
    </BrowserRouter>
  );
}

export default App;
