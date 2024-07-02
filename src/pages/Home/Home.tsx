import { FaLocationDot } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.wrapper}>
      <h1>Kappa Theta Pi</h1>
      <h2>Professional Technology Fraternity</h2>
      <h3>
        <IoSchool className={styles.icon} />
        Northeastern University
      </h3>
      <h3>
        <FaLocationDot className={styles.icon} />
        Boston, MA
      </h3>
      <h3>
        <NavLink to="/rush" className={styles.navLink}>
          <button className={styles.rushButton}>Rush!</button>
        </NavLink>
      </h3>
    </div>
  );
}

export default Home;
