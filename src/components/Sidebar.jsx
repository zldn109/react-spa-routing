import { isDayState, selectedCategoryState } from "@/store/rootAtoms";
import styles from "@/styles/components/Sidebar.module.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  return (
    <aside className={`${styles.sidebar} ${!isDay ? styles.nightSidebar : ""}`}>
      <ul className={styles.categoryList}>
        {categories.map((cat) => (
          <li
            key={cat}
            className={`${styles.categoryItem} ${
              selectedCategory === cat ? styles.active : ""
            }`}
            onClick={() => {
              setSelectedCategory(cat);
              navigate(`/${cat}`);
            }}
          >
            {cat === "home" ? "Home" : cat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
