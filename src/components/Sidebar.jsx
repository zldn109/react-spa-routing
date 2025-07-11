import styles from "@/styles/components/Sidebar.module.scss";
import { useState } from "react";

const Sidebar = () => {
  const categories = [
    "Home",
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Home");

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.categoryList}>
        {categories.map((cat) => (
          <li
            key={cat}
            className={`${styles.categoryItem} ${
              selectedCategory === cat ? styles.active : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
