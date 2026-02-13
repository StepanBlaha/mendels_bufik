import styles from "./About.module.css";

const team = [
  {
    name: "Terka",
    role: "Hlavní pekařka",
    bio: "Vstává za tmy, aby byly croissanty zlatavé a cupcaky dokonale ozdobené.",
    image: "/images/team-1.jpg",
    alt: "Terka, hlavní pekařka",
  },
  {
    name: "Honza",
    role: "Mistr sendvičů",
    bio: "Chystá nejčerstvější bagety a wrapy. Pokud uvidíte úsměv za pultem, je to nejspíš on.",
    image: "/images/team-2.jpg",
    alt: "Honza, mistr sendvičů",
  },
  {
    name: "Lucka",
    role: "Káva a nápoje",
    bio: "Umí perfektní latte a vždy si pamatuje, co si dáváte nejčastěji.",
    image: "/images/team-3.jpg",
    alt: "Lucka, baristka",
  },
];

export default function Team() {
  return (
    <section className={styles.section} id="team">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>Náš tým</span>
          <h2 className={styles.title}>Tváře za pultem</h2>
          <p className={styles.subtitle}>
            Malý, ale sehraný tým, který drží Mendelův Bufík v chodu s úsměvem,
            péčí a láskou k dobrému jídlu.
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
