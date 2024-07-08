import styles from "./PillarCard.module.css";

interface PillarCardProps {
    title: string;
    content: string;
}

function PillarCard({title, content}: PillarCardProps) {
  return (
    <div className={styles.card}>
        <h3>{title}</h3>
        <p className={styles.cardContent}>{content}</p>
    </div>
  );
}

export default PillarCard;
