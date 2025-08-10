import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contentWrapper}>
      <section className={styles.section}>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.intro}>
          Reach out for questions, collaborations, or to connect with our chapter!
        </p>
      </section>
      <section className={styles.section}>
        <div className={styles.cardGrid}>
          <div className={styles.contactCard}>
            <img
              src="/social_pic.png"
              alt="Students Social"
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>Students</h4>
              <p className={styles.cardText}>
                Hello, prospectives! We're excited that you're interested in
                learning about our fraternity, and we're here to support you
                throughout the process. If you have any questions about our
                organization, upcoming events, or how to get involved, don't
                hesitate to contact us. Our team is ready to provide all the
                details you need to make an informed choice about joining us. Just
                send us an email at <a href="mailto:ktp.northeastern@gmail.com" className={styles.hyperlink}>
                  ktp.northeastern@gmail.com</a>, and we'll respond
                promptly. We can't wait to connect with you and share the amazing
                experiences our fraternity offers.
              </p>
            </div>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>Companies</h4>
              <p className={styles.cardText}>
                Hello, companies and potential collaborators! We appreciate your
                interest in partnering with us. We believe that strong partnerships
                are key to driving innovation and achieving success. If you're
                interested in exploring opportunities for collaboration,
                sponsorship, or other business-related inquiries, we'd love to hear
                from you. We're excited to discuss how we can work together to
                reach our shared goals and create a lasting impact. Please feel
                free to contact us at <a href="mailto:ktp.northeastern@gmail.com" className={styles.hyperlink}>
                  ktp.northeastern@gmail.com</a>, and our
                dedicated team will be thrilled to connect with you. Let's embark
                on a journey of growth and success together.
              </p>
            </div>
            <img
              src="/professional.PNG"
              alt="Companies Professional"
              className={styles.cardImage}
            />
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h3 className={styles.infoHeading}>Connect with us</h3>
        <div className={styles.contactInfoGrid}>
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
            href="https://instagram.com/ktpneu"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactInfoItem}
          >
            <FaInstagram className={styles.contactInfoIcon} />
            <span className={styles.contactInfoContent}>ktpneu</span>
          </a>
          <a
            href="https://github.com/Kappa-Theta-Pi-Omega-Chapter"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactInfoItem}
          >
            <FaGithub className={styles.contactInfoIcon} />
            <span className={styles.contactInfoContent}>ktpNortheastern</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
