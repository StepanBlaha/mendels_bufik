import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          <div className={styles.brandCol}>
            <div className={styles.logoRow}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MuTXFGfkLWVdffjEePBSUAx31f49hB.png"
                alt="Mendel's Bufik logo"
                className={styles.logoImg}
              />
              <span className={styles.logoText}>
                Mendel&apos;s{" "}
                <span className={styles.logoTextAccent}>Buf&iacute;k</span>
              </span>
            </div>
            <p className={styles.brandDesc}>
              Mendelova Stredni Skola&apos;s coziest spot for fresh pastries,
              warm snacks, and your favorite drinks between classes.
            </p>
          </div>

          <div>
            <h3 className={styles.colTitle}>Navigate</h3>
            <ul className={styles.colLinks}>
              <li>
                <a href="#home" className={styles.colLink}>
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className={styles.colLink}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#hours" className={styles.colLink}>
                  Opening Hours
                </a>
              </li>
              <li>
                <a href="#gallery" className={styles.colLink}>
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>About</h3>
            <ul className={styles.colLinks}>
              <li>
                <a href="#team" className={styles.colLink}>
                  Our Team
                </a>
              </li>
              <li>
                <span className={styles.colLink}>Fresh Daily</span>
              </li>
              <li>
                <span className={styles.colLink}>Made with Love</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Follow</h3>
            <ul className={styles.colLinks}>
              <li>
                <a
                  href="https://www.instagram.com/mendels.bufik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.colLink}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="#socials" className={styles.colLink}>
                  Stay Connected
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className={styles.bigTagline}>{"Your Favorite School Spot"}</p>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; 2026 Mendel&apos;s Buf&iacute;k &mdash; Mendelova Stredni Skola
          </p>
          <a href="#home" className={styles.backToTop}>
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
