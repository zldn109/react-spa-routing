import styles from "@/styles/components/NewsList.module.scss";
import { useEffect, useState } from "react";
import { fetchTopNews } from "@/api/api.js";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchTopNews().then((data) => {
      setNews(data);
    });
  }, []);

  return (
    <div className={styles.newsList}>
      {news.map((news, index) => (
        <div className={styles.newsCard} key={index}>
          <img
            className={styles.newsThumbnail}
            src={news.urlToImage}
            alt="썸네일"
          ></img>
          <div className={styles.newsContent}>
            <div className={styles.newsTitle}>{news.title}</div>
            <div className={styles.newsDescription}>{news.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
