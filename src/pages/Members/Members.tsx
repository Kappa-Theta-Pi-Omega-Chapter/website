import "../Members/Members.css";
import { activeMembers, advisoryBoard, executiveBoard } from "./AllMembers";
import MemberCard from "./components/MemberCard";

function Members() {
  return (
    <div className="wrapper">
      <h1>Executive Board</h1>
      <div className="card-stack">
        {executiveBoard.map((m) => (
          <MemberCard image={m.image} name={m.name} position={m.position} />
        ))}
      </div>
      <h1>Advisory Board</h1>
      <div className="card-stack">
        {advisoryBoard.map((m) => (
          <MemberCard image={m.image} name={m.name} position={m.position} />
        ))}
      </div>
      <h1>Active Members</h1>
      <div className="card-stack">
        {activeMembers.map((m) => (
          <MemberCard image={m.image} name={m.name} position={m.position} />
        ))}
      </div>
    </div>
  );
}

export default Members;
