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
                <span>{"Mendelova Stredni Skola"}</span>
            </div>

            <h1 className={styles.heading}>
                {"Your Favorite "}
                <span className={styles.headingAccent}>School Break</span>
                {" Starts Here"}
            </h1>

            <p className={styles.subtitle}>
                Fresh pastries, warm snacks, and sweet treats made with love.
                The coziest spot at Mendel for a quick bite between classes.
            </p>

            <div className={styles.heroBtns}>
                <a href="#menu" className={styles.btnPrimary}>
                See Our Menu
                <ArrowRight size={16} />
                </a>
                <a href="#hours" className={styles.btnSecondary}>
                <Clock size={16} />
                Opening Hours
                </a>
            </div>
            </div>

            <div className={styles.heroRight}>
            <div className={styles.imageGrid}>
                <div className={`${styles.imgCard} ${styles.imgCardTall}`}>
                <img
                    src="/images/cupcakes.jpg"
                    alt="Fresh cupcakes with pink frosting"
                    width={400}
                    height={500}
                    className={styles.heroImg}
                />
                </div>
                <div className={`${styles.imgCard} ${styles.imgCardShort}`}>
                <img
                    src="/images/hero-coffee.jpg"
                    alt="Latte with heart art"
                    width={240}
                    height={165}
                    className={styles.heroImg}
                />
                </div>
                <div className={`${styles.imgCard} ${styles.imgCardShort}`}>
                <img
                    src="/images/hero-croissant.jpg"
                    alt="Fresh golden croissant"
                    width={240}
                    height={165}
                    className={styles.heroImg}
                />
                </div>
            </div>
            <div className={styles.floatingTag}>
                {"Freshly baked daily!"}
            </div>
            </div>
        </div>
        </section>
    );
}
