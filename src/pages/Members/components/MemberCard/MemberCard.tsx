import styles from "./MemberCard.module.css";
import { FaLinkedin } from "react-icons/fa";
import { classToGreekLetter } from "../../AllMembers";

export interface MemberCardProps {
  image: string;
  name: string;
  position?: string;
  link?: string;
  class?: string;
}

function MemberCard({ image, name, position, link, class: memberClass }: MemberCardProps) {
  const greekLetter = memberClass ? classToGreekLetter[memberClass] : null;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <a target="_blank" href={link}>
          <img src={image} alt={name} className={styles.memberImage} />
        </a>
        <div className={styles.linkedinOverlay}>
          <FaLinkedin className={styles.linkedinIcon} />
        </div>
        {greekLetter && (
          <div className={styles.greekLetterOverlay}>
            <span className={styles.greekLetter}>{greekLetter}</span>
          </div>
        )}
      </div>
      <div className={styles.cardContent}>
        <h3>{name}</h3>
        {!!position && <p>{position}</p>}
      </div>
    </div>
  );
}

export default MemberCard;
