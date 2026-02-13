"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";
import { Menu, X, Instagram } from "lucide-react";

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
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOverlayOpen : ""}`}>
        <div className={styles.mobileCard}>
          <button
            className={styles.mobileCloseBtn}
            onClick={() => setMobileOpen(false)}
            aria-label="Zavřít menu"
          >
            <X size={24} />
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={styles.mobileLink}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
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
      </div>
    </>
  );
}
