import { IconButton } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import routes from "../../routes";
import styles from "./NavBar.module.css";
import classNames from "classnames";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function NavBar() {
  const currentLink = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuClassNames = classNames(styles.menuWrapper, {
    [styles.menuWrapperOpen]: menuOpen,
  });

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

  const linksToElements = (links: Array<{route: string, text: string}>) => {
    return links.map((link) => (
      <NavLink key={link.text} to={link.route} className={generateClassNames(link.route)} onClick={() => setMenuOpen(false)}>
        {link.text.toUpperCase()}
      </NavLink>
    ))
  }

  return (
    <>
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
        <div className={styles.linkWrapper}>{linksToElements(navLinks)}</div>
        <GiHamburgerMenu className={styles.menuIcon} onClick={() => setMenuOpen(true)} />
      </div>
      <div className={menuClassNames}>
        <div className={styles.menuCloseWrapper}>
          <IoClose className={styles.closeIcon} onClick={() => setMenuOpen(false)} />
        </div>
        <div className={styles.menuLinkWrapper}>{linksToElements(navLinks)}</div>
      </div>
    </>
  );
}

export default NavBar;
