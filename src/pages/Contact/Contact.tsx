import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaInstagram } from "react-icons/fa";
import styles from "./Contact.module.css";
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
      <div className={styles.wrapper}>
        <div className={styles.contactCardWrapper}>
          {contactCards.map((c) => <ContactCard title={c.title} content={c.content} />)}
        </div>
        <div className={styles.contactInfoWrapper}>
          <a href="mailto:example@gmail.com" className={styles.contactInfoItem}>
            <MdEmail className={styles.contactInfoIcon} />
            example@gmail.com
          </a>
          <a href="tel:1234567890" className={styles.contactInfoItem}>
            <MdPhone className={styles.contactInfoIcon} />
            1234567890
          </a>
          <a href="https://instagram.com/ktpnortheastern" className={styles.contactInfoItem}>
            <FaInstagram className={styles.contactInfoIcon} />
            ktpnortheastern
          </a>
          <a href="https://github.com/ktpNortheastern" className={styles.contactInfoItem}>
            <FaGithub className={styles.contactInfoIcon} />
            ktpNortheastern
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
