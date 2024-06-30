import { IoClose } from "react-icons/io5";
import styles from "./NavMenu.module.css";
import classNames from "classnames";
import NavBarLinks from "../NavBarLinks/NavBarLinks";

interface NavMenuProps {
    open: boolean;
    onClose: () => void;
}

function NavMenu({open, onClose}: NavMenuProps) {
    const menuClassNames = classNames(styles.menuWrapper, {
        [styles.menuWrapperOpen]: open,
    });

    return (
        <div className={menuClassNames}>
            <div className={styles.menuCloseWrapper}>
                <IoClose className={styles.closeIcon} onClick={onClose} />
            </div>
            <div className={styles.menuLinkWrapper}>
                <NavBarLinks onClick={onClose} />
            </div>
        </div>
    )
}

export default NavMenu;
