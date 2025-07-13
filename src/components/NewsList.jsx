import styles from "@/styles/components/NewsList.module.scss";
import { useEffect, useState } from "react";
import { fetchTopNews } from "@/api/api.js";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  isDayState,
  newsState,
  selectedCategoryState,
} from "@/store/rootAtoms";
import IntroMessage from "@/components/IntroMessage";

const NewsList = () => {
  const [news, setNews] = useRecoilState(newsState);
  const category = useRecoilValue(selectedCategoryState);
  const isDay = useRecoilValue(isDayState);

  useEffect(() => {
    fetchTopNews(category).then(setNews);
  }, [category]);

  return (
    <>
      <div className={`${styles.newsList} ${!isDay ? styles.nightList : ""}`}>
        <IntroMessage />
        {news.map((news) => (
          <a
            className={styles.newsCard}
            key={news.url}
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.newsThumbnail}
              src={news.urlToImage}
              alt="썸네일"
            />
            <div className={styles.newsContent}>
              <div className={styles.newsTitle}>{news.title}</div>
              <div className={styles.newsDescription}>{news.description}</div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default NewsList;
