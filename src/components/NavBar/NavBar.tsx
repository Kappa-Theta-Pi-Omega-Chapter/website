import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import NavBarLinks from "../NavBarLinks/NavBarLinks";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./NavBar.module.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.toolbar}>
        <div className={styles.headingContainer}>
          <NavLink to={ROUTES.HOME} style={{ textDecoration: "none" }}>
            <div className={styles.headingText}>ΚΘΠ</div>
          </NavLink>
          <div className={styles.descriptionContainer}>
            <div className={styles.descriptionText}>KAPPA THETA PI</div>
            <div className={styles.descriptionText}>
              OMEGA COLONY • NORTHEASTERN
            </div>
          </div>
        </div>

        <div className={styles.linkWrapper}>
          <NavBarLinks onClick={() => setMenuOpen(false)} highlightActive />
        </div>
        <GiHamburgerMenu
          className={styles.menuIcon}
          onClick={() => setMenuOpen(true)}
        />
      </div>
      <NavMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default NavBar;
