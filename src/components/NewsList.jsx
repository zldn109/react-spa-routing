import styles from "@/styles/components/NewsList.module.scss";

const NewsList = () => {
  return (
    <div className={styles.newsList}>
      <div className={styles.newsCard}>
        <div className={styles.newsThumbnail}></div>
        <div className={styles.newsContent}>
          <div className={styles.newsTitle}></div>
          <div className={styles.newsDescription}></div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
