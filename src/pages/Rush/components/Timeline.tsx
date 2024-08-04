import styles from "./Timeline.module.css";

const events = [
  {
    date: "January 2024",
    description: "KTP Spring Rush Begins",
    location: "Dodge Hall",
  },
  {
    date: "February 2024",
    description: "Rush Events and Meetups",
    location: "Dodge Hall",
  },
  {
    date: "March 2024",
    description: "Interviews and Final Selections",
    location: "Dodge Hall",
  },
  {
    date: "April 2024",
    description: "New Member Induction",
    location: "Dodge Hall",
  },
];

function Timeline() {
  return (
    <div className={styles.timeline}>
      <h2 className={styles.title}>Timeline</h2>
      <div className={styles.events}>
        {events.map((event, index) => (
          <div key={index} className={styles.event}>
            <div className={styles.date}>{event.date}</div>
            <div className={styles.description}>{event.description}</div>
            <div className={styles.location}>Location: {event.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
