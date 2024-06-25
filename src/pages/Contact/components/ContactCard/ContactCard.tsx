import "./ContactCard.css";

interface ContactCardProps {
    title: string;
    content: string;
}

function ContactCard({title, content}: ContactCardProps) {
  return (
    <div className="contact-card">
        <h2>{title}</h2>
        <p className="contact-card-content">{content}</p>
    </div>
  );
}

export default ContactCard;
