import { FaInstagram } from "react-icons/fa";
import styles from "../Rush/Rush.module.css";

function Rush() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.rushTitle}>Interested in rushing KTP?</h2>
      <div className={styles.rushInfo}>
        Follow us on instagram to stay up to date on rush!
      </div>
      <a
        href="https://instagram.com/ktpnortheastern"
        className={styles.rushInfoItem}
      >
        <FaInstagram className={styles.rushInfoIcon} />
        ktpnortheastern
      </a>
    </div>
  );
}

export default Rush;
