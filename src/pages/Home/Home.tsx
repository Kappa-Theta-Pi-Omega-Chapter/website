import { NavLink } from "react-router-dom";
import ComputerScreen from "../../assets/Computer-Image.png";
import styles from "./Home.module.css";

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
        <img
          src={ComputerScreen}
          alt="Example computer screen"
          className={styles.computer}
        />
      </div>
    </div>
  );
}

export default Home;
