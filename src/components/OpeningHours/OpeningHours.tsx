import styles from "./OpeningHours.module.css";
import { Info } from "lucide-react";

const timeSlots = [
  { label: "Morning Break", time: "9:35 \u2013 9:45" },
  { label: "Lunch Break", time: "11:20 \u2013 11:45" },
  { label: "Afternoon Break", time: "12:30 \u2013 12:50" },
];

export default function OpeningHours() {
  return (
    <section className={styles.section} id="hours">
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.sectionTag}>When to Visit</span>
          <h2 className={styles.title}>Catch Us During Your Break</h2>
          <p className={styles.desc}>
            We open our windows during each school break so you can grab your
            favorite snack without missing a minute of class. Quick, fresh,
            and always ready.
          </p>
          <div className={styles.note}>
            <Info size={15} />
            <span>{"School days only (Mon \u2013 Fri)"}</span>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Opening Hours</h3>
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
