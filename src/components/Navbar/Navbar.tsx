"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";
import { Menu, X, Instagram } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Domů", id: "home" },
  { label: "Menu", id: "menu" },
  { label: "Otevírací doba", id: "hours" },
  { label: "Galerie", id: "gallery" },
  { label: "Tým", id: "team" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navInner}>
          <a href="#home" className={styles.brand} onClick={() => scrollTo("home")}>
            <span className={styles.brandIcon}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MuTXFGfkLWVdffjEePBSUAx31f49hB.png"
                alt="Logo Mendelův Bufík"
                className={styles.logoImg}
              />
            </span>
            <span className={styles.logoText}>
              Mendelův <span className={styles.logoTextAccent}>Bufík</span>
            </span>
          </a>

          <div className={styles.navGroup}>
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`${styles.navLink} ${item.id === "home" ? styles.navLinkActive : ""}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className={styles.navActions}>
            <a
              href="https://www.instagram.com/mendels.bufik/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.igBtn}
            >
              <Instagram size={15} />
              @mendels.bufik
            </a>

            <button
              className={styles.mobileMenuBtn}
              onClick={() => setMobileOpen(true)}
              aria-label="Otevřít menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              className={styles.mobileCard}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 60, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className={styles.mobileHeader}>
                <div className={styles.mobileBrand}>
                  <span className={styles.mobileBrandIcon}>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MuTXFGfkLWVdffjEePBSUAx31f49hB.png"
                      alt="Logo Mendelův Bufík"
                      className={styles.logoImg}
                    />
                  </span>
                  <span className={styles.mobileBrandText}>
                    Mendelův <span className={styles.logoTextAccent}>Bufík</span>
                  </span>
                </div>
                <button
                  className={styles.mobileCloseBtn}
                  onClick={() => setMobileOpen(false)}
                  aria-label="Zavřít menu"
                >
                  <X size={22} />
                </button>
              </div>
              {/*<span className={styles.mobileSubtitle}>Rychlé odkazy</span>*/}
              <div className={styles.mobileLinks}>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    className={styles.mobileLink}
                    onClick={() => scrollTo(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className={styles.mobileFooter}>
                <a
                  href="https://www.instagram.com/mendels.bufik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mobileIg}
                >
                  <Instagram size={15} />
                  @mendels.bufik
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
