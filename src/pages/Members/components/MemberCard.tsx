import styles from "./MemberCard.module.css";

interface MemberCardProps {
  image: string;
  name: string;
  position: string;
}

function MemberCard({ image, name, position }: MemberCardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={`${name}'s photo`} className={styles.memberImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.memberTitle}>{name}</h2>
        <p className={styles.memberPosition}>{position}</p>
      </div>
    </div>
  );
}

export default MemberCard;
