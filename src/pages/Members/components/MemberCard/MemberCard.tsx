import styles from "./MemberCard.module.css";

export interface MemberCardProps {
  image: string;
  name: string;
  position?: string;
  link?: string;
}

function MemberCard({ image, name, position, link }: MemberCardProps) {
  return (
    <div className={styles.card}>
      <a target="_blank" href={link}>
        <img src={image} alt={name} className={styles.memberImage} />
      </a>
      <div className={styles.cardContent}>
        <h3>{name}</h3>
        {!!position && <p>{position}</p>}
      </div>
    </div>
  );
}

export default MemberCard;
