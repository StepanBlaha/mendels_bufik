import styles from "./Hero.module.css";
import { ArrowRight, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.doodleOne} aria-hidden="true" />
      <div className={styles.doodleTwo} aria-hidden="true" />
      <div className={styles.doodleThree} aria-hidden="true" />

      <div className={styles.heroInner}>
        <div className={styles.heroLeft}>
          <div className={styles.badge}>
            <span>Mendelova střední škola</span>
          </div>

          <h1 className={styles.heading}>
            Vaše oblíbená <span className={styles.headingAccent}>školní přestávka</span> začíná tady
          </h1>

          <p className={styles.subtitle}>
            Čerstvé pečivo, teplé svačiny a sladké dobroty dělané s láskou.
            Nejpříjemnější zastávka na Mendelu mezi hodinami.
          </p>

          <div className={styles.heroBtns}>
            <a href="#menu" className={styles.btnPrimary}>
              Zobrazit menu
              <ArrowRight size={16} />
            </a>
            <a href="#hours" className={styles.btnSecondary}>
              <Clock size={16} />
              Otevírací doba
            </a>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.showcase}>
            <div className={styles.iconCard}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MuTXFGfkLWVdffjEePBSUAx31f49hB.png"
                alt="Logo Mendelův Bufík"
                width={240}
                height={240}
                className={styles.iconImg}
              />
              <span className={styles.iconLabel}>Ikona připravená</span>
            </div>
            <div className={styles.photoRow}>
              <div className={styles.miniCard}>
                <img
                  src="/images/hero-coffee.jpg"
                  alt="Latte se srdíčkem"
                  width={220}
                  height={140}
                  className={styles.heroImg}
                />
              </div>
              <div className={styles.miniCard}>
                <img
                  src="/images/hero-croissant.jpg"
                  alt="Čerstvý croissant"
                  width={220}
                  height={140}
                  className={styles.heroImg}
                />
              </div>
            </div>
          </div>
          <div className={styles.floatingTag}>Čerstvě pečeno každý den!</div>
        </div>
      </div>
    </section>
  );
}
