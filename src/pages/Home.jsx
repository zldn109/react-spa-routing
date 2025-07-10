import Navbar from "@/components/Navbar";
import NewsList from "@/components/NewsList";
import Sidebar from "@/components/Sidebar";
import styles from "@/styles/pages/Home.module.scss";

function Home() {
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
