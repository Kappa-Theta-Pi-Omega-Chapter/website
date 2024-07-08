import classNames from "classnames";
import styles from "./About.module.css";
import PillarCard from "./components/PillarCard/PillarCard";
import KeyValueDisplay from "./components/KeyValueDisplay/KeyValueDisplay";

function About() {
  const bullets = [
    {key: "Founded Nationally", value: "January 10th, 2012"},
    {key: "Founded at Northeastern", value: "2024"},
    {key: "Motto", value: "\"For the Love of Technology\""},
  ]

  const pillars = [
    {title: "Academic Support", content: "Kappa Theta Pi brothers strive to foster academic growth and excellence for each other. We provide a supportive network filled with some of the brightest tech minds at the university that members can always rely on for help in classes and extracurricular activities."},
    {title: "Alumni Connections", content: "Our alumni are spread out across the world and work on cutting-edge technologies. They work at a plethora of companies - from tech companies like Microsoft, Amazon, Facebook, Apple, and Google, to startups, consulting firms, financial technology firms, and more!"},
    {title: "Professional Development", content: "Through events like interview training, resume building, one-on-one mentorship, private company recruiting, and more, Kappa Theta Pi Professional Development aims to prepare members for success in any technology-related career. We take pride in developing the tech leaders of the future."},
    {title: "Social Growth", content: "The people you meet in Kappa Theta Pi will go on to be some of your closest friends throughout college and beyond. We host a variety of exclusive social events throughout the semester through which our members can bond, some of which include formal, tailgates, retreat, and apple picking."},
    {title: "Technical Advancement", content: "Kappa Theta Pi provides members numerous opportunities to enhance their current technical skills, as well as learn new ones. Whether it be participation in one of our various project teams or attending a technical workshop, we make it easy for our members to expand their expertise."},
  ];

  return (
    <div className={styles.contentWrapper}>
      <h1 className={styles.header}>About</h1>
      <section className={classNames(styles.section, styles.historySection)}>
        <h2>History</h2>
        <div className={styles.historyContent}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className={styles.historyBullets}>
          {bullets.map((b) => <KeyValueDisplay key={b.key} title={b.key} value={b.value} />)}
        </div>
      </section>
      <section className={styles.section}>
        <h2>Pillars</h2>
        <div className={styles.pillarsWrapper}>
          {pillars.map((p) => (
            <PillarCard key={p.title} title={p.title} content={p.content} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
