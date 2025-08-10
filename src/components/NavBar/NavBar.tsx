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
        <div className={styles.leftSection}>
          <NavLink to={ROUTES.HOME} style={{ textDecoration: "none" }}>
            <div className={styles.headingText}>ΚΘΠ</div>
          </NavLink>
          <div className={styles.chapterText}>OMEGA CHAPTER</div>
        </div>
        <div className={styles.centerSection}>
          <div className={styles.linkWrapper}>
            <NavBarLinks onClick={() => setMenuOpen(false)} highlightActive />
          </div>
        </div>
        <div className={styles.rightSection}>
          {/* this will be used for our website later */}
        </div>
        <GiHamburgerMenu
          className={styles.menuIcon}
          style={{ fontSize: "2rem" }}
          onClick={() => setMenuOpen(true)}
        />
      </div>
      <NavMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default NavBar;
