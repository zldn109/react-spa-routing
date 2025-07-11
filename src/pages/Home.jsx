import Navbar from "@/components/Navbar";
import NewsList from "@/components/NewsList";
import Sidebar from "@/components/Sidebar";
import { selectedCategoryState } from "@/store/rootAtoms";
import { useRecoilState } from "recoil";
import styles from "@/styles/pages/Home.module.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );

  useEffect(() => {
    if (category && category !== selectedCategory) {
      setSelectedCategory(category);
    }
    if (!category && selectedCategory !== "Home") {
      setSelectedCategory("Home");
    }
  }, [category]);

  return (
    <>
      <Navbar />
      <main className={styles.base}>
        <Sidebar></Sidebar>
        <NewsList></NewsList>
      </main>
    </>
  );
}

export default Home;
