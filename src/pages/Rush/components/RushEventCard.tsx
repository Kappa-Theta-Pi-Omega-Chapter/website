import styles from "./RushEventCard.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface RushEventCardProps {
  title: string;
  date: string;
  location: string;
  time: string;
  description: string;
  fadeLeft: boolean;
}

const RushEventCard = ({
  title,
  date,
  location,
  time,
  description,
  fadeLeft,
}: RushEventCardProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos={fadeLeft ? "fade-left" : "fade-right"}
      data-aos-duration="1000"
      style={{ width: "75%", display: "flex", justifyContent: "center" }}
    >
      <div className={styles.rushEventCard}>
        <div className={styles.rushEventBasics}>
          <h3 className={styles.rushEventTitle}>{title}</h3>
          <div className={styles.rushEventDescription}>{description}</div>
        </div>

        <div className={styles.rushEventSpecificsContainer}>
          <div className={styles.rushEventLocation}>{location}</div>
          <div className={styles.rushEventDate}>
            {date}, {time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RushEventCard;
