import { selectedCategoryState } from "@/store/rootAtoms";
import { useRecoilValue } from "recoil";

const categoryMessage = {
  Home: "세상의 흐름을 한 눈에, 당신만의 뉴스룸",
  business: "비즈니스 세계의 맥을 짚어드립니다.",
  entertainment: "지금 가장 핫한 엔터 소식을 만나보세요.",
  general: "놓칠 수 없는 주요 뉴스만 쏙쏙!",
  health: "건강한 삶을 위한 유익한 정보들",
  science: "호기심을 자극하는 과학 이야기",
  sports: "오늘의 경기 결과부터 이슈까지!",
  technology: "미래를 바꾸는 기술의 흐름",
};

const IntroMessage = () => {
  const category = useRecoilValue(selectedCategoryState);
  const message = categoryMessage[category];
  return (
    <div className="introMessage">
      <p>{message}</p>
    </div>
  );
};

export default IntroMessage;
