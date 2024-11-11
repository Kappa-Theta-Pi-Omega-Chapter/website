import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Contact.module.css";
import ContactCard from "./components/ContactCard/ContactCard";

function Contact() {
  const contactCards = [
    {
      title: "Students",
      content:
        "Hello, prospectives! We're excited that you're interested in learning about our fraternity, and we're here to support you throughout the process. If you have any questions about our organization, upcoming events, or how to get involved, don't hesitate to contact us. Our team is ready to provide all the details you need to make an informed choice about joining us. Just send us an email at ktp.northeastern@gmail.com, and we'll respond promptly. We can't wait to connect with you and share the amazing experiences our fraternity offers.",
    },
    {
      title: "Companies",
      content:
        "Hello, companies and potential collaborators! We appreciate your interest in partnering with us. We believe that strong partnerships are key to driving innovation and achieving success. If you're interested in exploring opportunities for collaboration, sponsorship, or other business-related inquiries, we’d love to hear from you. We're excited to discuss how we can work together to reach our shared goals and create a lasting impact. Please feel free to contact us at ktp.northeastern@gmail.com, and our dedicated team will be thrilled to connect with you. Let's embark on a journey of growth and success together.",
    },
  ];

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.contactCardWrapper}>
          {contactCards.map((c) => (
            <ContactCard title={c.title} content={c.content} />
          ))}
        </div>
        <div className={styles.contactInfoWrapper}>
          <div className={styles.contactInfoGroup}>
            {" "}
            <a
              href="mailto:ktp.northeastern@gmail.com"
              className={styles.contactInfoItem}
            >
              <MdEmail className={styles.contactInfoIcon} />
              <span className={styles.contactInfoContent}>
                ktp.northeastern@gmail.com
              </span>
            </a>
          </div>
          <div className={styles.contactInfoGroup}>
            <a
              href="https://instagram.com/ktpneu"
              target="_blank"
              className={styles.contactInfoItem}
            >
              <FaInstagram className={styles.contactInfoIcon} />
              <span className={styles.contactInfoContent}>ktpneu</span>
            </a>
          </div>
          <div className={styles.contactInfoGroup}>
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
      </div>
    </>
  );
}

export default Contact;
