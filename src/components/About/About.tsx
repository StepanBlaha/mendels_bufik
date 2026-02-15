import styles from "./About.module.css";

const team = [
  {
    name: "Kuba",
    role: "Proteinový magnát",
    bio: "300g proteinu na den není pro něj háček. Když se hezky usmějete, dá vám do kafe zdarma kreatin.",
    image: "/images/team/kuba.png",
    alt: "Kuba, proteinový magnát",
  },
  {
    name: "Eva",
    role: "Káva a nápoje",
    bio: "Umí perfektní latte a vždy si pamatuje, co si dáváte nejčastěji.",
    image: "/images/team/eva.png",
    alt: "Eva, baristka",
  },
  {
    name: "Ondra",
    role: "Mistr sendvičů",
    bio: "Držitel neoficiálního rekordu v nejvíce toustech snězených za 18 let. Nejlepší toustař Moravy.",
    image: "/images/team/ondra.png",
    alt: "Ondra, mistr sendvičů",
  },
];

export default function Team() {
  return (
    <section className={`${styles.section} reveal`} id="team">
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
