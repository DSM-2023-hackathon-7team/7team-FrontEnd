import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "../pages/create";
import Quiz from "../pages/quiz";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<>Test</>} /> 이런 형식으로 페이지 추가*/}
        <Route path="/" element={<>Test</>} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail" element={<>Test</>} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
};
