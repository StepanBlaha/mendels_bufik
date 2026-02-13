import styles from "./Menu.module.css";

const menuItems = [
  {
    category: "Pečivo",
    title: "Čerstvé croissanty",
    desc: "Máslové, křehké a pečené každé ráno. Perfektní start do školního dne.",
    price: "Od 25 Kč",
    image: "/images/hero-croissant.jpg",
    alt: "Zlatavý čerstvý croissant",
  },
  {
    category: "Svačina",
    title: "Gurmánské sendviče",
    desc: "Řemeslné pečivo plněné kvalitní šunkou, sýrem a čerstvou zeleninou.",
    price: "Od 45 Kč",
    image: "/images/sandwich.jpg",
    alt: "Čerstvý gurmánský sendvič",
  },
  {
    category: "Sladké",
    title: "Cupcaky a dobroty",
    desc: "Naše růžové cupcaky a sladké dobroty, které zlepší každou přestávku.",
    price: "Od 30 Kč",
    image: "/images/cupcakes.jpg",
    alt: "Růžové cupcaky",
  },
  {
    category: "Nápoj",
    title: "Káva a latte",
    desc: "Horká i ledová, vždy voňavá a přesně tak silná, jak potřebujete.",
    price: "Od 35 Kč",
    image: "/images/hero-coffee.jpg",
    alt: "Latte se srdíčkem",
  },
  {
    category: "Pekárna",
    title: "České koláče",
    desc: "Tradiční koláče, záviny a sladké pečivo. Chuť domova ve škole.",
    price: "Od 20 Kč",
    image: "/images/pastries-pink.jpg",
    alt: "Výběr českého pečiva",
  },
  {
    category: "Studené",
    title: "Ledové nápoje",
    desc: "Osvěžující ledové kávy, čaje a sezónní ovocné smoothie.",
    price: "Od 40 Kč",
    image: "/images/iced-coffee.jpg",
    alt: "Ledová káva",
  },
];

export default function MenuHighlights() {
  return (
    <section className={styles.section} id="menu">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.sectionTag}>Menu</span>
          <h2 className={styles.title}>Růžové tipy z pultu</h2>
          <p className={styles.subtitle}>
            Rychlé svačiny a sladké dobroty pro krátké přestávky. Vždy čerstvé,
            vždy připravené.
          </p>
        </div>

        <div className={styles.menuLayout}>
          <div className={styles.menuBoard}>
            <div className={styles.boardHeader}>
              <h3 className={styles.boardTitle}>Dnes nejoblíbenější</h3>
              <span className={styles.boardChip}>Čerstvé</span>
            </div>
            <div className={styles.rows}>
              {menuItems.map((item) => (
                <div key={item.title} className={styles.row}>
                  <div className={styles.rowInfo}>
                    <span className={styles.rowCategory}>{item.category}</span>
                    <h3 className={styles.rowTitle}>{item.title}</h3>
                    <p className={styles.rowDesc}>{item.desc}</p>
                  </div>
                  <div className={styles.rowSide}>
                    <div className={styles.rowThumbWrap}>
                      <img
                        src={item.image}
                        alt={item.alt}
                        width={90}
                        height={90}
                        className={styles.rowThumb}
                      />
                    </div>
                    <span className={styles.rowPrice}>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.menuAside}>
            <div className={styles.posterCard}>
              <img
                src="/images/cupcakes.jpg"
                alt="Růžový cupcake"
                width={320}
                height={320}
                className={styles.posterImg}
              />
              <span className={styles.posterBadge}>Vhodné jako ikona</span>
            </div>
            <div className={styles.noteCard}>
              <h4 className={styles.noteTitle}>Krátká přestávka, rychlá obsluha.</h4>
              <p className={styles.noteText}>
                Připravujeme dopředu, abyste si svůj oblíbený kousek vzali během
                pár vteřin.
              </p>
              <a href="#hours" className={styles.noteBtn}>
                Otevírací doba
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
