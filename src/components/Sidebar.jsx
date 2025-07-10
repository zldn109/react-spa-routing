import styles from "@/styles/components/Sidebar.module.scss";

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

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.categoryList}>
        {categories.map((cat) => (
          <li key={cat} className={styles.categoryItem}>
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
