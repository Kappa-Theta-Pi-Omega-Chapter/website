import { IconButton, Stack } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import routes from "../../routes";
import styles from "./NavBar.module.css";
import classNames from "classnames";

function NavBar() {
  const currentLink = useLocation();

  const navLinks = [
    { route: routes.ABOUT_US, text: "About Us" },
    { route: routes.RUSH, text: "Rush" },
    { route: routes.MEMBERS, text: "Members" },
    { route: routes.CONTACT_US, text: "Contact" },
  ];

  const generateClassNames = (route: string) => {
    return (
      route == currentLink.pathname ?
      classNames(styles.navLink, styles.navLinkActive) :
      styles.navLink
    );
  }

  return (
    <div className={styles.toolbar}>
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
      <Stack direction="row" spacing={4} sx={{ marginLeft: "auto" }}>
        {navLinks.map((link) => (
          <NavLink to={link.route} className={generateClassNames(link.route)}>
            {link.text.toUpperCase()}
          </NavLink>
        ))}
      </Stack>
    </div>
  );
}

export default NavBar;
