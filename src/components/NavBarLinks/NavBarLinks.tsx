import { NavLink, useLocation } from "react-router-dom";
import styles from "./NavBarLinks.module.css";
import classNames from "classnames";
import { NAVBAR_ROUTES } from "../../constants";

interface NavBarLinksProps {
    highlightActive?: boolean;
    onClick: () => void;
}

function NavBarLinks({highlightActive, onClick}: NavBarLinksProps) {
  const currentLink = useLocation();

  const generateClassNames = (route: string) => {
    return (
      highlightActive && route == currentLink.pathname ?
      classNames(styles.navLink, styles.navLinkActive) :
      styles.navLink
    );
  }

  return NAVBAR_ROUTES.map((link) => (
    <NavLink key={link.text} to={link.route} className={generateClassNames(link.route)} onClick={onClick}>
        {link.text}
    </NavLink>));
}

export default NavBarLinks;
