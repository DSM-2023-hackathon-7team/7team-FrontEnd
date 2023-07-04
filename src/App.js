import { Router } from "./router/router";
import StyleProvider from "./styles";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <StyleProvider>
      <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
          <ToastContainer />
          <Router />
        </Suspense>
      </RecoilRoot>
    </StyleProvider>
  );
};

export default App;
