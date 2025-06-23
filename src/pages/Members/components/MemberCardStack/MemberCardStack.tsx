import styles from "./MemberCardStack.module.css";
import MemberCard, { MemberCardProps } from "../MemberCard/MemberCard";

interface MemberCardStackProps {
  title: string;
  members: Array<MemberCardProps>;
}

function MemberCardStack({ title, members }: MemberCardStackProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>{title}</h2>
      <div className={styles.cardStack}>
        {members.map((m) => (
          <MemberCard
            link={m.link}
            image={m.image}
            name={m.name}
            position={m.position}
            class={m.class}
          />
        ))}
      </div>
    </div>
  );
}

export default MemberCardStack;
