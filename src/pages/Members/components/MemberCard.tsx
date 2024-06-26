import "../components/MemberCard.css";

interface MemberCardProps {
  image: string;
  name: string;
  position: string;
}

function MemberCard({ image, name, position }: MemberCardProps) {
  return (
    <div className="card">
      <img src={image} alt={`${name}'s photo`} className="member-image" />
      <div className="card-content">
        <h2 className="member-title">{name}</h2>
        <p className="member-position">{position}</p>
      </div>
    </div>
  );
}

export default MemberCard;
