"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";
import { Menu, X, Instagram } from "lucide-react";

const navItems = ["Home", "Menu", "Hours", "Gallery", "Team"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={styles.navbar}>
        <a href="#home" className={styles.logo} onClick={() => scrollTo("Home")}>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MuTXFGfkLWVdffjEePBSUAx31f49hB.png"
            alt="Mendel's Bufik logo"
            className={styles.logoImg}
          />
          <span className={styles.logoText}>
            {"Mendel's "}
            <span className={styles.logoTextAccent}>{"Buf\u00EDk"}</span>
          </span>
        </a>

        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <button
              key={item}
              className={`${styles.navLink} ${item === "Home" ? styles.navLinkActive : ""}`}
              onClick={() => scrollTo(item)}
            >
              {item}
            </button>
          ))}
        </div>

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
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      <div className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOverlayOpen : ""}`}>
        <button
          className={styles.mobileCloseBtn}
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={26} />
        </button>
        {navItems.map((item) => (
          <button
            key={item}
            className={styles.mobileLink}
            onClick={() => scrollTo(item)}
          >
            {item}
          </button>
        ))}
        <a
          href="https://www.instagram.com/mendels.bufik/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.igBtn}
          style={{ marginTop: "0.5rem" }}
        >
          <Instagram size={15} />
          @mendels.bufik
        </a>
      </div>
    </>
  );
}
