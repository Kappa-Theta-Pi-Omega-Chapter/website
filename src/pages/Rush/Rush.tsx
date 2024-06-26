import { FaInstagram } from "react-icons/fa";
import "../Rush/Rush.css";

function Rush() {
  return (
    <>
      <h1>Rush</h1>
      <div className="wrapper">
        <h2 className="rush-title">Interested in rushing KTP?</h2>
        <div className="rush-info">
          Follow us on instagram to stay up to date on rush!
        </div>
        <a
          href="https://instagram.com/ktpnortheastern"
          className="rush-info-item"
        >
          <FaInstagram className="rush-info-icon" />
          ktpnortheastern
        </a>
      </div>
    </>
  );
}

export default Rush;
