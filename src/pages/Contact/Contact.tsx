import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaInstagram } from "react-icons/fa";
import "./Contact.css";
import ContactCard from "./components/ContactCard/ContactCard";

function Contact() {
  const contactCards = [
    {
      title: "Students",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Clients",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Companies",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  return (
    <>
      <h1>Contact Us</h1>
      <div className="wrapper">
        <div className="contact-card-wrapper">
          {contactCards.map((c) => <ContactCard title={c.title} content={c.content} />)}
        </div>
        <div className="contact-info-wrapper">
          <a href="mailto:example@gmail.com" className="contact-info-item">
            <MdEmail className="contact-info-icon" />
            example@gmail.com
          </a>
          <a href="tel:1234567890" className="contact-info-item">
            <MdPhone className="contact-info-icon" />
            1234567890
          </a>
          <a href="https://instagram.com/ktpnortheastern" className="contact-info-item">
            <FaInstagram className="contact-info-icon" />
            ktpnortheastern
          </a>
          <a href="https://github.com/ktpNortheastern" className="contact-info-item">
            <FaGithub className="contact-info-icon" />
            ktpNortheastern
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
