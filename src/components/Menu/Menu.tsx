import styles from "./Menu.module.css";

const menuItems = [
  {
    category: "Pastry",
    title: "Fresh Croissants",
    desc: "Buttery, flaky, baked fresh every morning. The perfect start to your school day.",
    price: "From 25 Kc",
    image: "/images/hero-croissant.jpg",
    alt: "Golden fresh croissant",
  },
  {
    category: "Snack",
    title: "Gourmet Sandwiches",
    desc: "Artisan bread stuffed with quality meats, cheeses, and fresh veggies.",
    price: "From 45 Kc",
    image: "/images/sandwich.jpg",
    alt: "Fresh gourmet sandwich",
  },
  {
    category: "Sweet",
    title: "Cupcakes & Treats",
    desc: "Our signature pink cupcakes and sweet treats to brighten your break.",
    price: "From 30 Kc",
    image: "/images/cupcakes.jpg",
    alt: "Pink frosted cupcakes",
  },
  {
    category: "Drink",
    title: "Coffee & Latte",
    desc: "Hot or iced, our coffee is the energy boost you need between classes.",
    price: "From 35 Kc",
    image: "/images/hero-coffee.jpg",
    alt: "Latte with heart art",
  },
  {
    category: "Bakery",
    title: "Czech Pastries",
    desc: "Traditional kolace, sweet rolls, and danishes. A taste of home at school.",
    price: "From 20 Kc",
    image: "/images/pastries-pink.jpg",
    alt: "Assorted Czech pastries",
  },
  {
    category: "Cold",
    title: "Iced Drinks",
    desc: "Refreshing iced coffees, teas, and seasonal fruit smoothies.",
    price: "From 40 Kc",
    image: "/images/iced-coffee.jpg",
    alt: "Iced coffee drink",
  },
];

export default function MenuHighlights() {
  return (
    <section className={styles.section} id="menu">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.sectionTag}>Our Menu</span>
          <h2 className={styles.title}>What We Serve</h2>
          <p className={styles.subtitle}>
            Everything is prepared fresh daily. Here are some of our most-loved
            picks from the counter.
          </p>
        </div>

        <div className={styles.grid}>
          {menuItems.map((item) => (
            <div key={item.title} className={styles.card}>
              <img
                src={item.image}
                alt={item.alt}
                width={400}
                height={200}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>{item.category}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <span className={styles.cardPrice}>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
