import "./Home.css";
import { FaLocationDot } from "react-icons/fa6";

function Home() {
  return (
    <div className="header-wrapper">
      <h1>Kappa Theta Pi</h1>
      <h2>Professional Technology Fraternity</h2>
      <h3><FaLocationDot className="icon" />Boston, MA</h3>
    </div>
  );
}

export default Home;
