import { isDayState, selectedCategoryState } from "@/store/rootAtoms";
import styles from "@/styles/components/Sidebar.module.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const categories = [
    "home",
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );
  const isDay = useRecoilValue(isDayState);

  return (
    <aside className={`${styles.sidebar} ${!isDay ? styles.nightSidebar : ""}`}>
      <ul className={styles.categoryList}>
        {categories.map((cat) => (
          <Link to={`/${cat}`} key={cat} className={styles.link}>
            <li
              className={`${styles.categoryItem} ${
                selectedCategory === cat ? styles.active : ""
              }`}
              onClick={() => {
                setSelectedCategory(cat);
              }}
            >
              {cat === "home" ? "Home" : cat}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
