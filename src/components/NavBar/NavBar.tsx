import { IconButton, Stack, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import "./NavBar.css";

function NavBar() {
  const navLinks = [
    { route: routes.ABOUT_US, text: "About Us" },
    { route: routes.RUSH, text: "Rush" },
    { route: routes.MEMBERS, text: "Members" },
    { route: routes.CONTACT_US, text: "Contact" },
  ];

  return (
    <Toolbar
      sx={{
        borderColor: "black",
        height: 70,
        width: "100%",
        backgroundColor: "white",
        boxShadow: "0 10px 10px rgba(211, 211, 211, 0.5)",
      }}
    >
      <NavLink to={routes.HOME}>
        <IconButton
          edge="start"
          aria-label="logo"
          style={{ padding: 0, width: 65, height: 25 }}
        >
          <img
            src="/src/assets/KTP_Text_Logo.png"
            width={"100%"}
            height={"100%"}
          />
        </IconButton>
      </NavLink>
      <Stack direction="row" spacing={3} sx={{ marginLeft: "auto" }}>
        {navLinks.map((link) => (
          <NavLink to={link.route} className={"nav-link"}>
            {link.text.toUpperCase()}
          </NavLink>
        ))}
      </Stack>
    </Toolbar>
  );
}

export default NavBar;
