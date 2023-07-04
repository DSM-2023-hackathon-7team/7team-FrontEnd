import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "../pages/create";
import Detail from "../pages/detail";
import Quiz from "../pages/quiz";
import Rank from "../pages/rank";
import Quizgame from "../pages/quizgame";
import Bulletin from "../pages/bulletin";
import News from "../pages/news";
import BulletinCreate from "../pages/bulletinCreate";
import BulletinDetail from "../pages/bulletinDetail";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<>Test</>} /> 이런 형식으로 페이지 추가*/}
        <Route path="/" element={<>Test</>} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/quizgame" element={<Quizgame />} />
        <Route path="/bulletin" element={<Bulletin />} />
        <Route path="/news" element={<News />} />
        <Route path="/bulletinCreate" element={<BulletinCreate />} />
        <Route path="/BulletinDetail" element={<BulletinDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
