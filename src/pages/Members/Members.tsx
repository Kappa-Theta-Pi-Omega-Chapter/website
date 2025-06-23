import { activeMembers, executiveBoard } from "./AllMembers";
import MemberCardStack from "./components/MemberCardStack/MemberCardStack";
import styles from "./Members.module.css";

function Members() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <MemberCardStack
          title="Meet our Executive Board"
          members={executiveBoard}
        />
        <MemberCardStack title="Active Members" members={activeMembers} />
      </div>
    </div>
  );
}

export default Members;
