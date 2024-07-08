import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Contact.module.css";
import ContactCard from "./components/ContactCard/ContactCard";

function Contact() {
  const contactCards = [
    {
      title: "Students",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Clients",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Companies",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <>
      <h1>Contact Us</h1>
      <div className={styles.wrapper}>
        <div className={styles.contactCardWrapper}>
          {contactCards.map((c) => (
            <ContactCard title={c.title} content={c.content} />
          ))}
        </div>
        <div className={styles.contactInfoWrapper}>
          <a
            href="mailto:ktp.northeastern@gmail.com"
            className={styles.contactInfoItem}
          >
            <MdEmail className={styles.contactInfoIcon} />
            <span className={styles.contactInfoContent}>
              ktp.northeastern@gmail.com
            </span>
          </a>
          <a
            href="https://instagram.com/ktpboston"
            target="_blank"
            className={styles.contactInfoItem}
          >
            <FaInstagram className={styles.contactInfoIcon} />
            <span className={styles.contactInfoContent}>ktpboston</span>
          </a>
          <a
            href="https://github.com/ktpNortheastern"
            target="_blank"
            className={styles.contactInfoItem}
          >
            <FaGithub className={styles.contactInfoIcon} />
            <span className={styles.contactInfoContent}>ktpNortheastern</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
