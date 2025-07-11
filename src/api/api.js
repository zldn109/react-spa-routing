import {
  NEWS_API_TOP_HEADLINES,
  NEWS_API_BASEURL,
  NEWS_API_KEY,
} from "@/constanats";

export const fetchTopNews = async (category) => {
  console.log(category);
  const url =
    category === "Home"
      ? `${NEWS_API_BASEURL}/everything?q=latest&pageSize=20&apiKey=${NEWS_API_KEY}`
      : `${NEWS_API_TOP_HEADLINES}?country=us&pageSize=20&category=${category}&apiKey=${NEWS_API_KEY}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("뉴스데이터를 불러오는데 문제가 발생했습니다.");
    }
    const data = await res.json();
    return data.articles;
  } catch (err) {
    throw err;
  }
};
