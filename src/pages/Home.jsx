import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import styles from "@/styles/pages/Home.module.scss";

function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.base}>
        <Sidebar></Sidebar>
      </main>
    </>
  );
}

export default Home;
