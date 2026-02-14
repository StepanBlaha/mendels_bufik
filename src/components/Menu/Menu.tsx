import styles from "./Menu.module.css";

const menuItems = [
  {
    category: "Pečivo",
    title: "Čerstvé waffle",
    desc: "Máslové, křehké waffle. Perfektní start do školního dne. S Čokoládou nebo buenem",
    price: "Od 35 Kč",
    image: "/images/waffle.png",
    alt: "Waffle",
  },
  {
    category: "Svačina",
    title: "Gurmánské sendviče",
    desc: "Řemeslné pečivo plněné kvalitní šunkou, sýrem a čerstvou zeleninou.",
    price: "Od 25 Kč",
    image: "/images/sandwich.png",
    alt: "Čerstvý gurmánský sendvič",
  },
  /*
  {
    category: "Sladké",
    title: "Cupcaky a dobroty",
    desc: "Naše růžové cupcaky a sladké dobroty, které zlepší každou přestávku.",
    price: "Od 30 Kč",
    image: "/images/cupcake.png",
    alt: "Růžové cupcaky",
  },
  */
  {
    category: "Nápoj",
    title: "Káva a latte",
    desc: "Horká i ledová, vždy voňavá a přesně tak silná, jak potřebujete.",
    price: "Od 20 Kč",
    image: "/images/coffee.png",
    alt: "Latte se srdíčkem",
  },
  {
    category: "Snacky",
    title: "Bebe sušenky",
    desc: "Chutné sušenky bebe.",
    price: "Od 20 Kč",
    image: "/images/bebe.png",
    alt: "Bebe sušenky",
  },
  {
    category: "Snacky",
    title: "Orbit",
    desc: "Žvýkačky orbit.",
    price: "Od 25 Kč",
    image: "/images/orbit.png",
    alt: "Orbit",
  },
  {
    category: "Snacky",
    title: "Tyčinky havlík",
    desc: "Chutné slané tyčinky",
    price: "Od 20 Kč",
    image: "/images/havlik.png",
    alt: "Tyčinky havlík",
  },
  {
    category: "Snacky",
    title: "Kinder bueno",
    desc: "Sladké, jemné kinder bueno.",
    price: "Od 27 Kč",
    image: "/images/bueno.png",
    alt: "Kinder bueno",
  },
  {
    category: "Studené",
    title: "Coca cola",
    desc: "Osvěžující studená Coca cola.",
    price: "Od 25 Kč",
    image: "/images/cola.png",
    alt: "Coca cola",
  },
  {
    category: "Studené",
    title: "Voda saguaro",
    desc: "Osvěžující voda (lesní plody, citrón).",
    price: "Od 12 Kč",
    image: "/images/water.png",
    alt: "Saguaro",
  },
  {
    category: "Studené",
    title: "Ice tea",
    desc: "Studené ice tea.",
    price: "Od 17 Kč",
    image: "/images/ice_tea.png",
    alt: "Ice tea",
  },
];

export default function MenuHighlights() {
  return (
    <section className={styles.section} id="menu">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.sectionTag}>Menu</span>
          <h2 className={styles.title}>Tipy z pultu</h2>
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
            <div className={styles.promoCard}>
              <div className={styles.promoMedia}>
                <img
                  src="/images/waffle.png"
                  alt="Čerstvá waffle"
                  width={320}
                  height={240}
                  className={styles.promoImg}
                />
                <span className={styles.promoTag}>Sladké tipy</span>
              </div>
              <h4 className={styles.promoTitle}>Vafle & dobroty</h4>
              <p className={styles.promoText}>
                Křupavé waffle, Bueno i malé sladkosti pro lepší přestávku.
              </p>
              <a href="#menu" className={styles.promoBtn}>
                Mrknout do menu
              </a>
            </div>
            <div className={styles.promoCardAlt}>
              <div className={styles.promoMediaAlt}>
                <img
                  src="/images/ice_tea.png"
                  alt="Studené pití"
                  width={320}
                  height={240}
                  className={styles.promoImg}
                />
                <span className={styles.promoTagAlt}>Studené</span>
              </div>
              <h4 className={styles.promoTitle}>Ledové pití</h4>
              <p className={styles.promoText}>
                Cola, ice tea i Saguaro voda vždy připravené vychladit.
              </p>
              <a href="#hours" className={styles.promoBtnAlt}>
                Otevírací doba
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
