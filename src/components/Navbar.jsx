import styles from "@/styles/components/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.base}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.logo}>NewsViewer</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
