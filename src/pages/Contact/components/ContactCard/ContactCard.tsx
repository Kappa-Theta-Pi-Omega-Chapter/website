import styles from "./ContactCard.module.css";

interface ContactCardProps {
    title: string;
    content: string;
}

function ContactCard({title, content}: ContactCardProps) {
  return (
    <div>
        <h2>{title}</h2>
        <p className={styles.contactCardContent}>{content}</p>
    </div>
  );
}

export default ContactCard;
