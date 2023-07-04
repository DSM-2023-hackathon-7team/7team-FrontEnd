import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<>Test</>} /> 이런 형식으로 페이지 추가*/}
        <Route path="/" element={<>Test</>} />
      </Routes>
    </BrowserRouter>
  );
};
