import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import FavPage from "./FavPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StoreProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/favs" element={<FavPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StoreProvider>
);
