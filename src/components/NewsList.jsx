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
        {news.map((news, index) => (
          <div
            className={styles.newsCard}
            key={index}
            onClick={() => window.open(news.url, "_blank")}
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
          </div>
        ))}
      </div>
    </>
  );
};

export default NewsList;
