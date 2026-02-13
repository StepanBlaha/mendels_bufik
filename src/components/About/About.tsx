import styles from "./About.module.css";

const team = [
  {
    name: "Terka",
    role: "Head Baker",
    bio: "Wakes up at dawn to make sure every croissant is golden and every cupcake is frosted to perfection.",
    image: "/images/team-1.jpg",
    alt: "Terka, head baker",
  },
  {
    name: "Honza",
    role: "Sandwich Artist",
    bio: "Assembles the freshest baguettes and wraps. If you see a smile behind the counter, it is probably his.",
    image: "/images/team-2.jpg",
    alt: "Honza, sandwich artist",
  },
  {
    name: "Lucka",
    role: "Coffee & Drinks",
    bio: "Brews the perfect latte every time and always knows your usual order by heart.",
    image: "/images/team-3.jpg",
    alt: "Lucka, barista",
  },
];

export default function Team() {
  return (
    <section className={styles.section} id="team">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>Our Team</span>
          <h2 className={styles.title}>The Faces Behind the Counter</h2>
          <p className={styles.subtitle}>
            A small but mighty crew that keeps Mendel&apos;s Buf&iacute;k
            running with warmth, care, and a lot of love for good food.
          </p>
        </div>

        <div className={styles.grid}>
          {team.map((member) => (
            <div key={member.name} className={styles.card}>
              <img
                src={member.image}
                alt={member.alt}
                width={400}
                height={280}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardName}>{member.name}</h3>
                <span className={styles.cardRole}>{member.role}</span>
                <p className={styles.cardBio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
