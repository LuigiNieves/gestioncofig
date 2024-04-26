import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/context.jsx";

import { AppRouter } from "./router/AppRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ContextProvider>
);
