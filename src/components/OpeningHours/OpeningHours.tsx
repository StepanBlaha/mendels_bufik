import styles from "./OpeningHours.module.css";
import { Info } from "lucide-react";

const timeSlots = [
  { label: "Ranní přestávka", time: "9:35 – 9:45" },
  { label: "Velká přestávka", time: "11:20 – 11:45" },
  { label: "Odpolední přestávka", time: "12:30 – 12:50" },
];

export default function OpeningHours() {
  return (
    <section className={styles.section} id="hours">
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.sectionTag}>Kdy se stavit</span>
          <h2 className={styles.title}>Stavte se o přestávce</h2>
          <p className={styles.desc}>
            Otevíráme okénko během školních přestávek, abyste si stihli dát
            oblíbenou svačinu bez zdržení. Rychle, čerstvě, vždy připraveno.
          </p>
          <div className={styles.note}>
            <Info size={15} />
            <span>Jen školní dny (Po – Pá)</span>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Otevírací doba</h3>
            <div className={styles.cardDivider} />
            <div className={styles.timeSlots}>
              {timeSlots.map((slot) => (
                <div key={slot.label} className={styles.timeSlot}>
                  <span className={styles.timeLabel}>{slot.label}</span>
                  <span className={styles.timeValue}>{slot.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
