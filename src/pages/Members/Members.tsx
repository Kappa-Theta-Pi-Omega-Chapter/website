import { activeMembers, executiveBoard } from "./AllMembers";
import MemberCardStack from "./components/MemberCardStack/MemberCardStack";

function Members() {
  return (
    <>
      <MemberCardStack
        title="Meet our Executive Board"
        members={executiveBoard}
      />
      <MemberCardStack title="Active Members" members={activeMembers} />
    </>
  );
}

export default Members;
