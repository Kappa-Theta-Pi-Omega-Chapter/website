import { IconButton, Stack, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { PrimaryDarkBlue } from "../colors";
import routes from "../routes";
import Text from "./Text";

function NavBar() {
  const navLinks = [
    { route: routes.ABOUT_US, text: "About us" },
    { route: routes.RUSH, text: "Rush" },
    { route: routes.MEMBERS, text: "Members" },
    { route: routes.CONTACT_US, text: "Contact us" },
  ];

  return (
    <Toolbar
      sx={{
        borderColor: "black",
        height: 70,
        width: "100%",
        backgroundColor: "white",
        boxShadow: 1,
      }}
    >
      <NavLink to={routes.HOME}>
        <IconButton
          edge="start"
          aria-label="logo"
          style={{ padding: 0, width: 135, height: 50 }}
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
          <NavLink to={link.route} style={{ textDecoration: "none" }}>
            <Text color={PrimaryDarkBlue} fontSize={18}>
              {link.text}
            </Text>
          </NavLink>
        ))}
      </Stack>
    </Toolbar>
  );
}

export default NavBar;
