import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} reveal`}>
      <div className={styles.footerInner}>
        <div className={styles.footerPanel}>
          <div className={styles.footerGrid}>
            <div className={styles.brandCol}>
            <div className={styles.logoRow}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MuTXFGfkLWVdffjEePBSUAx31f49hB.png"
                alt="Logo Mendel&uring;v Buf&iacute;k"
                className={styles.logoImg}
              />
              <span className={styles.logoText}>
                Mendelův <span className={styles.logoTextAccent}>Buf&iacute;k</span>
              </span>
            </div>
            <p className={styles.brandDesc}>
              Nej&uacute;tuln&#283;j&#353;&iacute; m&iacute;sto Mendelovy
              st&#345;edn&iacute; &#353;koly pro &#269;erstv&eacute; pe&#269;ivo,
              tepl&eacute; sva&#269;iny a obl&iacute;ben&eacute; n&aacute;poje
              mezi hodinami.
            </p>
          </div>

            <div className={styles.linkGroup}>
              <div>
                <h3 className={styles.colTitle}>Navigace</h3>
                <ul className={styles.colLinks}>
                  <li>
                    <a href="#home" className={styles.colLink}>
                      Dom&#367;
                    </a>
                  </li>
                  <li>
                    <a href="#menu" className={styles.colLink}>
                      Menu
                    </a>
                  </li>
                  <li>
                    <a href="#hours" className={styles.colLink}>
                      Otev&#237;rac&#237; doba
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={styles.colTitle}>O n&aacute;s</h3>
                <ul className={styles.colLinks}>
                  <li>
                    <a href="#team" className={styles.colLink}>
                      N&aacute;&#353; t&yacute;m
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={styles.colTitle}>Sledujte n&aacute;s</h3>
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
                </ul>
              </div>
            </div>
        </div>

          <p className={styles.bigTagline}>
            Va&#353;e obl&iacute;ben&eacute; m&iacute;sto ve &#353;kole
          </p>

          <div className={styles.bottom}>
            <p className={styles.copyright}>
              &copy; 2026 Mendel&#367;v Buf&iacute;k &mdash; Mendelova
              st&#345;edn&iacute; &#353;kola
            </p>
            <a href="#home" className={styles.backToTop}>
              Zp&#283;t nahoru
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
