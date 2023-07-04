import { Router } from "./router/router";
import StyleProvider from "./styles";
import { Suspense } from "react";

function App() {
  return (
    <StyleProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Router />
      </Suspense>
    </StyleProvider>
  );
}

export default App;
