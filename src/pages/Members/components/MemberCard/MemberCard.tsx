import styles from "./MemberCard.module.css";

export interface MemberCardProps {
  image: string;
  name: string;
  position?: string;
}

function MemberCard({ image, name, position }: MemberCardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.memberImage} />
      <div className={styles.cardContent}>
        <h3>{name}</h3>
        {!!position && <p>{position}</p>}
      </div>
    </div>
  );
}

export default MemberCard;
