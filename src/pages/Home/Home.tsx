import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
import Laptop from "../../components/Laptop/Laptop";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Kappa Theta Pi</h1>
        <div className={styles.subheading}>
          Professional Technology Fraternity
        </div>
        <NavLink to="/rush" className={styles.navLink}>
          <button className={styles.rushButton}>RUSH</button>
        </NavLink>
      </div>
      <div className={styles.displayContainer}>
        <Laptop />
      </div>
    </div>
  );
}

export default Home;
