import { activeMembers, advisoryBoard, executiveBoard } from "./AllMembers";
import MemberCardStack from "./components/MemberCardStack/MemberCardStack";

function Members() {
  return (
    <>
      <h1>Members</h1>
      <MemberCardStack title="Executive Board" members={executiveBoard} />
      <MemberCardStack title="Advisory Board" members={advisoryBoard} />
      <MemberCardStack title="Active Members" members={activeMembers} />
    </>
  );
}

export default Members;
