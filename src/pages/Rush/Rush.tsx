import { FaRegQuestionCircle } from "react-icons/fa";
import styles from "./Rush.module.css";

function Rush() {
  const events = [
    {
      title: "Info Session 1",
      date: "Mon, Jan 15",
      time: "7:00 PM",
      location: "Snell Library 90",
      description:
        "Come learn about KTP and what we do! Learn about our upcoming events, rush process, and ask questions.",
    },
    {
      title: "Meet The Brothers Social",
      date: "Wed, Jan 17",
      time: "6:30 PM",
      location: "Curry Student Center",
      description:
        "Join us for a casual social to meet the brothers and learn more about our fraternity!",
    },
    {
      title: "Resume & Co-op Workshop",
      date: "Fri, Jan 19",
      time: "8:00 PM",
      location: "Richards Hall 235",
      description:
        "Attend a hands-on workshop on resume building and hear from brothers about their co-op experiences.",
    },
    {
      title: "Info Session 2",
      date: "Mon, Jan 22",
      time: "7:00 PM",
      location: "West Village H 102",
      description:
        "Learn more about our plans for the semester, national alumni network, and the core pillars of our fraternity.",
    },
    {
      title: "APPLICATIONS DUE",
      date: "Fri, Jan 26",
      time: "11:59 PM",
      location: "Online",
      description: "Formally submit your application to rush KTP.",
    },
    {
      title: "Interviews",
      date: "Jan 28 - Feb 3",
      time: "Invite Only",
      location: "TBD",
      description:
        "First and Final round interviews for selected candidates. This is your chance to show us why you belong in KTP.",
    },
  ];

  const faqs = [
    {
      question: "What is Kappa Theta Pi?",
      answer:
        "Kappa Theta Pi is the first professional technology fraternity in the country. We focus on academic support, professional development, technical advancement, social growth, and alumni connections.",
    },
    {
      question: "Do I need to be a computer science major to rush?",
      answer:
        "No! We welcome students from all majors who have an interest in technology. Our brothers come from diverse backgrounds including engineering, business, design, and more.",
    },
    {
      question: "What is the time commitment like?",
      answer:
        "Active members typically spend 5-10 hours per week on fraternity activities, including meetings, events, and projects. We understand the importance of academics and work with your schedule.",
    },
    {
      question: "Is there a GPA requirement?",
      answer:
        "Yes, we require a minimum GPA of 3.0 to be eligible for membership. We value academic excellence and want to ensure our members can balance their commitments effectively.",
    },
    {
      question: "How do I apply?",
      answer:
        "You can apply through the application link on this page once it's live. Make sure to follow us on Instagram and join our Google Calendar to stay updated!",
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Learn about joining KTP!</h1>
          <p className={styles.subtitle}>
            Welcome to Kappa Theta Pi's Fall 2025 Rush!
          </p>
          <p className={styles.subtitle}>
            Here's our rush schedule, applications are due 9/16/2025 {/* TODO: update rush schedule */}
          </p>
          <div className={styles.buttons}>
            <a href="https://forms.gle/exampL3" target="_blank" rel="noopener noreferrer" className={styles.button}>
              Interest Form
            </a>
            <a href="https://forms.gle/exampL3" target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.buttonSecondary}`}>
              Application Link
            </a>
          </div>
          {/* TODO: maybe we can create a calendar link */}
          {/* <p className={styles.calendarLink}>
            You can also join our{" "}
            <a href="https://calendar.google.com/calendar/u/0/r" target="_blank" rel="noopener noreferrer">W25 Rush Google Calendar</a> for
            dates/times/locations for all of our Open Rush events.
          </p> */}
        </div>
      </header>

      <main className={styles.mainContent}>
        <section id="schedule" className={styles.section}>
          <h2 className={styles.sectionTitle}>Rush Schedule</h2>
          <div className={styles.timeline}>
            {events.map((event, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineConnector}>
                  <div className={styles.timelineDot}></div>
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.eventDetails}>
                    {event.date} &bull; {event.time} &bull; {event.location}
                  </p>
                  <p className={styles.eventDescription}>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className={styles.section}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  <FaRegQuestionCircle className={styles.faqIcon} />
                  {faq.question}
                </h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Rush;
