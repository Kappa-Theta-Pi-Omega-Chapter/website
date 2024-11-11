import { FaInstagram } from "react-icons/fa";
import styles from "../Rush/Rush.module.css";
import RushEventCard from "./components/RushEventCard";

function Rush() {
  const events = [
    // {
    //   title: "Info Session",
    //   date: "September 10th",
    //   location: "TBD",
    //   time: "8:00 PM",
    //   description:
    //     "Come learn about KTP and what we do! Learn about our upcoming events, rush process, and ask questions.",
    // },
    // {
    //   title: "Meet The Brothers BBQ",
    //   date: "September 11th",
    //   location: "TBD",
    //   time: "8:00 PM",
    //   description:
    //     "Join us for a BBQ to meet the brothers and learn more about our fraternity!",
    // },
    // {
    //   title: "Resume Workshop",
    //   date: "September 12th",
    //   location: "TBD",
    //   time: "8:00 PM",
    //   description:
    //     "Attend a hands-on workshop on resume building and interview skills.",
    // },
    // {
    //   title: "2nd Info Session",
    //   date: "September 17th",
    //   location: "TBD",
    //   time: "8:00 PM",
    //   description:
    //     "Learn more about our plans for the semester, national alumni network, and the core pillars of our fraternity.",
    // },
    // {
    //   title: "Co-op Panel/Networking",
    //   date: "September 18th",
    //   location: "TBD",
    //   time: "8:00 PM",
    //   description:
    //     "Attend our panel of brothers who have gone through the co-op process, hear about their experiences in industry, and network with them.",
    // },
    // {
    //   title: "APPLICATIONS DUE",
    //   date: "September 19th",
    //   location: "",
    //   time: "6:00 PM",
    //   description: "Formally submit your application to rush KTP.",
    // },
    // {
    //   title: "Interview I - Invite Only",
    //   date: "September 21st",
    //   location: "TBD",
    //   time: "Afternoon",
    //   description: "First round of interviews.",
    // },
    {
      title: "Fall rush over! Spring rush coming soon!",
      date: "",
      location: "",
      time: "",
      description:
        "Kappa Theta Pi has concluded its Fall rush events and admitted it's first ever pledge class. Stay tuned for Spring rush events!",
    },
  ];
  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <h2 className={styles.rushTitle}>Interested in rushing KTP?</h2>
          <div className={styles.rushInfo}>
            Follow us on instagram to stay up to date on rush!
          </div>
          <a
            target="_blank"
            href="https://instagram.com/ktpneu"
            className={styles.rushInfoItem}
          >
            <FaInstagram className={styles.rushInfoIcon} />
            ktpneu
          </a>
        </div>
      </section>
      <section>
        <div className={styles.wrapper}>
          <h2 className={styles.rushTitle}>Rush Events (Fall '24)</h2>
          <div className={styles.rushContainer}>
            {events.map((event, index) => (
              <RushEventCard
                key={index}
                fadeLeft={index % 2 === 0}
                title={event.title}
                date={event.date}
                location={event.location}
                time={event.time}
                description={event.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Rush;
