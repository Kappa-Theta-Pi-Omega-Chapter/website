import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import { ROUTES } from "../../constants";
import NavBarLinks from "../NavBarLinks/NavBarLinks";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.toolbar}>
        <NavLink to={ROUTES.HOME}>
          <img className={styles.homeImg} src="/src/assets/KTP_Text_Logo.png" />
        </NavLink>
        <div className={styles.linkWrapper}>
          <NavBarLinks onClick={() => setMenuOpen(false)} highlightActive />
        </div>
        <GiHamburgerMenu className={styles.menuIcon} onClick={() => setMenuOpen(true)} />
      </div>
      <NavMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default NavBar;
